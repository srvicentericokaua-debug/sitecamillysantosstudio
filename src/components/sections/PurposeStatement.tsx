import { AnimatedText } from "@/components/ui/AnimatedText";
import { purposeStatement } from "@/lib/data/story";

export function PurposeStatement() {
  return (
    <section className="bg-gradient-mauve flex min-h-[60vh] items-center justify-center px-6 py-24 text-center md:px-16">
      <AnimatedText
        as="p"
        mode="lines"
        text={purposeStatement}
        viewportAmount={0.5}
        className="text-gold-metallic font-display max-w-4xl text-3xl leading-[1.3] md:text-6xl"
      />
    </section>
  );
}
