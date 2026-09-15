import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Resultados",
  description: "Veja resultados reais de trabalhos realizados no Camilly Santos Studio.",
  alternates: { canonical: "/resultados" },
};

export default function ResultadosPage() {
  return (
    <>
      <div className="h-24 md:h-28" aria-hidden />
      <Gallery />
      <FinalCTA />
    </>
  );
}
