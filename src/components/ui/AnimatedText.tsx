"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string | string[];
  mode?: "words" | "lines";
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  lineClassName?: string;
  delay?: number;
  viewportAmount?: number;
};

const container = (delay: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: delay },
  },
});

const unitVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AnimatedText({
  text,
  mode = "lines",
  as = "p",
  className,
  lineClassName,
  delay = 0,
  viewportAmount = 0.6,
}: AnimatedTextProps) {
  const Tag = motion[as];
  const units: string[] =
    mode === "words"
      ? (Array.isArray(text) ? text.join(" ") : text).split(" ")
      : Array.isArray(text)
        ? text
        : [text];

  return (
    <Tag
      className={className}
      variants={container(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
    >
      {units.map((unit, i) => (
        <span key={i} className={cn("overflow-hidden", mode === "lines" ? "block" : "inline-block")}>
          <motion.span className={cn("inline-block", lineClassName)} variants={unitVariants}>
            {unit}
            {mode === "words" && i < units.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
