'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from '@/config/siteConfig';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden lg:block fixed bottom-6 right-6 z-40 group">
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 text-xs py-2 px-3 rounded-xl shadow-xl border border-slate-100 flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-medium">Direct Trade Inquiry (+91 {siteConfig.phone})</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with MrParthExim"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
