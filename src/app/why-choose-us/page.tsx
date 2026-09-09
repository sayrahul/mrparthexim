import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FinalCTASection from '@/components/home/FinalCTASection';
import { siteConfig } from '@/config/siteConfig';
import { ShieldCheck, MessageSquare, Search, CheckCircle2, RefreshCw, Users, ArrowRight, HeartHandshake, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Choose Us | Grounded Principles & Buyer-First Trade',
  description:
    'Discover why international buyers partner with MrParthExim: authentic Indian origin access, transparent pricing, quality-conscious selection, and dedicated founder communication.',
};

const valuePillars = [
  {
    icon: ShieldCheck,
    title: 'Core Philosophy: "Your Trust, Our Promise"',
    description: 'We do not hide behind exaggerated marketing or impossible timelines. We honor commitments with transparent specifications, verified batch sampling, and realistic shipping schedules.',
  },
  {
    icon: Search,
    title: 'Direct Maharashtra & Western India Sourcing',
    description: 'Located in Chhatrapati Sambhajinagar, we have immediate proximity to primary spice belts, cotton ginning and textile weaving clusters, and major grape/raisin vineyards.',
  },
  {
    icon: MessageSquare,
    title: 'Clear, Responsive Founder Communication',
    description: 'Direct accessibility to founder Mr. Rushikesh Pardeshi and the trade desk via WhatsApp and phone. Inquiries are handled with prompt, straightforward answers.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality-Conscious Batch Verification',
    description: 'We prioritize physical pre-shipment inspections covering moisture percentages, foreign matter thresholds, color values, and container packing durability.',
  },
  {
    icon: RefreshCw,
    title: 'Flexible Buyer Requirements & Packaging',
    description: 'Whether you require bulk ocean container loads, vacuum flexi-pouches, or customized private-label specifications, our sourcing model adapts to your commercial needs.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership Mentality',
    description: 'We aim to become your trusted sourcing eyes and ears in India, focusing on repeatable, dependable relationships rather than transactional spot sales.',
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white">
      <PageHero
        badge="Our Value Proposition"
        title="Why Choose MrParthExim"
        description="Our approach is built around trust, transparent communication, buyer-focused sourcing, and realistic export commitments. We connect quality Indian products with international trade opportunities."
        breadcrumbs={[{ label: 'Why Choose Us' }]}
      />

      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Intended Business Approach"
            title="A Buyer-First Export Venture Built on Truth"
            subtitle="As an emerging Indian export business, we don't rely on fabricated longevity claims. Instead, we compete on operational responsiveness, sourcing integrity, and rigorous respect for buyer specifications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#07579F] group-hover:bg-[#07579F] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900">
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

          {/* Comparison Table / Transparency callout */}
          <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold text-[#FFD400] uppercase tracking-wider">
                Transparent Trade Standards
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                What Sets Our Engagement Apart
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe buyers value clarity above all else. When you engage with MrParthExim, you
                receive verified origin data, honest harvest availability timelines, and real-time
                updates throughout export coordination.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#D71925] hover:bg-[#b5131e] text-white font-bold text-sm transition-colors shadow-md"
                >
                  Request a Written Quote
                </Link>
                <Link
                  href="/how-we-work"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors"
                >
                  Review Our 6-Step Workflow
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </div>
  );
}
