import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { FrameScrollSection } from "@/components/sections/FrameScrollSection";
import { AboutCamilly } from "@/components/sections/AboutCamilly";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip
        items={[
          "Design de Sobrancelhas",
          "Beleza que realça o seu olhar",
          "Técnica e cuidado em cada detalhe",
        ]}
        direction="left"
        duration={32}
        className="text-white"
        style={{ background: "var(--color-rose)" }}
      />
      <FrameScrollSection />
      <AboutCamilly />
      <Services />
      <Gallery />
      <Experience />
      <Testimonials />
      <InstagramSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
