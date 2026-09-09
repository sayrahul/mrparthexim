import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FinalCTASection from '@/components/home/FinalCTASection';
import StepByStepLifecycle from '@/components/interactive/StepByStepLifecycle';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'How We Work | 6-Step Export & Sourcing Methodology',
  description:
    'Learn how MrParthExim manages cross-border trade: from buyer RFQ analysis and supplier vetting to laboratory alignment, export packing, and ocean dispatch.',
};

export default function HowWeWorkPage() {
  return (
    <div className="bg-white">
      <PageHero
        badge="Export Methodology"
        title="Our 6-Step Export Workflow"
        description="A transparent, buyer-first pathway from initial technical inquiry to destination port customs clearance. Every step is executed with precision, accountability, and regular communication."
        breadcrumbs={[{ label: 'How We Work' }]}
      />

      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Predictable Execution"
            title="Step-by-Step Export Lifecycle"
            subtitle="Explore the sequential milestones that protect your capital, guarantee product specifications, and ensure smooth delivery into Jebel Ali and international ports."
          />

          {/* Interactive Step-by-Step Lifecycle Component */}
          <StepByStepLifecycle />

          {/* Interactive Start Callout */}
          <div className="mt-14 p-8 rounded-3xl bg-[#071A2B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display font-bold text-xl text-white">
                Ready to Initiate Step 01?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Submit your target product specifications, estimated quantity, and port of discharge.
                Our trade desk will evaluate supplier options and respond promptly with structured commercial terms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/quote"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D71925] hover:bg-[#b5131e] text-white font-bold text-xs sm:text-sm transition-colors shadow-md text-center"
              >
                Submit RFQ Form
              </Link>
              <a
                href={getWhatsAppUrl('Hello MrParthExim, I would like to discuss Step 01 (sharing my requirement).')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </div>
  );
}
