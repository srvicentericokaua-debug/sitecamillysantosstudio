"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow: string;
  heading: string | string[];
  align?: "left" | "right" | "center";
  className?: string;
  headingClassName?: string;
};

export function SectionTitle({
  eyebrow,
  heading,
  align = "left",
  className,
  headingClassName,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "right" && "items-end text-right",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-rose)]"
      >
        {eyebrow}
      </motion.span>
      <AnimatedText
        as="h2"
        mode="lines"
        text={heading}
        className={cn(
          "text-gold-metallic-deep font-display text-4xl leading-[1.1] md:text-5xl",
          headingClassName,
        )}
      />
    </div>
  );
}
