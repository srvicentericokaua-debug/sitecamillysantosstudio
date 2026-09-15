"use client";

import { motion } from "framer-motion";
import { RevealVideo } from "@/components/ui/RevealVideo";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { storyParagraphs, storyStats } from "@/lib/data/story";

export function AboutFull() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-0 md:py-32">
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -top-4 left-1/2 hidden -translate-x-1/2 select-none text-[20vw] leading-none text-[var(--color-rose)]/10 md:block"
      >
        CAMILLY
      </span>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 md:flex-row md:items-center md:gap-4 md:px-10">
        <div className="relative w-full md:w-[40%] md:px-6">
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2"
            style={{ borderColor: "var(--color-rose)" }}
          />
          <RevealVideo
            src="/videos/camilly-quem-sou.mp4"
            className="relative aspect-[3/4] w-full rounded-2xl"
            videoClassName="object-top"
          />
        </div>

        <div className="relative w-full px-6 md:w-[60%] md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
            className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-rose)]"
          >
            A história por trás do Studio
          </motion.span>

          <AnimatedText
            as="h2"
            mode="lines"
            text={["Minha paixão pela beleza", "se transformou em propósito."]}
            className="text-gold-metallic-deep font-display max-w-xl text-3xl leading-[1.15] md:text-5xl"
          />

          <div className="mt-9 flex max-w-xl flex-col gap-5">
            {storyParagraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-base leading-relaxed text-[var(--color-muted)] md:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="mt-12 flex max-w-xl flex-wrap gap-12">
            {storyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="max-w-[200px]"
              >
                <span className="text-gold-metallic-deep font-display text-5xl md:text-6xl">
                  {stat.prefix}
                  {stat.value}
                  <span className="text-xl align-top text-[var(--color-rose)]"> {stat.suffix}</span>
                </span>
                <p className="mt-3 text-sm text-[var(--color-muted)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-14 border-t border-[var(--color-border)] pt-8"
          >
            <p className="text-gold-metallic-deep font-script text-4xl">Camilly Santos</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Fundadora do Studio
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
