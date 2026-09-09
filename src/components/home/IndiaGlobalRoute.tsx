'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Navigation, Layers, Compass } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

const stages = [
  {
    id: 'origin',
    step: 'Stage 01',
    name: 'Origin: India',
    location: 'Chhatrapati Sambhajinagar, Maharashtra',
    description: 'Direct procurement connections across regional agricultural mandis, textile weaving hubs, and food manufacturing facilities.',
    icon: Navigation,
    badge: 'Origin Sourcing',
    color: '#07579F',
  },
  {
    id: 'quality',
    step: 'Stage 02',
    name: 'Quality Alignment',
    location: 'Standardized Batch Testing',
    description: 'Pre-shipment verification of moisture content, color value (ASTA), particle size, yarn strength, and buyer parameters.',
    icon: CheckCircle2,
    badge: 'Specification Check',
    color: '#07579F',
  },
  {
    id: 'prep',
    step: 'Stage 03',
    name: 'Export Preparation',
    location: 'Transit Packaging & Containerization',
    description: 'Food-grade multiwall poly sacks, vacuum packaging, and reinforced export master cartons prepped for marine container stuffing.',
    icon: Layers,
    badge: 'Packaging Integrity',
    color: '#D71925',
  },
  {
    id: 'uae',
    step: 'Stage 04',
    name: 'Primary Destination: UAE',
    location: 'Jebel Ali / Port Khalifa',
    description: 'Direct vessel routing from Nhava Sheva (JNPT) to Dubai/Abu Dhabi within 3-5 transit days, serving GCC distribution networks.',
    icon: Globe,
    badge: 'Confirmed Target Market',
    color: '#D71925',
  },
  {
    id: 'expansion',
    step: 'Stage 05',
    name: 'Global Expansion Horizons',
    location: 'Middle East, Africa & Europe',
    description: 'Building trade infrastructure to expand into Saudi Arabia, East Africa, and European buyers seeking transparent Indian procurement.',
    icon: Compass,
    badge: 'Future Market Opportunities',
    color: '#FFD400',
  },
];

export default function IndiaGlobalRoute() {
  const [activeStage, setActiveStage] = useState(3); // Default to UAE

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background trade grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#07579F_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Signature Interaction"
          title="India to UAE. One Trusted Connection."
          subtitle="With the UAE as our initial confirmed international focus, MrParthExim is building a transparent foundation for reliable India-to-global commerce."
          theme="dark"
        />

        {/* Interactive Corridor Pathway */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left interactive stage list */}
          <div className="lg:col-span-5 space-y-3">
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              const Icon = stage.icon;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-950/70 border-[#07579F] shadow-lg shadow-blue-950/50 -translate-x-1'
                      : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-800/90 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold ${
                          isActive
                            ? 'bg-[#07579F] text-white'
                            : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-medium">{stage.step}</div>
                        <div className="text-sm font-bold text-white">{stage.name}</div>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        idx === 3
                          ? 'bg-red-950 text-red-300 border border-red-800'
                          : idx === 4
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {stage.badge}
                    </span>
                  </div>

                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-slate-700/80 text-xs text-slate-300 animate-in fade-in duration-200">
                      <p className="leading-relaxed">{stage.description}</p>
                      <p className="text-[11px] text-[#FFD400] font-semibold mt-1">
                        📍 {stage.location}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right visual map schematic */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-slate-800 p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                <Globe className="w-4 h-4 text-[#FFD400]" />
                <span>Trade Corridor Visualizer</span>
              </span>
              <span className="text-xs text-slate-400">
                Active Step: <strong className="text-white">{stages[activeStage].name}</strong>
              </span>
            </div>

            {/* SVG Corridor Diagram */}
            <div className="py-6 sm:py-10">
              <div className="relative w-full aspect-16/9 bg-radial from-slate-900 to-slate-950 rounded-xl border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden">
                {/* SVG Route Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 300">
                  <defs>
                    <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#07579F" />
                      <stop offset="60%" stopColor="#FFD400" />
                      <stop offset="100%" stopColor="#D71925" />
                    </linearGradient>
                  </defs>

                  {/* Ocean Curve line: India (bottom right) -> UAE (middle-left) */}
                  <path
                    d="M 460 210 Q 300 240 180 120"
                    fill="none"
                    stroke="url(#corridorGrad)"
                    strokeWidth="3"
                    className="route-dash"
                  />

                  {/* Future corridor curve: UAE -> Saudi / Africa / Europe */}
                  <path
                    d="M 180 120 Q 110 80 70 50"
                    fill="none"
                    stroke="#FFD400"
                    strokeWidth="1.5"
                    strokeDasharray="4, 4"
                    opacity="0.6"
                  />
                  <path
                    d="M 180 120 Q 140 180 90 220"
                    fill="none"
                    stroke="#FFD400"
                    strokeWidth="1.5"
                    strokeDasharray="4, 4"
                    opacity="0.5"
                  />
                </svg>

                {/* Node: Origin India */}
                <div className="absolute right-8 bottom-8 text-right z-10">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-blue-900/90 border border-blue-600 text-white text-xs font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>ORIGIN: INDIA</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1">Chhatrapati Sambhajinagar</div>
                  <div className="text-[10px] text-slate-400">Maharashtra Belt & JNPT Port</div>
                </div>

                {/* Node: Primary Destination UAE */}
                <div className="absolute left-24 sm:left-36 top-16 z-10">
                  <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#D71925] text-white text-xs font-bold shadow-xl border border-red-400 animate-bounce duration-1000">
                    <Globe className="w-3.5 h-3.5" />
                    <span>UAE (TARGET MARKET)</span>
                  </div>
                  <div className="text-[11px] text-[#FFD400] font-semibold mt-1">Jebel Ali / Dubai</div>
                  <div className="text-[10px] text-slate-300">Fast 3-5 Days Direct Transit</div>
                </div>

                {/* Node: Future Horizons */}
                <div className="absolute left-6 top-6 z-10">
                  <div className="px-2 py-1 rounded bg-slate-800/90 border border-amber-600/60 text-amber-300 text-[10px] font-medium">
                    Future: Europe & Saudi Arabia
                  </div>
                </div>
                <div className="absolute left-6 bottom-10 z-10">
                  <div className="px-2 py-1 rounded bg-slate-800/90 border border-amber-600/60 text-amber-300 text-[10px] font-medium">
                    Future: East Africa
                  </div>
                </div>

                {/* Micro note bottom center */}
                <div className="text-center w-full text-[11px] text-slate-400 z-10">
                  Marine Container Routes via Arabian Sea Maritime Corridor
                </div>
              </div>
            </div>

            {/* Bottom summary and callout */}
            <div className="mt-4 p-4 rounded-xl bg-blue-950/40 border border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div>
                <p className="text-slate-200 font-medium">
                  Focused on building genuine trade credibility between India and the UAE.
                </p>
                <p className="text-slate-400 text-[11px]">
                  Future international corridors will be activated based on verified commercial demand.
                </p>
              </div>
              <Link
                href="/global-reach"
                className="shrink-0 px-4 py-2 rounded-lg bg-[#07579F] hover:bg-blue-600 text-white font-semibold transition-colors flex items-center space-x-1.5"
              >
                <span>Global Reach Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
