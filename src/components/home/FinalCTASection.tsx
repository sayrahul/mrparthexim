import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, ShieldCheck, Mail, Phone } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/config/siteConfig';

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-[#071A2B] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background radial highlight */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#07579F_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#07579F]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/60 border border-blue-700/60 text-[#FFD400] uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Your Trust, Our Promise</span>
        </span>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Have a Product Requirement?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us what you are looking for. Let&apos;s explore the right sourcing opportunity for your
          market with transparent communication and genuine Indian origin access.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#D71925] hover:bg-[#b5131e] shadow-xl shadow-red-950/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Contact Microcopy */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <a href={`tel:${siteConfig.phone}`} className="hover:text-white flex items-center space-x-1.5 transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#07579F]" />
            <span>Direct Call: {siteConfig.phoneDisplay}</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white flex items-center space-x-1.5 transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>Email: {siteConfig.email}</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span>Location: Chhatrapati Sambhajinagar, Maharashtra</span>
        </div>
      </div>
    </section>
  );
}
