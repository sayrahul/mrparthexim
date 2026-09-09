import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MessageSquare, Search, Layers, Compass, Handshake, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import SectionHeading from '@/components/common/SectionHeading';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Your Trust, Our Promise',
    description: 'We do not make inflated claims or promise impossible terms. We build commercial credibility through realistic specifications, transparent pricing, and clear lead times.',
    highlight: 'Core Brand Commitment',
  },
  {
    icon: Search,
    title: 'Direct Regional Sourcing',
    description: 'Located in Chhatrapati Sambhajinagar, Maharashtra, we have direct proximity to primary farming hubs, spice centers, and western Indian industrial textile zones.',
    highlight: 'On-Ground Sourcing',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'Prompt, professional communication with founder oversight. Direct phone and WhatsApp accessibility to answer inquiries without bureaucratic delays.',
    highlight: 'Founder Accessible',
  },
  {
    icon: Layers,
    title: 'Quality-Conscious Selection',
    description: 'Lot-by-lot inspection of moisture, grading, and packaging integrity prior to container stuffing, tailored to the importing regulations of target markets.',
    highlight: 'Inspection Protocol',
  },
  {
    icon: Compass,
    title: 'Focused Market Strategy',
    description: 'Our primary confirmed target market is the UAE. By focusing initially on the UAE trade corridor, we refine operational agility before broader expansion.',
    highlight: 'Strategic UAE Focus',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership Vision',
    description: 'We aim to become your trusted procurement partner in India, prioritizing sustainable, repeat business over one-off commercial transactions.',
    highlight: 'Buyer-First Orientation',
  },
];

export default function WhyMrParthExim() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Brand Positioning"
          title="Why Choose MrParthExim"
          subtitle="Our approach is built around transparent communication, buyer-focused sourcing, and realistic export commitments. We connect quality Indian products with international opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#07579F] group-hover:bg-[#07579F] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#071A2B] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-semibold text-[#FFD400] uppercase tracking-wider">
              Authentic Indian Export Enterprise
            </div>
            <p className="text-sm text-slate-300">
              An upcoming export business founded by <strong className="text-white">{siteConfig.founder}</strong> in Chhatrapati Sambhajinagar, Maharashtra.
            </p>
          </div>

          <Link
            href="/why-choose-us"
            className="shrink-0 inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-[#071A2B] font-semibold text-xs sm:text-sm transition-colors"
          >
            <span>Learn More About Our Approach</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
