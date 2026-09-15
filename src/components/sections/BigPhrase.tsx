import { AnimatedText } from "@/components/ui/AnimatedText";
import { bigPhrase } from "@/lib/data/story";

export function BigPhrase() {
  return (
    <section className="flex min-h-[50vh] items-center justify-center bg-[var(--color-rose-light)] px-6 py-20 text-center md:px-16">
      <AnimatedText
        as="p"
        mode="words"
        text={bigPhrase}
        viewportAmount={0.6}
        className="font-display max-w-5xl text-4xl leading-[1.15] text-[var(--color-rose-deep)] md:text-7xl"
      />
    </section>
  );
}
