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
        transition={{ duration: 1.8, times: [0, 0.2, 0.75, 1], ease: [0.76, 0, 0.24, 1] }}
        className="bg-gradient-rose absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.8, times: [0, 0.22, 0.68, 0.78], ease: [0.76, 0, 0.24, 1] }}
          className="relative flex items-center justify-center px-14 py-8"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{ background: "rgba(12, 3, 8, 0.72)", filter: "blur(24px)" }}
          />
          <motion.span
            initial={{ clipPath: "inset(0 101% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.65, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="font-display text-gold-metallic relative inline-block text-center text-[48px] italic tracking-[0.03em] md:text-[77px]"
          >
            Camilly Santos
          </motion.span>
        </motion.div>
      </motion.div>

    </div>
  );
}
