"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { services } from "@/lib/data/services";
import { contactFormLink } from "@/lib/whatsapp";
import { site } from "@/lib/data/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const link = contactFormLink(name.trim(), service, message.trim());
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-[var(--color-blush)] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
            className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-rose)]"
          >
            Contato
          </motion.span>
          <AnimatedText
            as="h1"
            mode="lines"
            text={["Vamos cuidar", "do seu olhar?"]}
            className="text-gold-metallic-deep font-display text-4xl leading-[1.1] md:text-6xl"
          />
          <p className="mt-7 max-w-sm text-[var(--color-muted)]">
            Preencha o formulário e conversaremos diretamente pelo WhatsApp para confirmar o
            melhor horário para você.
          </p>
          <div className="mt-9 text-sm text-[var(--color-muted)]">
            <p>{site.instagramHandle}</p>
            <p className="mt-1">{site.whatsappDisplay}</p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-7 rounded-3xl bg-white p-8 shadow-[0_15px_40px_rgba(74,37,48,0.08)] md:p-10"
        >
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">Nome</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b border-[var(--color-border)] bg-transparent py-3 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-rose)]"
              placeholder="Seu nome"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Serviço de interesse
            </span>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="border-b border-[var(--color-border)] bg-transparent py-3 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-rose)]"
            >
              <option value="">Selecione um serviço</option>
              {services
                .filter((s) => s.confirmed)
                .map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Mensagem
            </span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="resize-none border-b border-[var(--color-border)] bg-transparent py-3 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-rose)]"
              placeholder="Conte um pouco sobre o que você procura"
            />
          </label>

          <button
            type="submit"
            className="bg-gradient-rose mt-2 w-fit rounded-full px-8 py-4 text-xs uppercase tracking-[0.2em] text-white shadow-[0_10px_25px_rgba(201,100,127,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Enviar pelo WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
