import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, navLinks, getWhatsAppUrl } from '@/config/siteConfig';
import { productCategories } from '@/data/productsData';
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, ShieldCheck, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#071A2B] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1 & 2: Brand Identity & Founder Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/95 rounded-xl p-3 inline-block shadow-xs">
              <div className="relative h-10 w-48 sm:w-56">
                <Image
                  src="/images/logo.png"
                  alt="MrParthExim"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <div className="inline-block px-2.5 py-1 bg-blue-950/80 border border-blue-800 text-[#FFD400] text-xs rounded-md font-medium">
              &quot;{siteConfig.tagline}&quot;
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              An upcoming Indian export business focused on building trusted connections between
              quality Indian products and international markets, beginning with an initial focus on
              the UAE.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>
                <strong className="text-white">Founder:</strong> {siteConfig.founder}
              </p>
              <p>
                <strong className="text-white">Commercial Focus:</strong> India → UAE Trade Corridor
              </p>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-150">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Sourcing Categories */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-150">
                      {cat.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-[#FFD400] hover:underline text-xs inline-flex items-center mt-1"
                >
                  <span>Explore Full Catalog</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Office & Contact */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Contact Desk
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D71925] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  {siteConfig.address.street}, {siteConfig.address.road}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}, India
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#07579F] shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#FFD400] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs hover:text-white transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <Link
                  href="/quote"
                  className="block w-full text-center py-2 px-3 rounded-lg bg-[#D71925] hover:bg-[#b5131e] text-white text-xs font-semibold transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p className="text-slate-400">
              Registered Location: Chhatrapati Sambhajinagar (Aurangabad), Maharashtra, India.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">
              FAQ
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-[#FFD400] font-medium">&quot;Your Trust, Our Promise&quot;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
