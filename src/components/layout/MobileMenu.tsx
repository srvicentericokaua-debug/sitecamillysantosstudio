"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data/site";
import { generalWhatsAppLink } from "@/lib/whatsapp";

type MobileMenuProps = {
  open: boolean;
  onNavigate: () => void;
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] flex flex-col justify-center bg-[var(--color-background)] px-8 lg:hidden"
        >
          <motion.nav
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="font-display text-4xl text-[var(--color-ink)]"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="mt-6">
              <Link
                href={generalWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onNavigate}
                className="inline-block rounded-full bg-gradient-rose px-8 py-4 text-xs uppercase tracking-[0.2em] text-white"
              >
                Agendar horário
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
