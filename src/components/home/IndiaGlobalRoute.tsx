'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Navigation,
  Layers,
  Compass,
  Anchor,
  Clock,
  ShieldCheck,
  Plane,
  Ship,
  Sparkles,
  MapPin,
  Flame,
  Activity
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

interface CorridorRoute {
  id: string;
  name: string;
  status: 'active' | 'future';
  origin: string;
  destination: string;
  destinationHub: string;
  transitTime: string;
  distance: string;
  description: string;
  keyProducts: string[];
  pathD: string;
  destX: number;
  destY: number;
  destLabel: string;
}

const corridors: CorridorRoute[] = [
  {
    id: 'uae',
    name: 'India → UAE (Jebel Ali / Dubai)',
    status: 'active',
    origin: 'Chhatrapati Sambhajinagar & JNPT (Mumbai), India',
    destination: 'United Arab Emirates',
    destinationHub: 'Jebel Ali Port (Dubai) & Port Khalifa (Abu Dhabi)',
    transitTime: '3 - 5 Days (Direct Ocean)',
    distance: '~1,050 Nautical Miles',
    description: 'Our primary confirmed international focus. Direct Arabian Sea container routes connecting Maharashtra agricultural and industrial clusters to Dubai’s premier trading gateway under the India-UAE CEPA framework.',
    keyProducts: ['Guntur Red Chilli', 'Pure Turmeric', 'Combed Cotton Textiles', 'Premium Cashews', 'Packaged FMCG'],
    pathD: 'M 490 205 Q 350 220 230 145',
    destX: 230,
    destY: 145,
    destLabel: 'UAE (Jebel Ali / Dubai)',
  },
  {
    id: 'saudi',
    name: 'India → Saudi Arabia (Red Sea / Gulf)',
    status: 'future',
    origin: 'JNPT (Mumbai), India',
    destination: 'Saudi Arabia',
    destinationHub: 'Jeddah Islamic Port & King Abdulaziz Port (Dammam)',
    transitTime: '6 - 9 Days (Estimated)',
    distance: '~1,800 Nautical Miles',
    description: 'Future trade corridor targeting Saudi Arabia’s expanding food service, hospitality, and wholesale retail sectors for high-grade whole spices and grains.',
    keyProducts: ['Whole Spices', 'Kabuli Chickpeas', 'Basmati & Non-Basmati Grains', 'Bed Linens'],
    pathD: 'M 490 205 Q 310 230 160 160',
    destX: 160,
    destY: 160,
    destLabel: 'Saudi Arabia (Jeddah / Dammam)',
  },
  {
    id: 'africa',
    name: 'India → East Africa (Mombasa / Dar es Salaam)',
    status: 'future',
    origin: 'JNPT (Mumbai), India',
    destination: 'East Africa (Kenya & Tanzania)',
    destinationHub: 'Port of Mombasa & Dar es Salaam',
    transitTime: '8 - 12 Days (Estimated)',
    distance: '~2,400 Nautical Miles',
    description: 'Strategic future corridor utilizing direct southwestern Indian Ocean sea lanes for consumer packaged goods, textile rolls, and staple food products.',
    keyProducts: ['Woven Cotton Fabrics', 'Consumer Staples', 'Spices & Seasonings'],
    pathD: 'M 490 205 Q 360 280 170 270',
    destX: 170,
    destY: 270,
    destLabel: 'East Africa (Mombasa)',
  },
  {
    id: 'europe',
    name: 'India → Europe (Rotterdam / UK)',
    status: 'future',
    origin: 'JNPT (Mumbai), India',
    destination: 'European Union & United Kingdom',
    destinationHub: 'Port of Rotterdam & Port of Antwerp',
    transitTime: '22 - 28 Days (Via Suez)',
    distance: '~6,300 Nautical Miles',
    description: 'Long-term quality corridor serving European buyers with certified curcumin-rich turmeric, premium cotton textiles, and lab-tested organic spices.',
    keyProducts: ['High-Curcumin Turmeric', 'Organic Whole Spices', 'High-Thread Count Linens'],
    pathD: 'M 490 205 Q 260 160 100 60',
    destX: 100,
    destY: 60,
    destLabel: 'Europe (Rotterdam Hub)',
  },
  {
    id: 'asean',
    name: 'India → Southeast Asia (Singapore / Malaysia)',
    status: 'future',
    origin: 'Chennai / JNPT, India',
    destination: 'Singapore & Malaysia',
    destinationHub: 'Port of Singapore & Port Klang',
    transitTime: '5 - 8 Days (Direct)',
    distance: '~1,700 Nautical Miles',
    description: 'Expanding eastward maritime trade corridor tapping into ASEAN culinary, spice re-packing, and ethnic grocery distribution channels.',
    keyProducts: ['Red Chilli Powder', 'Cashew Kernels', 'Traditional Indian Fabrics'],
    pathD: 'M 490 205 Q 560 220 620 250',
    destX: 620,
    destY: 250,
    destLabel: 'Southeast Asia (Singapore)',
  },
];

const lifecycleStages = [
  {
    step: '01',
    title: 'Mandi Origin Sourcing',
    location: 'Chhatrapati Sambhajinagar, Maharashtra',
    note: 'Direct procurement connections in farm mandis & textile mills',
  },
  {
    step: '02',
    title: 'Lab Quality Alignment',
    location: 'Assay Testing & Sample Extraction',
    note: 'Moisture, ASTA color, purity, and microbial verification',
  },
  {
    step: '03',
    title: 'Export Packaging',
    location: 'Climate-Barrier Preparation',
    note: 'Poly-barrier sacks, vacuum flexi-pouches, heavy cartons',
  },
  {
    step: '04',
    title: 'Port Staging & CFS',
    location: 'JNPT / Nhava Sheva Port, Mumbai',
    note: 'Container stuffing, customs sealing, and vessel loading',
  },
  {
    step: '05',
    title: 'UAE Discharge & Beyond',
    location: 'Jebel Ali Port, Dubai (UAE)',
    note: 'Rapid customs clearance and wholesale distribution',
  },
];

export default function IndiaGlobalRoute() {
  const [selectedCorridorId, setSelectedCorridorId] = useState<string>('uae');
  const [activeStageStep, setActiveStageStep] = useState<number>(0);

  const activeCorridor =
    corridors.find((c) => c.id === selectedCorridorId) || corridors[0];

  return (
    <section className="py-20 bg-[#071A2B] text-white relative overflow-hidden border-t border-b border-slate-800">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#07579F_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#07579F]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D71925]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Signature Interaction"
          title="Trade Corridor Visualizer: India to Global Horizons"
          subtitle="Explore our active maritime corridor from Maharashtra to the UAE, with expanding future horizons across the Middle East, Africa, Europe, and Southeast Asia."
          theme="dark"
        />

        {/* Interactive Corridor Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {corridors.map((c) => {
            const isSelected = c.id === selectedCorridorId;
            const isConfirmed = c.status === 'active';
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCorridorId(c.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 cursor-pointer border ${
                  isSelected
                    ? isConfirmed
                      ? 'bg-[#D71925] border-red-400 text-white shadow-lg shadow-red-950/60 scale-[1.02]'
                      : 'bg-[#07579F] border-blue-400 text-white shadow-lg shadow-blue-950/60 scale-[1.02]'
                    : 'bg-slate-900/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isConfirmed ? 'bg-emerald-400 animate-pulse' : 'bg-[#FFD400]'
                  }`}
                />
                <span>{c.name.split(' (')[0]}</span>
                {isConfirmed && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/40 text-emerald-200 uppercase font-bold">
                    Primary
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Radar & Map Display Console */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Telemetry Bar */}
          <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1.5 text-slate-300">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="font-mono text-slate-400">TELEMETRY:</span>
                <strong className="text-white font-semibold">{activeCorridor.name}</strong>
              </div>
              <span className="text-slate-600">|</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeCorridor.status === 'active'
                  ? 'bg-red-950 text-red-300 border border-red-800'
                  : 'bg-amber-950 text-amber-300 border border-amber-800'
              }`}>
                {activeCorridor.status === 'active' ? 'Confirmed Target Focus' : 'Future Trade Opportunity'}
              </span>
            </div>

            <div className="flex items-center space-x-4 text-slate-400 text-[11px]">
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#FFD400]" />
                <span>Transit: <strong className="text-white">{activeCorridor.transitTime}</strong></span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Ship className="w-3.5 h-3.5 text-blue-400" />
                <span>Distance: <strong className="text-white">{activeCorridor.distance}</strong></span>
              </span>
            </div>
          </div>

          {/* Interactive Visual Map Area */}
          <div className="relative p-6 sm:p-10 bg-radial from-slate-900 via-slate-950 to-black min-h-[380px] sm:min-h-[440px] flex flex-col justify-between overflow-hidden">
            
            {/* SVG Nautical Chart Routes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 720 360"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="activeRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#07579F" />
                  <stop offset="50%" stopColor="#FFD400" />
                  <stop offset="100%" stopColor="#D71925" />
                </linearGradient>

                <linearGradient id="futureRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#07579F" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>

              {/* Geographic Graticule Grid Lines */}
              <line x1="50" y1="90" x2="680" y2="90" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3, 6" />
              <line x1="50" y1="180" x2="680" y2="180" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3, 6" />
              <line x1="50" y1="270" x2="680" y2="270" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3, 6" />
              <line x1="180" y1="40" x2="180" y2="320" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3, 6" />
              <line x1="360" y1="40" x2="360" y2="320" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3, 6" />
              <line x1="540" y1="40" x2="540" y2="320" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3, 6" />

              {/* All Corridor Background Trails */}
              {corridors.map((c) => {
                if (c.id === selectedCorridorId) return null;
                return (
                  <path
                    key={c.id}
                    d={c.pathD}
                    fill="none"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeDasharray="4, 4"
                    opacity="0.5"
                  />
                );
              })}

              {/* Active Selected Animated Route */}
              <path
                d={activeCorridor.pathD}
                fill="none"
                stroke={activeCorridor.status === 'active' ? 'url(#activeRouteGrad)' : 'url(#futureRouteGrad)'}
                strokeWidth="3.5"
                className="route-dash"
              />

              {/* Pulse Marker at Origin: JNPT / Mumbai (490, 205) */}
              <circle cx="490" cy="205" r="7" fill="#07579F" />
              <circle cx="490" cy="205" r="14" fill="#07579F" opacity="0.3" className="animate-ping" />

              {/* Pulse Marker at Active Destination */}
              <circle
                cx={activeCorridor.destX}
                cy={activeCorridor.destY}
                r="8"
                fill={activeCorridor.status === 'active' ? '#D71925' : '#38bdf8'}
              />
              <circle
                cx={activeCorridor.destX}
                cy={activeCorridor.destY}
                r="16"
                fill={activeCorridor.status === 'active' ? '#D71925' : '#38bdf8'}
                opacity="0.3"
                className="animate-ping"
              />
            </svg>

            {/* Origin Node Overlay Card (India) */}
            <div className="relative z-10 self-end max-w-xs bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-blue-800/80 shadow-2xl text-right">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-blue-900/80 border border-blue-600 text-[10px] font-bold text-white mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ORIGIN HUB: INDIA</span>
              </div>
              <h4 className="font-display font-bold text-sm text-white">Chhatrapati Sambhajinagar</h4>
              <p className="text-[11px] text-slate-300">Western Maharashtra Mandi Network</p>
              <div className="pt-2 mt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-end space-x-1">
                <Anchor className="w-3 h-3 text-[#07579F]" />
                <span>Gateway: JNPT / Nhava Sheva Port</span>
              </div>
            </div>

            {/* Destination Node Overlay Card */}
            <div className="relative z-10 self-start max-w-xs bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-2xl text-left mt-6 sm:mt-0">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-1 bg-red-950 border border-red-700 text-red-200">
                <Globe className="w-3 h-3 text-[#FFD400]" />
                <span>{activeCorridor.status === 'active' ? 'CONFIRMED TARGET MARKET' : 'FUTURE OPPORTUNITY'}</span>
              </div>
              <h4 className="font-display font-bold text-sm text-white">
                {activeCorridor.destination}
              </h4>
              <p className="text-[11px] text-[#FFD400] font-semibold">
                {activeCorridor.destinationHub}
              </p>
              <div className="pt-2 mt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center space-x-1">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>Direct Transit: <strong className="text-slate-200">{activeCorridor.transitTime}</strong></span>
              </div>
            </div>

            {/* Bottom Sourcing Checklist along the active corridor */}
            <div className="relative z-10 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="text-xs">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                  Key Sourcing Focus for this Corridor:
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {activeCorridor.keyProducts.map((p, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[11px]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Link
                  href="/quote"
                  className="px-4 py-2 rounded-xl bg-[#D71925] hover:bg-[#b5131e] text-white text-xs font-bold transition-colors shadow-sm"
                >
                  Inquire for this Route
                </Link>
              </div>
            </div>

          </div>

          {/* 5-Step Checkpoint Timeline Footer */}
          <div className="bg-slate-900/95 p-6 border-t border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FFD400]" />
                <span>Quality & Staging Checkpoints</span>
              </span>
              <span className="text-xs text-slate-400">
                Click any stage to review on-ground controls:
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {lifecycleStages.map((stage, idx) => {
                const isCurrent = activeStageStep === idx;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveStageStep(idx)}
                    className={`p-3 rounded-xl border transition-all duration-150 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#07579F]/40 border-blue-400 text-white shadow-md'
                        : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-[#FFD400]' : 'text-slate-500'}`}>
                        {stage.step}
                      </span>
                      {isCurrent && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                    <div className="text-xs font-bold leading-tight mb-1 text-white">
                      {stage.title}
                    </div>
                    <p className="text-[10px] text-slate-400 line-clamp-2">
                      {stage.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
