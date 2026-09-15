"use client";

import { motion } from "framer-motion";
import { RevealVideo } from "@/components/ui/RevealVideo";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { aboutTrustItems } from "@/lib/data/experience";

export function AboutCamilly() {
  return (
    <section className="bg-[var(--color-blush)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.85fr_1.15fr_0.7fr] md:items-center md:gap-10">
        <div className="relative mx-auto w-full max-w-xs md:mx-0">
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2"
            style={{ borderColor: "var(--color-rose)" }}
          />
          <RevealVideo
            src="/videos/camilly-quem-sou.mp4"
            className="relative aspect-[4/5] w-full rounded-2xl"
            videoClassName="object-top"
          />
        </div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
            className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-rose)]"
          >
            Sobre o studio
          </motion.span>

          <AnimatedText
            as="h2"
            mode="lines"
            text={["Beleza que valoriza", "o seu olhar"]}
            className="text-gold-metallic-deep font-display max-w-lg text-3xl leading-[1.15] md:text-5xl"
          />

          <div className="mt-7 flex max-w-lg flex-col gap-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6 }}
              className="text-base leading-relaxed text-[var(--color-muted)]"
            >
              No Camilly Santos Studio, cada detalhe é pensado para realçar o que há de mais
              bonito em você. Aos 15 anos descobri no universo da beleza o lugar onde eu queria
              estar — hoje, são mais de 5 anos cuidando de sobrancelhas, olhares e da autoestima
              de cada mulher que passa pelo Studio.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10"
          >
            <p className="text-gold-metallic-deep font-script text-4xl">Camilly Santos</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Fundadora do Studio
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 border-t border-[var(--color-border)] pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0">
          {aboutTrustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <item.icon size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[var(--color-rose)]" />
              <span className="text-sm text-[var(--color-ink)]">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
