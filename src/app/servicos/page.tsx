import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços do Camilly Santos Studio, pensados para valorizar cada detalhe do seu olhar.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <div className="h-24 md:h-28" aria-hidden />
      <Services showCta={false} />
      <FinalCTA />
    </>
  );
}
