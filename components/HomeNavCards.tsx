"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navItems } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function HomeNavCards() {
  const featured = navItems.slice(0, 6);

  return (
    <div className="space-y-4">
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 gap-4">
        {featured.map((item) => (
          <motion.div
            key={item.href}
            variants={card}
            whileHover={{ rotate: -1, scale: 1.04, y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
          >
            <Link
              href={item.href}
              className="tape relative block min-h-32 rounded-2xl border border-[#e3d5c6] bg-[#f7efe3] p-4 card-shadow"
            >
              <p className="text-xl italic">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-[#5a493c]">{item.blurb}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <Link href="/for-parents" className="inline-block rounded-xl bg-[#e7dbcf] px-4 py-2 text-sm card-shadow">
        Parent Resources →
      </Link>
    </div>
  );
}
