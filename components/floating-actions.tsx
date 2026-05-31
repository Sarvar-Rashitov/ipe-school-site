'use client';

import { MessageCircle, Phone } from 'lucide-react';

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://t.me/ipeschool"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-secondary hover:bg-secondary/90 rounded-full text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
        title="Telegram"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="tel:+998712005060"
        className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
        title="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
