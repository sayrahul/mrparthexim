'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks, siteConfig, getWhatsAppUrl } from '@/config/siteConfig';
import { Menu, X, ArrowRight, MessageCircle, Phone, Globe, ChevronRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top micro-bar for trust & direct contact on desktop */}
      <div className="hidden lg:block bg-[#071A2B] text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-[#FFD400]" />
              <span className="font-medium text-white">India → UAE Export Corridor</span>
              <span className="text-slate-400">| Chhatrapati Sambhajinagar, Maharashtra</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-[#FFD400] italic font-medium">&quot;{siteConfig.tagline}&quot;</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-header py-2.5 shadow-md border-b border-slate-200/80'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Brand Logo */}
            <Link href="/" className="flex items-center group relative z-10">
              <div className="relative h-10 w-44 sm:h-12 sm:w-56 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.png"
                  alt="MrParthExim - Your Trust, Our Promise"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? 'text-[#07579F] bg-blue-50/80 font-semibold shadow-xs'
                        : 'text-slate-700 hover:text-[#07579F] hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Primary Action Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#D71925] hover:bg-[#b5131e] transition-all duration-150 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* Mobile Header Menu Trigger */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#07579F]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto z-50 p-5 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 pb-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                Main Navigation
              </div>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'text-[#07579F] bg-blue-50 font-semibold'
                        : 'text-slate-700 hover:text-[#07579F] hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 space-y-2">
                <Link
                  href="/faq"
                  className="flex items-center justify-between px-3.5 py-2 text-sm text-slate-600 hover:text-[#07579F]"
                >
                  <span>Frequently Asked Questions</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
                <Link
                  href="/quote"
                  className="flex items-center justify-center w-full py-3 rounded-lg text-base font-semibold text-white bg-[#D71925] hover:bg-[#b5131e] shadow-sm"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Founder & Location micro-badge in mobile drawer */}
              <div className="mt-4 p-3.5 bg-slate-50 rounded-lg text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">Founder: {siteConfig.founder}</p>
                <p>{siteConfig.address.formatted}</p>
                <p className="text-slate-500 pt-1">Target Market: {siteConfig.businessStage.confirmedTargetMarket} & Global Horizons</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
