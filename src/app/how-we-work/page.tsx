import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FinalCTASection from '@/components/home/FinalCTASection';
import { exportWorkflowSteps } from '@/data/workflowData';
import { ArrowRight, FileText, Search, CheckCircle2, CreditCard, PackageCheck, Ship, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'How We Work | 6-Step Export & Sourcing Methodology',
  description:
    'Learn how MrParthExim manages cross-border trade: from buyer RFQ analysis and supplier vetting to laboratory alignment, export packing, and ocean dispatch.',
};

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Search,
  CheckCircle2,
  CreditCard,
  PackageCheck,
  Ship,
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

          {/* Desktop Horizontal Scrollable Timeline / Flow */}
          <div className="hidden lg:block mb-16">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-[#07579F] via-[#FFD400] to-[#D71925] -translate-y-1/2 z-0" />

              <div className="grid grid-cols-6 gap-4 relative z-10">
                {exportWorkflowSteps.map((step, idx) => {
                  const Icon = iconMap[step.icon] || FileText;
                  return (
                    <div key={step.stepNumber} className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#07579F] shadow-lg flex items-center justify-center text-[#07579F] font-bold text-sm mb-3">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#D71925]">
                        STEP {step.stepNumber}
                      </span>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 mt-1 max-w-[140px] leading-tight">
                        {step.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detailed Cards Timeline (Mobile & Desktop Deep Dive) */}
          <div className="space-y-8">
            {exportWorkflowSteps.map((step, idx) => {
              const Icon = iconMap[step.icon] || FileText;
              return (
                <div
                  key={step.stepNumber}
                  className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:border-blue-200 hover:shadow-md transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="flex items-start space-x-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#071A2B] text-[#FFD400] flex flex-col items-center justify-center shrink-0 shadow-md">
                      <span className="font-display font-bold text-lg leading-none">
                        {step.stepNumber}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] font-bold text-[#D71925] uppercase tracking-wider">
                          Phase {idx + 1} of 6
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-sm font-medium text-[#07579F]">
                        {step.description}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl pt-1">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 w-full md:w-auto pt-2 md:pt-0">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#07579F] hidden md:flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Start Callout */}
          <div className="mt-14 p-8 rounded-3xl bg-[#071A2B] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display font-bold text-xl text-white">
                Ready to Initiate Step 01?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Submit your target product specifications, estimated quantity, and port of discharge.
                Our trade desk will evaluate supplier options and respond promptly.
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
