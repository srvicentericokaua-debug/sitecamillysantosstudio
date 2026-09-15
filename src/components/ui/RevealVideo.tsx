"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealVideoProps = {
  src: string;
  className?: string;
  videoClassName?: string;
  poster?: string;
};

export function RevealVideo({ src, className, videoClassName, poster }: RevealVideoProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        className="relative h-full w-full"
      >
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <video
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={cn("h-full w-full object-cover", videoClassName)}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
