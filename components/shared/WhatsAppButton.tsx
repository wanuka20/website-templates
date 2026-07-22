"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import type { WhatsAppConfig } from "@/types";

interface WhatsAppButtonProps {
  config: WhatsAppConfig;
  className?: string;
}

export function WhatsAppButton({ config, className }: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(config.phone, config.defaultMessage);

  return (
    <aside aria-label="WhatsApp contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg whatsapp-pulse transition-transform hover:scale-105 active:scale-95 ${className ?? ""}`}
      >
        <MessageCircle className="h-7 w-7 fill-white" />
      </a>
    </aside>
  );
}

interface WhatsAppInlineProps {
  config: WhatsAppConfig;
  label?: string;
  className?: string;
}

export function WhatsAppInline({
  config,
  label = "Chat on WhatsApp",
  className,
}: WhatsAppInlineProps) {
  const url = buildWhatsAppUrl(config.phone, config.defaultMessage);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#128C7E] hover:shadow-lg ${className ?? ""}`}
    >
      <MessageCircle className="h-5 w-5 fill-white" />
      {label}
    </a>
  );
}
