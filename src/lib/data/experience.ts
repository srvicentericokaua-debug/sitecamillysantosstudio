import type { LucideIcon } from "lucide-react";
import { UserRound, ShieldCheck, HeartHandshake, Sparkles, Eye, Gem } from "lucide-react";

export type TrustItem = {
  icon: LucideIcon;
  title: string;
};

export type ExperienceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Badges curtos exibidos na hero — afirmações genéricas de cuidado/serviço,
// sem números ou fatos específicos que não foram confirmados.
export const heroTrustItems: TrustItem[] = [
  { icon: UserRound, title: "Atendimento personalizado" },
  { icon: ShieldCheck, title: "Higiene e segurança" },
  { icon: HeartHandshake, title: "Cuidado em cada detalhe" },
];

export const aboutTrustItems: TrustItem[] = [
  { icon: Gem, title: "Técnica e cuidado em cada atendimento" },
  { icon: Sparkles, title: "Atendimento humanizado e exclusivo" },
  { icon: Eye, title: "Resultados que respeitam o seu olhar" },
];

export const experienceItems: ExperienceItem[] = [
  {
    icon: HeartHandshake,
    title: "Atendimento personalizado",
    description: "Cada horário é dedicado inteiramente a você e à sua história.",
  },
  {
    icon: Sparkles,
    title: "Técnica e cuidado",
    description: "Mais de 5 anos de prática diária no universo das sobrancelhas.",
  },
  {
    icon: Eye,
    title: "Valorização dos traços naturais",
    description: "O olhar é trabalhado para revelar, não para esconder.",
  },
  {
    icon: UserRound,
    title: "Resultado alinhado a você",
    description: "Cada resultado é pensado para respeitar sua identidade.",
  },
];
