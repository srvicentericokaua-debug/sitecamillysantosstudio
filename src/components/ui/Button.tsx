import Link from "next/link";
import type { ReactNode } from "react";
import { WhatsAppGlyph } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
  icon?: boolean;
};

const base =
  "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] transition-all duration-300";

const variants = {
  primary:
    "bg-gradient-rose text-white shadow-[0_10px_25px_rgba(201,100,127,0.35)] hover:shadow-[0_14px_32px_rgba(201,100,127,0.45)] hover:-translate-y-0.5",
  outline:
    "border border-[var(--color-rose)] text-[var(--color-rose-deep)] hover:bg-[var(--color-rose-light)]",
  ghost: "text-[var(--color-rose-deep)] px-0 py-1 link-underline rounded-none",
};

export function Button({ href, children, variant = "primary", className, external, icon }: ButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(base, variants[variant], className)}
    >
      {icon && <WhatsAppGlyph size={15} />}
      {children}
    </Link>
  );
}
