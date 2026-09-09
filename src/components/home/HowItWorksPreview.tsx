import React from 'react';
import Link from 'next/link';
import { exportWorkflowSteps } from '@/data/workflowData';
import SectionHeading from '@/components/common/SectionHeading';
import { ArrowRight, FileText, Search, CheckCircle2, CreditCard, PackageCheck, Ship } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Search,
  CheckCircle2,
  CreditCard,
  PackageCheck,
  Ship,
};

export default function HowItWorksPreview() {
  return (
    <section className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="End-to-End Workflow"
          title="How We Work"
          subtitle="From initial requirement sharing to containerized export coordination, our 6-step export process ensures clarity, specification alignment, and reliable dispatch."
        />

        {/* 6-step grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exportWorkflowSteps.map((step) => {
            const Icon = iconMap[step.icon] || FileText;
            return (
              <div
                key={step.stepNumber}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-2xl text-slate-200 group-hover:text-[#07579F] transition-colors">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#07579F] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {step.description}
                </p>

                <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/how-we-work"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#07579F] hover:bg-[#054580] text-white text-sm font-semibold transition-colors shadow-sm"
          >
            <span>Explore Complete Export Methodology</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
