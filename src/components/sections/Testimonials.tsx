"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[var(--color-rose-light)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Depoimentos"
          heading="Quem vive a experiência, sente a diferença."
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />

        <div className="flex snap-x gap-8 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-[85%] shrink-0 snap-start rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(74,37,48,0.08)] md:w-[32%]"
            >
              <Quote size={20} strokeWidth={1.25} className="text-[var(--color-rose)]" />
              <p className="font-display mt-5 text-xl italic leading-snug text-[var(--color-ink)] md:text-2xl">
                {testimonial.quote}
              </p>
              <span className="mt-5 block text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {testimonial.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
