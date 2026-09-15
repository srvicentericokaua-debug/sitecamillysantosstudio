"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ImagePlus } from "lucide-react";
import { InstagramGlyph } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { site } from "@/lib/data/site";

const tiles = [
  { src: "/images/instagram.png", video: "/videos/instagram.mp4", alt: "Camilly Santos no Studio" },
  { src: "/images/retrato-profissional.png", alt: "Retrato profissional de Camilly Santos" },
  {
    src: "/images/foto-studio.png",
    video: "/videos/foto-studio.mp4",
    alt: "Ambiente do Camilly Santos Studio",
  },
  { src: "/images/cta-final.png", alt: "Rotina de cuidado no Camilly Santos Studio" },
];

export function InstagramSection() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
              className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-rose)]"
            >
              {site.instagramHandle}
            </motion.span>
            <AnimatedText
              as="h2"
              mode="lines"
              text={["Acompanhe meu trabalho"]}
              className="text-gold-metallic-deep font-display text-4xl md:text-5xl"
            />
          </div>
          <Button href={site.instagramUrl} external variant="outline">
            <InstagramGlyph size={14} strokeWidth={1.5} /> Seguir no Instagram
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((tile, i) => (
            <motion.a
              key={i}
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[var(--color-rose-light)]"
            >
              {tile.video ? (
                <video
                  src={tile.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : tile.src ? (
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[var(--color-muted)]">
                  <ImagePlus size={20} strokeWidth={1.25} />
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
