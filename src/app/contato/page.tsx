import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com o Camilly Santos Studio e consulte os horários disponíveis pelo WhatsApp.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <div className="h-24 md:h-28" aria-hidden />
      <ContactForm />
    </>
  );
}
