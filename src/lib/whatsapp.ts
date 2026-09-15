import { site } from "@/lib/data/site";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function serviceInquiryLink(serviceName: string): string {
  return buildWhatsAppLink(
    `Olá, Camilly! Conheci o Studio pelo site e gostaria de saber mais sobre ${serviceName} e verificar os horários disponíveis.`,
  );
}

export const finalCtaWhatsAppLink = buildWhatsAppLink(
  "Olá, Camilly! Conheci o Studio pelo site e gostaria de verificar os horários disponíveis.",
);

export const generalWhatsAppLink = buildWhatsAppLink(
  "Olá, Camilly! Conheci o Studio pelo site e gostaria de agendar um horário.",
);

export function contactFormLink(name: string, service: string, message: string): string {
  const lines = [
    "Olá, Camilly!",
    `Meu nome é ${name}.`,
    service ? `Tenho interesse em ${service}.` : null,
    message || null,
  ].filter(Boolean);
  return buildWhatsAppLink(lines.join("\n"));
}
