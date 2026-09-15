"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/lib/data/services";
import { serviceInquiryLink } from "@/lib/whatsapp";

type ServicesProps = {
  showCta?: boolean;
};

export function Services({ showCta = true }: ServicesProps) {
  return (
    <section className="bg-[var(--color-rose-light)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Nossos serviços" heading={["Técnicas que", "realçam o seu olhar"]} />
          {showCta && (
            <Button href="/servicos" variant="outline">
              Conheça todos os serviços
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-blush)]">
                {service.confirmed ? (
                  service.video ? (
                    <video
                      src={service.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                    />
                  ) : (
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(min-width: 768px) 22vw, 45vw"
                      className="object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                    />
                  )
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--color-muted)]">
                    <ImagePlus size={22} strokeWidth={1.25} />
                    <span className="px-3 text-center text-[10px] uppercase tracking-[0.1em]">
                      Foto a adicionar
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4">
                {!service.confirmed && (
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    Em breve
                  </span>
                )}
                <h3 className="font-display text-lg text-[var(--color-ink)]">{service.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">
                  {service.description}
                </p>
                {service.confirmed && (
                  <a
                    href={serviceInquiryLink(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-3 inline-block text-xs uppercase tracking-[0.15em] text-[var(--color-rose-deep)]"
                  >
                    Quero agendar
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
