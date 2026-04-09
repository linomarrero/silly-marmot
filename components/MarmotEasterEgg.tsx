"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type MarmotState = "hidden" | "peek" | "look-left" | "look-right" | "running";

export function MarmotEasterEgg() {
  const [state, setState] = useState<MarmotState>("hidden");
  const [runDistance, setRunDistance] = useState(1400);
  const timerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const resetIdleTimer = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (state !== "running") setState("hidden");
    timerRef.current = window.setTimeout(() => {
      setState("peek");
    }, 12000);
  };

  useEffect(() => {
    // Avoid empty MP3s in dev; WAV plays reliably across browsers.
    audioRef.current = new Audio("/sounds/squeak.wav");
    setRunDistance(window.innerWidth + 220);

    const activity = () => resetIdleTimer();
    const onResize = () => setRunDistance(window.innerWidth + 220);
    window.addEventListener("mousemove", activity);
    window.addEventListener("click", activity);
    window.addEventListener("keydown", activity);
    window.addEventListener("resize", onResize);
    resetIdleTimer();

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      window.removeEventListener("mousemove", activity);
      window.removeEventListener("click", activity);
      window.removeEventListener("keydown", activity);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state !== "peek") return;
    const leftTimer = window.setTimeout(() => setState("look-left"), 1200);
    const rightTimer = window.setTimeout(() => setState("look-right"), 2000);
    const hideTimer = window.setTimeout(() => {
      setState("hidden");
      resetIdleTimer();
    }, 3200);

    return () => {
      window.clearTimeout(leftTimer);
      window.clearTimeout(rightTimer);
      window.clearTimeout(hideTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const handleClick = async () => {
    if (state === "hidden" || state === "running") return;
    setState("running");
    try {
      await audioRef.current?.play();
    } catch {
      // Fallback squeak using Web Audio if file playback is blocked.
      const audioCtx = new AudioContext();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = "triangle";
      osc.frequency.setValueAtTime(990, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    }
  };

  const y = state === "hidden" || state === "running" ? 90 : 10;
  const scaleX = state === "look-left" ? -1 : 1;

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Hidden marmot"
      className="fixed bottom-0 right-5 z-50 h-28 w-24 border-none bg-transparent p-0"
      initial={false}
      animate={
        state === "running"
          ? { x: [-10, -runDistance], y: 0, scaleX: -1 }
          : { x: 0, y, scaleX }
      }
      transition={
        state === "running"
          ? { duration: 2.5, ease: "easeInOut" }
          : { type: "spring", stiffness: 200, damping: 18 }
      }
      onAnimationComplete={() => {
        if (state === "running") {
          setState("hidden");
          resetIdleTimer();
        }
      }}
    >
      <Image src="/images/marmot.png" alt="Marmot easter egg" fill sizes="96px" className="object-contain" />
    </motion.button>
  );
}
