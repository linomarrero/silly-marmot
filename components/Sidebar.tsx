"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/data";

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed left-4 top-4 z-50 rounded-xl border border-[#d3bfb1] bg-[#eadccd] px-5 py-3 text-lg card-shadow md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        whileTap={{ scale: 0.94 }}
      >
        {open ? "Close" : "Menu"}
      </motion.button>

      {open && <div className="fixed inset-0 z-40 bg-[#3d2e22]/20 md:hidden" onClick={() => setOpen(false)} />}

      <nav className={`fixed left-2 z-50 w-36 space-y-4 p-2 transition-transform md:top-14 md:translate-x-0 ${open ? "top-14 translate-x-0" : "top-14 -translate-x-full"} md:block`}>
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <motion.div key={item.href} whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
              <Link href={item.href} onClick={() => setOpen(false)} className={`nav-tab ${active ? "active" : ""}`}>
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </>
  );
}
