'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, ShieldCheck, MapPin, Anchor, Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/config/siteConfig';

export default function HeroSection() {
  return (
    <section className="relative bg-[#071A2B] text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#07579F_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-linear-to-b from-[#07579F]/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-[#D71925]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Origin & Target Corridor Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-xs sm:text-sm text-slate-200 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-pulse" />
              <span className="font-semibold text-white">INDIA → UAE</span>
              <span className="text-slate-400">| Commercial Trade Corridor</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white">
                From India <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-100 to-[#FFD400]">
                  to the World.
                </span>
              </h1>
              <p className="text-sm sm:text-base font-semibold text-[#FFD400] tracking-wide uppercase">
                &quot;{siteConfig.tagline}&quot;
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              MrParthExim connects international buyers with quality Indian products through a focused,
              transparent, and buyer-first export approach. Founded in Maharashtra, we bridge verified
              Indian suppliers with expanding global markets.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#07579F] hover:bg-[#054580] transition-all duration-200 shadow-lg shadow-blue-900/30 hover:-translate-y-0.5"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#D71925] hover:bg-[#b5131e] transition-all duration-200 shadow-lg shadow-red-900/30 hover:-translate-y-0.5"
              >
                <span>Request a Quote</span>
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Location & Authenticity Microcopy */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[#D71925]" />
                <span>Chhatrapati Sambhajinagar, Maharashtra, India</span>
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Verified Direct Sourcing</span>
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center space-x-1">
                <Globe className="w-3.5 h-3.5 text-[#FFD400]" />
                <span>Initial Target: UAE</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual - Maritime Container Cargo & Route Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-[#07579F] via-[#FFD400]/40 to-[#D71925] opacity-30 blur-xl" />
              
              {/* Image Container Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src="/images/hero/hero-shipping.jpg"
                    alt="International cargo container vessel representing India to UAE trade"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#071A2B] via-transparent to-black/20" />
                </div>

                {/* Floating Trade Route Telemetry Card */}
                <div className="p-5 bg-[#071A2B]/95 backdrop-blur-md border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                      <Anchor className="w-3.5 h-3.5 text-[#07579F]" />
                      <span>Primary Trade Route</span>
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-medium">
                      Active Staging
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                    <div>
                      <div className="text-slate-400 text-[10px]">ORIGIN</div>
                      <div className="font-bold text-white">JNPT / Mumbai, India</div>
                      <div className="text-[10px] text-slate-400">Maharashtra Belt</div>
                    </div>
                    <div className="flex flex-col items-center px-2">
                      <span className="text-[10px] text-[#FFD400] font-semibold">3-5 Days</span>
                      <div className="w-16 h-0.5 bg-linear-to-r from-[#07579F] via-[#FFD400] to-[#D71925] relative my-1">
                        <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-[#D71925]" />
                      </div>
                      <span className="text-[9px] text-slate-400">Direct Ocean</span>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-[10px]">PRIMARY DESTINATION</div>
                      <div className="font-bold text-[#FFD400]">Jebel Ali, UAE</div>
                      <div className="text-[10px] text-slate-400">Dubai Hub</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Flexible LCL / FCL Containerized Inquiries</span>
                    <Link href="/how-we-work" className="text-[#07579F] hover:text-blue-400 font-medium flex items-center">
                      <span>How We Work</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
