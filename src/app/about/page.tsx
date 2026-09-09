import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FinalCTASection from '@/components/home/FinalCTASection';
import { siteConfig } from '@/config/siteConfig';
import { ShieldCheck, Target, Compass, Award, User, MapPin, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Built on Trust, Driven by Global Opportunity',
  description:
    'Learn about MrParthExim, an upcoming Indian export venture based in Chhatrapati Sambhajinagar, Maharashtra, founded by Mr. Rushikesh Pardeshi.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <PageHero
        badge="About MrParthExim"
        title="Built on Trust. Driven by Global Opportunity."
        description="An emerging Indian export enterprise connecting quality Indian products with international buyers through transparent sourcing, grounded communication, and uncompromising integrity."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* 1. Who We Are */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-[#07579F] uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                An Emerging Indian Export Enterprise with Serious Global Ambitions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                MrParthExim is an upcoming export business established in Chhatrapati Sambhajinagar
                (Aurangabad), Maharashtra. We are preparing to enter international export markets by
                building trusted trade channels directly between vetted Indian agricultural producers,
                textile manufacturers, and global importers.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rather than portraying ourselves as a legacy multinational corporation, we embrace who
                we are: a modern, agile, and buyer-focused enterprise. We recognize that international
                trade succeeds on verified product quality, honest communication, and meticulous
                operational execution.
              </p>
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-700">
                <strong className="text-[#07579F]">Our Core Positioning:</strong> &quot;{siteConfig.tagline}&quot; — Connecting quality Indian products with opportunities in global markets.
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 relative">
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/trade/cargo-ship.jpg"
                    alt="International cargo logistics"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
                </div>
                <div className="p-6 bg-slate-950 text-white space-y-2 border-t border-slate-800">
                  <div className="text-xs font-semibold text-[#FFD400]">COMMERCIAL ANCHOR</div>
                  <div className="text-sm font-bold">Western Maharashtra & Pan-India Sourcing Hub</div>
                  <p className="text-xs text-slate-400">
                    Direct access to agricultural belts and industrial textile centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guiding Principles"
            title="Our Vision & Mission"
            subtitle="The fundamental principles guiding every sourcing decision, customer conversation, and shipment coordination."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#07579F] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To build India’s next trusted trade connection—becoming recognized by international
                buyers in the UAE and globally as a transparent, reliable, and high-integrity partner
                for sourcing premium Indian commodities and manufactured products.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Establish the India-to-UAE corridor as a premier trade route</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Promote verified Indian origin and craftsmanship worldwide</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D71925] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To simplify and de-risk cross-border procurement for global buyers by establishing
                clear specification contracts, rigorous batch-level inspections, climate-resistant
                export packaging, and proactive commercial communication.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Eliminate unverified broker layers and confusion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Deliver genuine consistency in every container dispatch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#07579F]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-[#FFD400] text-xs font-semibold uppercase tracking-wider">
                <User className="w-3.5 h-3.5" />
                <span>Leadership</span>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Meet Our Founder: {siteConfig.founder}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Founder & Principal Director, MrParthExim
                </p>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 italic leading-relaxed border-l-4 border-[#FFD400] pl-4">
                &quot;When starting MrParthExim, our vision was simple: Indian agriculture and manufacturing
                hold incredible wealth and caliber, but overseas buyers often struggle with communication
                gaps and inconsistent quality. We built this company to be a direct, honest bridge—where
                your trust is truly our sacred promise.&quot;
              </blockquote>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#D71925]" />
                  <span>Based in Chhatrapati Sambhajinagar, Maharashtra, India</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    href="/quote"
                    className="px-4 py-2 rounded-lg bg-[#D71925] hover:bg-[#b5131e] text-white font-semibold transition-colors"
                  >
                    Initiate Commercial Dialogue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach & Our Future */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#07579F] uppercase">
                <Compass className="w-4 h-4" />
                <span>Our Operational Approach</span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Buyer-First & Transparent Sourcing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe export success begins before a single document is signed. By taking the time
                to deeply comprehend your destination market regulations, target moisture profiles, and
                packaging preferences, we tailor procurement instead of pushing generic inventory.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every batch is handled with on-ground verification. Buyers are provided with clear lot
                sampling, transparent freight quotes, and proactive status updates from warehouse to port.
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D71925] uppercase">
                <Award className="w-4 h-4" />
                <span>Our Future Trajectory</span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                From UAE to Global Trade Corridors
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our initial international focus is the UAE—serving regional importers, wholesalers, and
                commercial food distributors across Dubai, Abu Dhabi, and the Northern Emirates.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                As operational systems mature and volume scales, we aim to extend these trusted sourcing
                links toward Saudi Arabia, the wider GCC, East Africa, and quality-conscious European
                importers seeking sustainable Indian agricultural commodities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection />
    </div>
  );
}
