"use client";

import { motion } from "framer-motion";
import { RevealVideo } from "@/components/ui/RevealVideo";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experienceItems } from "@/lib/data/experience";

export function Experience() {
  return (
    <section className="bg-[var(--color-blush)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
        <RevealVideo
          src="/videos/secao-experiencia.mp4"
          className="aspect-[4/5] w-full rounded-2xl"
        />

        <div>
          <SectionTitle
            eyebrow="A experiência Studio"
            heading={["Mais do que beleza.", "Uma experiência pensada para você."]}
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {experienceItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-rose-light)] text-[var(--color-rose-deep)]">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-gold-metallic-deep font-display mt-4 text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
