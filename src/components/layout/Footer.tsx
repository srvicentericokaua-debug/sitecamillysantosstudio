import Link from "next/link";
import { InstagramGlyph } from "@/components/ui/icons";
import { site, navLinks } from "@/lib/data/site";
import { generalWhatsAppLink } from "@/lib/whatsapp";
import { Logo } from "./Logo";

const footerLinks = navLinks.filter((l) =>
  ["/", "/quem-sou", "/servicos", "/resultados", "/contato"].includes(l.href),
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-mauve px-6 py-16 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-sm text-white/70">
            Beleza, técnica e cuidado para valorizar cada detalhe do seu olhar.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="mb-1 text-xs uppercase tracking-[0.2em] text-white/50">Navegação</span>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-underline w-fit text-sm text-white/85">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="mb-1 text-xs uppercase tracking-[0.2em] text-white/50">Contato</span>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline flex w-fit items-center gap-2 text-sm text-white/85"
          >
            <InstagramGlyph size={15} strokeWidth={1.5} /> {site.instagramHandle}
          </a>
          <span className="text-sm text-white/85">{site.whatsappDisplay}</span>
          <Link
            href={generalWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block w-fit rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.2em] text-[var(--color-mauve-dark)] transition-colors hover:bg-[var(--color-rose-light)]"
          >
            Agendar horário
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-white/15 pt-6 text-xs text-white/50">
        © {year} {site.brandName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
