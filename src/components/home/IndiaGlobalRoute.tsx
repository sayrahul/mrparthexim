'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Anchor,
  Clock,
  ShieldCheck,
  Ship,
  Sparkles,
  MapPin,
  Activity
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

interface CorridorRoute {
  id: string;
  name: string;
  shortName: string;
  status: 'active' | 'future';
  origin: string;
  destination: string;
  destinationHub: string;
  transitTime: string;
  distance: string;
  description: string;
  keyProducts: string[];
  // SVG coordinates on 1000x500 map canvas
  destX: number;
  destY: number;
  curveControlX: number;
  curveControlY: number;
}

// Origin: JNPT / Mumbai, India (672, 250) on a 1000x562 world map coordinate system
const ORIGIN_X = 672;
const ORIGIN_Y = 250;

const corridors: CorridorRoute[] = [
  {
    id: 'uae',
    name: 'India → UAE (Jebel Ali / Dubai)',
    shortName: 'India → UAE',
    status: 'active',
    origin: 'Chhatrapati Sambhajinagar & JNPT, Mumbai',
    destination: 'United Arab Emirates',
    destinationHub: 'Jebel Ali Port (Dubai) & Port Khalifa (Abu Dhabi)',
    transitTime: '3 - 5 Days (Direct Ocean)',
    distance: '~1,050 Nautical Miles',
    description: 'Our primary confirmed international focus. Direct Arabian Sea container routes connecting Maharashtra agricultural and industrial clusters to Dubai’s premier trading gateway under the India-UAE CEPA framework.',
    keyProducts: ['Guntur Red Chilli', 'Pure Turmeric', 'Combed Cotton Textiles', 'Premium Cashews', 'Packaged FMCG'],
    destX: 605,
    destY: 226,
    curveControlX: 640,
    curveControlY: 245,
  },
  {
    id: 'saudi',
    name: 'India → Saudi Arabia (Red Sea / Gulf)',
    shortName: 'Saudi Arabia',
    status: 'future',
    origin: 'JNPT (Mumbai), India',
    destination: 'Saudi Arabia',
    destinationHub: 'Jeddah Islamic Port & King Abdulaziz Port (Dammam)',
    transitTime: '6 - 9 Days (Estimated)',
    distance: '~1,800 Nautical Miles',
    description: 'Future trade corridor targeting Saudi Arabia’s expanding food service, hospitality, and wholesale retail sectors for high-grade whole spices and grains.',
    keyProducts: ['Whole Spices', 'Kabuli Chickpeas', 'Grains & Pulses', 'Bed Linens'],
    destX: 568,
    destY: 240,
    curveControlX: 618,
    curveControlY: 268,
  },
  {
    id: 'africa',
    name: 'India → East Africa (Mombasa / Dar es Salaam)',
    shortName: 'East Africa',
    status: 'future',
    origin: 'JNPT (Mumbai), India',
    destination: 'East Africa (Kenya & Tanzania)',
    destinationHub: 'Port of Mombasa & Dar es Salaam',
    transitTime: '8 - 12 Days (Estimated)',
    distance: '~2,400 Nautical Miles',
    description: 'Strategic future corridor utilizing direct southwestern Indian Ocean sea lanes for consumer packaged goods, textile rolls, and staple food products.',
    keyProducts: ['Woven Cotton Fabrics', 'Consumer Staples', 'Spices & Seasonings'],
    destX: 582,
    destY: 322,
    curveControlX: 628,
    curveControlY: 308,
  },
  {
    id: 'europe',
    name: 'India → Europe (Rotterdam / UK)',
    shortName: 'Europe (Rotterdam)',
    status: 'future',
    origin: 'JNPT (Mumbai), India',
    destination: 'European Union & United Kingdom',
    destinationHub: 'Port of Rotterdam & Port of Antwerp',
    transitTime: '22 - 28 Days (Via Suez)',
    distance: '~6,300 Nautical Miles',
    description: 'Long-term quality corridor serving European buyers with certified curcumin-rich turmeric, premium cotton textiles, and lab-tested organic spices.',
    keyProducts: ['High-Curcumin Turmeric', 'Organic Whole Spices', 'High-Thread Count Linens'],
    destX: 495,
    destY: 142,
    curveControlX: 575,
    curveControlY: 195,
  },
  {
    id: 'asean',
    name: 'India → Southeast Asia (Singapore / Malaysia)',
    shortName: 'Singapore & ASEAN',
    status: 'future',
    origin: 'Chennai / JNPT, India',
    destination: 'Singapore & Malaysia',
    destinationHub: 'Port of Singapore & Port Klang',
    transitTime: '5 - 8 Days (Direct)',
    distance: '~1,700 Nautical Miles',
    description: 'Expanding eastward maritime trade corridor tapping into ASEAN culinary, spice re-packing, and ethnic grocery distribution channels.',
    keyProducts: ['Red Chilli Powder', 'Cashew Kernels', 'Traditional Indian Fabrics'],
    destX: 754,
    destY: 298,
    curveControlX: 712,
    curveControlY: 282,
  },
];

const lifecycleStages = [
  {
    step: '01',
    title: 'Mandi Sourcing',
    location: 'Chhatrapati Sambhajinagar',
    note: 'Direct procurement in regional farm mandis & textile mills',
  },
  {
    step: '02',
    title: 'Lab Quality Check',
    location: 'Sample Extraction & Assays',
    note: 'Moisture, ASTA color, purity, and microbial verification',
  },
  {
    step: '03',
    title: 'Export Packaging',
    location: 'Climate-Barrier Prep',
    note: 'Poly-barrier sacks, vacuum flexi-pouches, heavy cartons',
  },
  {
    step: '04',
    title: 'Port Staging / CFS',
    location: 'JNPT / Nhava Sheva',
    note: 'Container stuffing, customs sealing, and vessel loading',
  },
  {
    step: '05',
    title: 'UAE Discharge',
    location: 'Jebel Ali Port (Dubai)',
    note: 'Expedited customs clearance and wholesale distribution',
  },
];

export default function IndiaGlobalRoute() {
  const [selectedCorridorId, setSelectedCorridorId] = useState<string>('uae');
  const [activeStageStep, setActiveStageStep] = useState<number>(0);

  const activeCorridor =
    corridors.find((c) => c.id === selectedCorridorId) || corridors[0];

  return (
    <section className="py-16 sm:py-20 bg-[#071A2B] text-white relative overflow-hidden border-t border-b border-slate-800">
      {/* Background glow */}
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

        {/* Responsive Corridor Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {corridors.map((c) => {
            const isSelected = c.id === selectedCorridorId;
            const isConfirmed = c.status === 'active';
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCorridorId(c.id)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 cursor-pointer border ${
                  isSelected
                    ? isConfirmed
                      ? 'bg-[#D71925] border-red-400 text-white shadow-lg shadow-red-950/60 scale-[1.02]'
                      : 'bg-[#07579F] border-blue-400 text-white shadow-lg shadow-blue-950/60 scale-[1.02]'
                    : 'bg-slate-900/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    isConfirmed ? 'bg-emerald-400 animate-pulse' : 'bg-[#FFD400]'
                  }`}
                />
                <span className="truncate">{c.shortName}</span>
                {isConfirmed && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-black/40 text-emerald-200 uppercase font-bold">
                    Primary
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Visualizer Console Container */}
        <div className="bg-slate-950 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Telemetry Header */}
          <div className="bg-slate-900/95 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center space-x-1.5 text-slate-300">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
                <span className="font-mono text-slate-400 text-[11px]">CORRIDOR:</span>
                <strong className="text-white font-semibold text-xs sm:text-sm truncate max-w-[220px] sm:max-w-none">
                  {activeCorridor.name}
                </strong>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeCorridor.status === 'active'
                  ? 'bg-red-950 text-red-300 border border-red-800'
                  : 'bg-amber-950 text-amber-300 border border-amber-800'
              }`}>
                {activeCorridor.status === 'active' ? 'Confirmed Target Focus' : 'Future Trade Opportunity'}
              </span>
            </div>

            <div className="flex items-center space-x-3 text-slate-400 text-[11px]">
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#FFD400]" />
                <span>Transit: <strong className="text-white">{activeCorridor.transitTime}</strong></span>
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="hidden sm:flex items-center space-x-1">
                <Ship className="w-3.5 h-3.5 text-blue-400" />
                <span>Distance: <strong className="text-white">{activeCorridor.distance}</strong></span>
              </span>
            </div>
          </div>

          {/* Map & Corridor Canvas Area */}
          <div className="relative bg-[#051322] p-4 sm:p-8 overflow-hidden">
            
            {/* World Map Background Graphic (Realistic Cartographic Robinson Projection) */}
            <div className="relative w-full aspect-16/9 min-h-[300px] sm:min-h-[440px] rounded-xl overflow-hidden border border-slate-800 bg-[#06121e]">
              <Image
                src="/images/trade/world-map-dark.jpg"
                alt="Global Maritime Trade Map"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center opacity-85 pointer-events-none select-none"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051322]/90 via-transparent to-[#051322]/40 pointer-events-none" />

              {/* Dynamic Interactive SVG Corridor Routes Overlay */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 562"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#07579F" />
                    <stop offset="50%" stopColor="#FFD400" />
                    <stop offset="100%" stopColor="#D71925" />
                  </linearGradient>

                  <linearGradient id="futureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#07579F" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>

                  <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#38bdf8" floodOpacity="0.6" />
                  </filter>
                </defs>

                {/* All Inactive Corridor Route Trails (Clickable to switch) */}
                {corridors.map((c) => {
                  if (c.id === selectedCorridorId) return null;
                  return (
                    <g
                      key={c.id}
                      onClick={() => setSelectedCorridorId(c.id)}
                      className="cursor-pointer group"
                    >
                      <path
                        d={`M ${ORIGIN_X} ${ORIGIN_Y} Q ${c.curveControlX} ${c.curveControlY} ${c.destX} ${c.destY}`}
                        fill="none"
                        stroke="#475569"
                        strokeWidth="2"
                        strokeDasharray="5, 6"
                        opacity="0.65"
                        className="group-hover:stroke-blue-400 group-hover:opacity-100 transition-all"
                      />
                      {/* Subdued Destination Dot */}
                      <circle
                        cx={c.destX}
                        cy={c.destY}
                        r="5"
                        fill="#334155"
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        className="group-hover:fill-blue-400 transition-all"
                      />
                    </g>
                  );
                })}

                {/* Active Selected Animated Route */}
                <path
                  d={`M ${ORIGIN_X} ${ORIGIN_Y} Q ${activeCorridor.curveControlX} ${activeCorridor.curveControlY} ${activeCorridor.destX} ${activeCorridor.destY}`}
                  fill="none"
                  stroke={activeCorridor.status === 'active' ? 'url(#activeGradient)' : 'url(#futureGradient)'}
                  strokeWidth="4"
                  className="route-dash"
                  filter="url(#glowEffect)"
                />

                {/* Origin Marker: India (JNPT / Mumbai) */}
                <g>
                  <circle cx={ORIGIN_X} cy={ORIGIN_Y} r="7" fill="#07579F" stroke="#ffffff" strokeWidth="2" />
                  <circle cx={ORIGIN_X} cy={ORIGIN_Y} r="18" fill="#07579F" opacity="0.35" className="animate-ping" />
                  <rect x={ORIGIN_X - 10} y={ORIGIN_Y - 26} width="96" height="20" rx="4" fill="#071A2B" fillOpacity="0.95" stroke="#07579F" strokeWidth="1.5" />
                  <text x={ORIGIN_X - 4} y={ORIGIN_Y - 12} fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                    INDIA (JNPT)
                  </text>
                </g>

                {/* Destination Marker */}
                <g>
                  <circle
                    cx={activeCorridor.destX}
                    cy={activeCorridor.destY}
                    r="8"
                    fill={activeCorridor.status === 'active' ? '#D71925' : '#38bdf8'}
                    stroke="#ffffff"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx={activeCorridor.destX}
                    cy={activeCorridor.destY}
                    r="22"
                    fill={activeCorridor.status === 'active' ? '#D71925' : '#38bdf8'}
                    opacity="0.35"
                    className="animate-ping"
                  />
                  <rect
                    x={activeCorridor.destX - 12}
                    y={activeCorridor.destY - 28}
                    width={activeCorridor.shortName.length > 14 ? 140 : 120}
                    height="20"
                    rx="4"
                    fill="#071A2B"
                    fillOpacity="0.95"
                    stroke={activeCorridor.status === 'active' ? '#D71925' : '#38bdf8'}
                    strokeWidth="1.5"
                  />
                  <text
                    x={activeCorridor.destX - 6}
                    y={activeCorridor.destY - 14}
                    fill={activeCorridor.status === 'active' ? '#FFD400' : '#38bdf8'}
                    fontSize="10"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    {activeCorridor.shortName.toUpperCase()}
                  </text>
                </g>
              </svg>
            </div>

            {/* Responsive Telemetry Info Cards (Separated for guaranteed zero overlap on any screen) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              
              {/* Origin Card */}
              <div className="bg-slate-900/95 p-3.5 sm:p-4 rounded-xl border border-blue-800/80 shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-white bg-blue-900/90 px-2 py-0.5 rounded-full border border-blue-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>ORIGIN SOURCING BASE</span>
                  </span>
                  <span className="text-[10px] text-slate-400">Western Maharashtra</span>
                </div>
                <div className="font-bold text-xs sm:text-sm text-white">
                  Chhatrapati Sambhajinagar
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Direct Mandi Procurement & JNPT / Nhava Sheva Gateway
                </p>
              </div>

              {/* Destination Card */}
              <div className={`p-3.5 sm:p-4 rounded-xl shadow-lg border ${
                activeCorridor.status === 'active'
                  ? 'bg-slate-900/95 border-red-800/80'
                  : 'bg-slate-900/95 border-sky-800/80'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`inline-flex items-center space-x-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    activeCorridor.status === 'active'
                      ? 'bg-red-950 text-red-200 border-red-700'
                      : 'bg-sky-950 text-sky-200 border-sky-700'
                  }`}>
                    <Globe className="w-3 h-3 text-[#FFD400]" />
                    <span>{activeCorridor.status === 'active' ? 'CONFIRMED TARGET MARKET' : 'FUTURE OPPORTUNITY'}</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold">{activeCorridor.transitTime}</span>
                </div>
                <div className="font-bold text-xs sm:text-sm text-white">
                  {activeCorridor.destination}
                </div>
                <p className="text-[11px] text-[#FFD400] font-semibold mt-0.5">
                  {activeCorridor.destinationHub}
                </p>
              </div>

            </div>

            {/* Sourcing Focus Strip */}
            <div className="bg-slate-900/95 p-3.5 sm:p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-3">
              <div className="text-xs">
                <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">
                  Key Sourcing Focus for this Route:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCorridor.keyProducts.map((p, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[10px] sm:text-[11px]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/quote"
                className="w-full sm:w-auto shrink-0 px-4 py-2 rounded-xl bg-[#D71925] hover:bg-[#b5131e] text-white text-xs font-bold transition-colors shadow-sm text-center"
              >
                Inquire for this Corridor
              </Link>
            </div>

          </div>

          {/* Staging Checkpoints Footer */}
          <div className="bg-slate-900/95 p-4 sm:p-6 border-t border-slate-800">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FFD400]" />
                <span>On-Ground Staging Checkpoints</span>
              </span>
              <span className="text-slate-500 text-[11px] hidden sm:inline">
                Click any stage to review controls:
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
              {lifecycleStages.map((stage, idx) => {
                const isCurrent = activeStageStep === idx;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveStageStep(idx)}
                    className={`p-2.5 sm:p-3 rounded-xl border transition-all duration-150 cursor-pointer ${
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
                    <div className="text-xs font-bold leading-tight mb-0.5 text-white truncate">
                      {stage.title}
                    </div>
                    <p className="text-[10px] text-slate-400 line-clamp-1">
                      {stage.location}
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
