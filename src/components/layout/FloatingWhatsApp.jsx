import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.getWhatsAppUrl("Hello! I would like to order a fresh homemade tiffin meal.")}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn animate-pulse-whatsapp"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="floating-whatsapp-text">Order on WhatsApp</span>
    </a>
  );
}
