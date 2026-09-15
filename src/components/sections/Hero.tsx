"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { useLenis } from "@/components/ui/SmoothScrollProvider";
import { heroTrustItems } from "@/lib/data/experience";
import { generalWhatsAppLink } from "@/lib/whatsapp";

const INTRO_SESSION_KEY = "cs-intro-played";
const INTRO_LOCK_MS = 2200;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  // Opening sequence: on the very first visit of the session, hold scroll
  // locked while the hero text finishes animating in, then release and
  // glide the page down past the hero on its own. Lenis intercepts
  // wheel/touch scrolling itself, so both `lenis.stop()` (blocks Lenis's
  // own scroll handling) and `overflow:hidden` (blocks native scrollbar/
  // keyboard scrolling) are needed to actually hold the page still.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(INTRO_SESSION_KEY)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, "1");
      return;
    }
    if (!lenis) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis.stop();

    const timer = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      lenis.start();
      window.sessionStorage.setItem(INTRO_SESSION_KEY, "1");
      const target = sectionRef.current?.getBoundingClientRect();
      if (target) {
        lenis.scrollTo(target.bottom + window.scrollY, { duration: 1.4 });
      }
    }, INTRO_LOCK_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      lenis.start();
    };
  }, [lenis]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#f6ece4] pt-32 pb-16 md:pt-0 md:pb-0"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="hero-photo-mask absolute inset-y-0 right-0 hidden w-full md:block md:w-[62%]"
      >
        <Image
          src="/images/hero-studio.png"
          alt="Camilly Santos no Studio"
          fill
          priority
          sizes="(min-width: 768px) 62vw, 100vw"
          quality={95}
          className="object-cover object-[62%_18%]"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40"
        style={{ background: "linear-gradient(180deg, #f6ece4 0%, transparent 100%)" }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-20 md:flex-row md:items-center md:px-10 md:pt-0">
        <div className="w-full py-10 md:w-[52%] md:py-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 block text-xs uppercase tracking-[0.35em]"
            style={{ color: "var(--color-rose-deep)" }}
          >
            Camilly Santos Studio
          </motion.span>

          <AnimatedText
            as="h1"
            mode="lines"
            text={["Seja bem-vinda", "ao Studio", "Camilly Santos."]}
            delay={0.25}
            className="font-display text-[12vw] leading-[1.05] text-[var(--color-ink)] md:text-[3.6rem] lg:text-[4.2rem]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-6 max-w-md text-base text-[var(--color-muted)] md:text-lg"
          >
            Sobrancelhas bem cuidadas realçam o que há de mais bonito em você. No Camilly Santos
            Studio, cada detalhe é pensado para valorizar sua beleza de forma única.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-9"
          >
            <Button href={generalWhatsAppLink} external variant="primary" icon>
              Agendar seu horário
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
          >
            {heroTrustItems.map((item) => (
              <TrustBadge key={item.title} icon={item.icon} title={item.title} tone="light" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
