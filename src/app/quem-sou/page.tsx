import type { Metadata } from "next";
import { AboutFull } from "@/components/sections/AboutFull";
import { PurposeStatement } from "@/components/sections/PurposeStatement";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Sobre mim",
  description:
    "Conheça a história de Camilly Santos, fundadora do Camilly Santos Studio, e o propósito por trás do seu trabalho com sobrancelhas e autoestima.",
  alternates: { canonical: "/quem-sou" },
};

export default function QuemSouPage() {
  return (
    <>
      <div className="h-24 md:h-28" aria-hidden />
      <AboutFull />
      <PurposeStatement />
      <FinalCTA />
    </>
  );
}
