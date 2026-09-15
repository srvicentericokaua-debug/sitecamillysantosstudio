"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImagePlus, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { galleryItems } from "@/lib/data/gallery";

export function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [openSrc, setOpenSrc] = useState<{ src: string; video?: string; alt: string } | null>(
    null,
  );

  function scrollBy(amount: number) {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Resultados reais" heading={["Clientes que", "confiam e amam"]} />
          <div className="flex items-center gap-3">
            <Button href="/resultados" variant="outline">
              Ver mais resultados
            </Button>
            <div className="hidden gap-2 md:flex">
              <button
                aria-label="Anterior"
                onClick={() => scrollBy(-320)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-rose-deep)] transition-colors hover:bg-[var(--color-rose-light)]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Próximo"
                onClick={() => scrollBy(320)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-rose-deep)] transition-colors hover:bg-[var(--color-rose-light)]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {galleryItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                item.src && setOpenSrc({ src: item.src, video: item.video, alt: item.alt })
              }
              className="group relative aspect-[4/5] w-[70%] shrink-0 snap-start overflow-hidden rounded-2xl bg-[var(--color-rose-light)] sm:w-[45%] md:w-[24%]"
            >
              {item.src ? (
                <>
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 24vw, 70vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="p-4 text-xs uppercase tracking-[0.15em] text-white">Ver</span>
                  </div>
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--color-muted)]">
                  <ImagePlus size={22} strokeWidth={1.25} />
                  <span className="max-w-[70%] text-center text-[11px] uppercase tracking-[0.1em]">
                    {item.alt}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-6"
            onClick={() => setOpenSrc(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[80vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {openSrc.video ? (
                <video
                  src={openSrc.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image src={openSrc.src} alt={openSrc.alt} fill sizes="90vw" className="object-contain" />
              )}
            </motion.div>
            <button
              aria-label="Fechar"
              onClick={() => setOpenSrc(null)}
              className="absolute right-6 top-6 text-white"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
