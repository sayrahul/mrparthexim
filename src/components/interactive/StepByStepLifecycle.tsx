'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { exportWorkflowSteps } from '@/data/workflowData';
import { getWhatsAppUrl } from '@/config/siteConfig';
import {
  FileText,
  Search,
  CheckCircle2,
  CreditCard,
  PackageCheck,
  Ship,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Clock,
  ShieldCheck,
  MessageCircle,
  FileCheck2
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Search,
  CheckCircle2,
  CreditCard,
  PackageCheck,
  Ship,
};

const stepDetailsMeta = [
  {
    timeframe: 'Day 1 - 2',
    stakeholder: 'Buyer & Trade Desk',
    deliverables: [
      'Comprehensive RFQ analysis (Grade, Volume, Target Port)',
      'Specification feasibility assessment (Moisture, ASTA, Mesh/GSM)',
      'Initial Incoterms consultation (FOB Indian Port vs. CIF Jebel Ali)',
    ],
    documents: ['Buyer RFQ Sheet', 'Preliminary Specification Checklist'],
  },
  {
    timeframe: 'Day 3 - 5',
    stakeholder: 'Maharashtra & Pan-India Mandi Network',
    deliverables: [
      'Identification of active harvest lots in regional farming hubs',
      'Supplier verification avoiding intermediary broker markups',
      'Pre-negotiation of volume allocations for export container stuffing',
    ],
    documents: ['Source Mandi Origin Verification', 'Lot Availability Report'],
  },
  {
    timeframe: 'Day 5 - 8',
    stakeholder: 'Quality Assurance & Independent Labs',
    deliverables: [
      'Representative sample extraction and dispatch to buyer',
      'Moisture, purity, and microbial laboratory assay verification',
      'Packaging approval (multiwall bags, vacuum pouches, retail cartons)',
    ],
    documents: ['Certificate of Analysis (COA)', 'Sample Approval Sign-off'],
  },
  {
    timeframe: 'Day 8 - 10',
    stakeholder: 'Finance & Export Compliance',
    deliverables: [
      'Issuance of formal Proforma Invoice with agreed price per MT/kg',
      'Finalization of payment terms (LC, CAD, or milestone advance)',
      'Locking vessel booking schedule with direct ocean carriers',
    ],
    documents: ['Proforma Invoice (PI)', 'Commercial Sales Contract'],
  },
  {
    timeframe: 'Day 10 - 15',
    stakeholder: 'Packing Plant & Inland CFS Depot',
    deliverables: [
      'Export-grade packaging with food-grade barrier liners',
      'Palletization, shrink-wrapping, and container dunnage placement',
      'Inland bonded transport to JNPT (Nhava Sheva) container freight station',
    ],
    documents: ['Export Packing List', 'Container Weighment Slip (VGM)'],
  },
  {
    timeframe: 'Day 15 - 20 (3-5 Days Ocean Transit to UAE)',
    stakeholder: 'Shipping Line & Customs Authority',
    deliverables: [
      'Indian customs clearance and container vessel loading',
      'Issuance of Bill of Lading (B/L) and Certificate of Origin',
      'Courier of original documentation or telex release for Jebel Ali clearance',
    ],
    documents: ['Bill of Lading', 'Certificate of Origin', 'Phytosanitary Clearance'],
  },
];

export default function StepByStepLifecycle() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  // Auto-advance preview if user wants interactive tour
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % exportWorkflowSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const activeStep = exportWorkflowSteps[activeStepIndex];
  const activeMeta = stepDetailsMeta[activeStepIndex];
  const ActiveIcon = iconMap[activeStep.icon] || FileText;

  return (
    <div className="space-y-12">
      {/* Interactive Step Navigator Bar */}
      <div className="bg-slate-900 rounded-2xl p-3 sm:p-4 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-slate-800 text-xs text-slate-400">
          <span className="flex items-center space-x-1.5 font-semibold text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>Interactive Workflow Explorer</span>
          </span>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => setAutoPlay(!autoPlay)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                autoPlay
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {autoPlay ? 'Auto-Advancing (Active)' : 'Enable Auto-Tour'}
            </button>
            <span className="text-slate-500">Step {activeStepIndex + 1} of 6</span>
          </div>
        </div>

        {/* 6 Step Pills / Tabs */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {exportWorkflowSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const Icon = iconMap[step.icon] || FileText;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => {
                  setAutoPlay(false);
                  setActiveStepIndex(idx);
                }}
                className={`p-2.5 sm:p-3 rounded-xl text-left transition-all duration-200 flex flex-col justify-between cursor-pointer border ${
                  isActive
                    ? 'bg-linear-to-b from-[#07579F] to-[#053b6d] border-blue-400 text-white shadow-lg shadow-blue-950/60 scale-[1.02]'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#FFD400]' : 'text-slate-500'}`}>
                    0{idx + 1}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </div>
                <div className="text-[11px] sm:text-xs font-bold truncate leading-tight">
                  {step.title.split(' ')[0]} {step.title.split(' ')[1] || ''}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage Spotlight Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Core Phase Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#07579F] border border-blue-100 text-xs font-bold tracking-wider uppercase">
                Step {activeStep.stepNumber} of 06
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium flex items-center space-x-1">
                <Clock className="w-3 h-3 text-[#D71925]" />
                <span>{activeMeta.timeframe}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium">
                {activeMeta.stakeholder}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                {activeStep.title}
              </h3>
              <p className="text-base font-semibold text-[#07579F]">
                {activeStep.description}
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeStep.detail}
            </p>

            {/* Deliverables Checklist */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Phase Milestones & Deliverables</span>
              </span>
              <ul className="space-y-2">
                {activeMeta.deliverables.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Documentation Staging & CTAs */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <FileCheck2 className="w-4 h-4 text-[#FFD400]" />
                  <span>Trade Documentation</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Verified Protocol
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Documents compiled and verified during this phase:
              </p>

              <div className="space-y-2">
                {activeMeta.documents.map((doc, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center space-x-2.5 text-xs text-slate-200">
                    <div className="w-2 h-2 rounded-full bg-[#FFD400]" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-900/60 text-xs text-slate-300 space-y-1">
                <strong className="text-white">Our Export Promise:</strong>
                <p className="text-slate-400 text-[11px]">
                  No goods depart for port container stuffing until quality verification parameters are fully approved.
                </p>
              </div>
            </div>

            {/* Step Controls */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold disabled:opacity-40 cursor-pointer"
                >
                  Previous Step
                </button>

                <button
                  type="button"
                  disabled={activeStepIndex === exportWorkflowSteps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(exportWorkflowSteps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-lg bg-[#07579F] hover:bg-blue-600 text-white text-xs font-semibold disabled:opacity-40 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <a
                href={getWhatsAppUrl(`Hello MrParthExim, I would like to inquire about Step ${activeStep.stepNumber}: ${activeStep.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Step {activeStep.stepNumber} on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
