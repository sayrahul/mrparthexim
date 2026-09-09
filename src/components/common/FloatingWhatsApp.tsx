'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from '@/config/siteConfig';

// Authentic WhatsApp Brand SVG Icon
function OfficialWhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.57 4.187 1.564 5.946l-1.564 5.854 6.008-1.576c1.71 1.006 3.708 1.576 5.844 1.576 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden lg:block fixed bottom-6 right-6 z-40 group">
      {/* Speech Bubble with Official WhatsApp Icon */}
      {showTooltip && (
        <div className="mb-2.5 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200/90 flex items-center space-x-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
            <OfficialWhatsAppIcon className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-slate-900 block leading-tight">Direct Trade Inquiry</span>
            <span className="text-[11px] text-slate-500 font-medium">{siteConfig.whatsappDisplay}</span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1 transition-colors"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button with Official WhatsApp Logo */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with MrParthExim"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/35 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <OfficialWhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
}
