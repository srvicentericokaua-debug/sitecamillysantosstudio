import Image from "next/image";
import { site } from "@/lib/data/site";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const textColor = tone === "light" ? "text-white" : "text-[var(--color-ink)]";
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.jpeg"
        alt={site.brandName}
        width={44}
        height={44}
        className="h-11 w-11 rounded-full object-cover"
      />
      <span className={`font-display text-lg leading-tight ${textColor}`}>
        {site.brandShort}
        <span className="block text-[10px] font-normal uppercase tracking-[0.35em] text-[var(--color-gold)]">
          Studio
        </span>
      </span>
    </div>
  );
}
