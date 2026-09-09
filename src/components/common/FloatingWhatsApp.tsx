'use client';

import React from 'react';
import { getWhatsAppUrl, siteConfig } from '@/config/siteConfig';

// Authentic Official WhatsApp Brand SVG Icon
function OfficialWhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 18.6654 1.6969 21.1685 2.91501 23.3361L1.10938 29.9324C1.00976 30.2965 1.11874 30.6865 1.39121 30.9419C1.66367 31.1973 2.05779 31.2801 2.41097 31.1558L8.79093 28.9136C10.9069 30.2393 13.3768 31 16 31ZM22.8443 19.3409C22.5627 19.2001 21.1738 18.5165 20.9152 18.4227C20.6566 18.3288 20.4688 18.2819 20.281 18.5636C20.0932 18.8452 19.5532 19.479 19.3888 19.6669C19.2245 19.8547 19.0602 19.8782 18.7785 19.7374C18.4968 19.5966 17.5898 19.2995 16.5164 18.3421C15.6806 17.5966 15.1158 16.6757 14.9515 16.3941C14.7872 16.1124 14.9342 15.96 15.0754 15.8196C15.2023 15.6933 15.3582 15.4884 15.4991 15.3241C15.64 15.1598 15.687 15.0424 15.7809 14.8546C15.8748 14.6668 15.8278 14.5025 15.7574 14.3617C15.687 14.2209 15.1234 12.8361 14.8887 12.2728C14.6599 11.724 14.4277 11.7981 14.2543 11.7895C14.0899 11.7813 13.9021 11.7801 13.7143 11.7801C13.5265 11.7801 13.2213 11.8505 12.9627 12.1322C12.7042 12.4139 11.9764 13.0945 11.9764 14.4793C11.9764 15.8641 12.9862 17.202 13.1271 17.3898C13.268 17.5776 15.1189 20.4286 17.9576 21.6547C18.6328 21.9463 19.1601 22.1202 19.5707 22.2507C20.2486 22.466 20.8654 22.4354 21.3533 22.3625C21.8971 22.2813 23.0274 21.6787 23.2622 21.0215C23.4969 20.3643 23.4969 19.8009 23.4265 19.6835C23.3561 19.5661 23.1683 19.4957 22.8867 19.3549L22.8443 19.3409Z"
        fill="#25D366"
      />
      <path
        d="M19.3888 19.6669C19.5532 19.479 20.0932 18.8452 20.281 18.5636C20.4688 18.2819 20.6566 18.3288 20.9152 18.4227C21.1738 18.5165 22.5627 19.2001 22.8443 19.3409L22.8867 19.3549C23.1683 19.4957 23.3561 19.5661 23.4265 19.6835C23.4969 19.8009 23.4969 20.3643 23.2622 21.0215C23.0274 21.6787 21.8971 22.2813 21.3533 22.3625C20.8654 22.4354 20.2486 22.466 19.5707 22.2507C19.1601 22.1202 18.6328 21.9463 17.9576 21.6547C15.1189 20.4286 13.268 17.5776 13.1271 17.3898C12.9862 17.202 11.9764 15.8641 11.9764 14.4793C11.9764 13.0945 12.7042 12.4139 12.9627 12.1322C13.2213 11.8505 13.5265 11.7801 13.7143 11.7801C13.9021 11.7801 14.0899 11.7813 14.2543 11.7895C14.4277 11.7981 14.6599 11.724 14.8887 12.2728C15.1234 12.8361 15.687 14.2209 15.7574 14.3617C15.8278 14.5025 15.8748 14.6668 15.7809 14.8546C15.687 15.0424 15.64 15.1598 15.4991 15.3241C15.3582 15.4884 15.2023 15.6933 15.0754 15.8196C14.9342 15.96 14.7872 16.1124 14.9515 16.3941C15.1158 16.6757 15.6806 17.5966 16.5164 18.3421C17.5898 19.2995 18.4968 19.5966 18.7785 19.7374C19.0602 19.8782 19.2245 19.8547 19.3888 19.6669Z"
        fill="white"
      />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  return (
    <div className="hidden lg:block fixed bottom-6 right-6 z-40">
      {/* Single Unified Floating WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with MrParthExim"
        className="group flex items-center space-x-3 bg-white text-slate-900 py-2.5 px-4 rounded-full shadow-2xl border border-slate-200 hover:border-[#25D366] hover:shadow-[#25D366]/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
          <OfficialWhatsAppIcon className="w-5 h-5" />
        </div>
        <div className="text-left pr-1">
          <span className="font-bold text-xs block text-slate-900 leading-tight">
            Direct Trade Inquiry
          </span>
          <span className="text-[11px] text-emerald-600 font-semibold tracking-tight">
            {siteConfig.whatsappDisplay}
          </span>
        </div>
      </a>
    </div>
  );
}
