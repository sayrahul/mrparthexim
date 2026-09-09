'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, FileText, BookOpen, Phone, MoreHorizontal, X, Compass, Award, GitMerge, HelpCircle, Shield, FileCheck } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Products', href: '/products', icon: Package },
    { name: 'Quote', href: '/quote', icon: FileText, isPrimary: true },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <>
      {/* Secondary Bottom Sheet Modal for About, Global Reach, How We Work, FAQ */}
      {secondaryMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-xs transition-opacity duration-200">
          <div
            className="fixed inset-0"
            onClick={() => setSecondaryMenuOpen(false)}
            aria-label="Close menu backdrop"
          />
          <div className="relative bg-white rounded-t-2xl p-6 shadow-2xl border-t border-slate-200 z-10 max-h-[80vh] overflow-y-auto pb-24">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-display font-bold text-base text-slate-800">
                Explore MrParthExim
              </span>
              <button
                type="button"
                onClick={() => setSecondaryMenuOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 py-4">
              <Link
                href="/about"
                onClick={() => setSecondaryMenuOpen(false)}
                className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#07579F] transition-colors"
              >
                <Shield className="w-5 h-5 text-[#07579F]" />
                <div className="text-left">
                  <div className="text-sm font-semibold">About Us</div>
                  <div className="text-xs text-slate-500">Founder & Vision</div>
                </div>
              </Link>

              <Link
                href="/global-reach"
                onClick={() => setSecondaryMenuOpen(false)}
                className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#07579F] transition-colors"
              >
                <Compass className="w-5 h-5 text-[#07579F]" />
                <div className="text-left">
                  <div className="text-sm font-semibold">Global Reach</div>
                  <div className="text-xs text-slate-500">UAE & Expansion</div>
                </div>
              </Link>

              <Link
                href="/why-choose-us"
                onClick={() => setSecondaryMenuOpen(false)}
                className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#07579F] transition-colors"
              >
                <Award className="w-5 h-5 text-[#D71925]" />
                <div className="text-left">
                  <div className="text-sm font-semibold">Why Choose Us</div>
                  <div className="text-xs text-slate-500">Trust & Quality</div>
                </div>
              </Link>

              <Link
                href="/how-we-work"
                onClick={() => setSecondaryMenuOpen(false)}
                className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#07579F] transition-colors"
              >
                <GitMerge className="w-5 h-5 text-[#07579F]" />
                <div className="text-left">
                  <div className="text-sm font-semibold">How We Work</div>
                  <div className="text-xs text-slate-500">6-Step Flow</div>
                </div>
              </Link>

              <Link
                href="/faq"
                onClick={() => setSecondaryMenuOpen(false)}
                className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#07579F] transition-colors"
              >
                <HelpCircle className="w-5 h-5 text-amber-500" />
                <div className="text-left">
                  <div className="text-sm font-semibold">Trade FAQ</div>
                  <div className="text-xs text-slate-500">Common Queries</div>
                </div>
              </Link>

              <Link
                href="/privacy-policy"
                onClick={() => setSecondaryMenuOpen(false)}
                className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#07579F] transition-colors"
              >
                <FileCheck className="w-5 h-5 text-slate-500" />
                <div className="text-left">
                  <div className="text-sm font-semibold">Legal</div>
                  <div className="text-xs text-slate-500">Privacy & Terms</div>
                </div>
              </Link>
            </div>

            <div className="p-3 bg-blue-50/60 rounded-xl text-xs text-slate-600 border border-blue-100">
              <span className="font-semibold text-[#07579F]">{siteConfig.name}</span> — {siteConfig.tagline}
              <div className="text-slate-500 mt-1">Chhatrapati Sambhajinagar, Maharashtra, India</div>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom Bar Container */}
      <nav
        aria-label="Mobile Navigation"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="flex items-center justify-around h-16 px-2 max-w-lg mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            if (item.isPrimary) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center justify-center -mt-5 relative group focus:outline-none"
                  aria-label="Request a Quote"
                >
                  <div className="w-13 h-13 rounded-full bg-linear-to-tr from-[#D71925] to-[#f43f5e] text-white flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-105 transition-transform duration-200 border-2 border-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D71925] mt-1 tracking-tight">
                    Quote
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors ${
                  isActive ? 'text-[#07579F] font-semibold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#07579F]' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-1 tracking-tight">{item.name}</span>
              </Link>
            );
          })}

          {/* More menu trigger for secondary links */}
          <button
            type="button"
            onClick={() => setSecondaryMenuOpen(!secondaryMenuOpen)}
            className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-slate-500 hover:text-slate-800 focus:outline-none"
            aria-label="More options"
          >
            <MoreHorizontal className="w-5 h-5 text-slate-500" />
            <span className="text-[10px] mt-1 tracking-tight">More</span>
          </button>
        </div>
      </nav>
    </>
  );
}
