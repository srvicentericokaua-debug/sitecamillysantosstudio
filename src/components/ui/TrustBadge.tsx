import type { LucideIcon } from "lucide-react";

type TrustBadgeProps = {
  icon: LucideIcon;
  title: string;
  tone?: "light" | "dark";
};

export function TrustBadge({ icon: Icon, title, tone = "light" }: TrustBadgeProps) {
  const isDark = tone === "dark";
  return (
    <div className="flex items-center gap-3">
      <span
        className={
          isDark
            ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white"
            : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-rose-light)] text-[var(--color-rose-deep)]"
        }
      >
        <Icon size={17} strokeWidth={1.5} />
      </span>
      <span
        className={
          isDark
            ? "text-sm text-white/90"
            : "text-sm text-[var(--color-ink)]"
        }
      >
        {title}
      </span>
    </div>
  );
}
