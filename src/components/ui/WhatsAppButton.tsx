"use client";

import { motion } from "framer-motion";
import { WhatsAppGlyph } from "@/components/ui/icons";
import { generalWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <motion.a
      href={generalWhatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      className="group fixed bottom-6 right-5 z-[60] flex items-center gap-3 rounded-full bg-gradient-rose px-4 py-4 text-white shadow-[0_10px_28px_rgba(156,79,104,0.4)] md:bottom-8 md:right-8"
      aria-label="Agende pelo WhatsApp"
    >
      <WhatsAppGlyph size={20} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs uppercase tracking-[0.15em] transition-all duration-300 group-hover:max-w-[160px]">
        Agende pelo WhatsApp
      </span>
    </motion.a>
  );
}
