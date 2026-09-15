"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function RouteTransitionOverlay() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
      <motion.div
        key={pathname}
        initial={{ y: "-100%" }}
        animate={{ y: ["-100%", "0%", "0%", "-100%"] }}
        transition={{ duration: 0.9, times: [0, 0.35, 0.55, 1], ease: [0.76, 0, 0.24, 1] }}
        className="bg-gradient-rose absolute inset-0"
      />
    </div>
  );
}
