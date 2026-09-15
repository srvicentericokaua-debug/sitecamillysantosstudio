"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data/site";
import { generalWhatsAppLink } from "@/lib/whatsapp";
import { InstagramGlyph } from "@/components/ui/icons";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
          scrolled || menuOpen
            ? "border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-md"
            : "border-[var(--color-border)]/70 bg-[var(--color-background)]/85 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-xs uppercase tracking-[0.15em] text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-rose)] hover:text-[var(--color-rose-deep)] lg:flex"
              aria-label="Instagram"
            >
              <InstagramGlyph size={16} />
            </Link>
            <Link
              href={generalWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-gradient-rose px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-white shadow-[0_8px_20px_rgba(201,100,127,0.35)] transition-transform hover:-translate-y-0.5 lg:inline-block"
            >
              Agendar horário
            </Link>
            <button
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-[70] text-[var(--color-ink)] lg:hidden"
            >
              <motion.div
                initial={false}
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </>
  );
}
