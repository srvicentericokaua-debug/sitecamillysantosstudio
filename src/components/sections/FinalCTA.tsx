"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { WhatsAppGlyph } from "@/components/ui/icons";
import { site } from "@/lib/data/site";
import { finalCtaWhatsAppLink } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section
      data-persist="true"
      className="bg-gradient-rose relative overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[32%] opacity-25 lg:block"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 45%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 45%)",
        }}
      >
        <Image
          src="/images/cta-final.png"
          alt=""
          fill
          sizes="32vw"
          className="object-cover object-right"
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
            className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/80"
          >
            Vamos realçar a sua beleza?
          </motion.span>
          <AnimatedText
            as="h2"
            mode="lines"
            text="Agende seu horário"
            className="text-gold-metallic font-display text-3xl md:text-5xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gold-metallic font-script mt-2 text-3xl md:text-4xl"
          >
            e sinta a diferença!
          </motion.p>
        </div>

        <motion.a
          href={finalCtaWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 rounded-full bg-white px-6 py-4 text-[var(--color-rose-deep)] shadow-[0_12px_30px_rgba(74,37,48,0.25)] transition-transform hover:-translate-y-0.5"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-rose-light)]">
            <WhatsAppGlyph size={20} />
          </span>
          <span className="text-left">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Fale comigo pelo WhatsApp
            </span>
            <span className="font-display block text-lg">{site.whatsappDisplay}</span>
          </span>
        </motion.a>
      </div>
    </section>
  );
}
