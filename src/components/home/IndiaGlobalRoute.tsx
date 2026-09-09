'use client';

import React, { useState } from 'react';
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
  pathD: string;
  destX: number;
  destY: number;
}

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
    pathD: 'M 500 175 Q 360 200 280 135',
    destX: 280,
    destY: 135,
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
    keyProducts: ['Whole Spices', 'Kabuli Chickpeas', 'Basmati & Non-Basmati Grains', 'Bed Linens'],
    pathD: 'M 500 175 Q 350 205 200 150',
    destX: 200,
    destY: 150,
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
    pathD: 'M 500 175 Q 380 250 210 240',
    destX: 210,
    destY: 240,
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
    pathD: 'M 500 175 Q 310 135 120 70',
    destX: 120,
    destY: 70,
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
    pathD: 'M 500 175 Q 580 190 640 220',
    destX: 640,
    destY: 220,
  },
];

const lifecycleStages = [
  {
    step: '01',
    title: 'Mandi Sourcing',
    location: 'Chhatrapati Sambhajinagar',
    note: 'Direct procurement connections in farm mandis & textile mills',
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
    note: 'Rapid customs clearance and wholesale distribution',
  },
];

export default function IndiaGlobalRoute() {
  const [selectedCorridorId, setSelectedCorridorId] = useState<string>('uae');
  const [activeStageStep, setActiveStageStep] = useState<number>(0);

  const activeCorridor =
    corridors.find((c) => c.id === selectedCorridorId) || corridors[0];

  return (
    <section className="py-16 sm:py-20 bg-[#071A2B] text-white relative overflow-hidden border-t border-b border-slate-800">
      {/* Radial background glow */}
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

        {/* Console Container */}
        <div className="bg-slate-950 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Telemetry Header Bar */}
          <div className="bg-slate-900/90 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
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

          {/* Main Map Visual Canvas */}
          <div className="relative p-4 sm:p-8 bg-radial from-slate-900 via-slate-950 to-black overflow-hidden flex flex-col justify-between">
            
            {/* Embedded World Map & Maritime Route SVG */}
            <div className="relative w-full aspect-16/10 sm:aspect-21/9 min-h-[260px] sm:min-h-[340px]">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 740 340"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="activeCorridorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#07579F" />
                    <stop offset="50%" stopColor="#FFD400" />
                    <stop offset="100%" stopColor="#D71925" />
                  </linearGradient>

                  <linearGradient id="futureCorridorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#07579F" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>

                  {/* World Map Background Pattern */}
                  <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#334155" opacity="0.3" />
                  </pattern>
                </defs>

                {/* Subtle Coordinate Grid */}
                <rect width="740" height="340" fill="url(#gridPattern)" />
                <line x1="30" y1="85" x2="710" y2="85" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="4, 6" />
                <line x1="30" y1="170" x2="710" y2="170" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="4, 6" />
                <line x1="30" y1="255" x2="710" y2="255" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="4, 6" />
                <line x1="185" y1="20" x2="185" y2="320" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="4, 6" />
                <line x1="370" y1="20" x2="370" y2="320" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="4, 6" />
                <line x1="555" y1="20" x2="555" y2="320" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="4, 6" />

                {/* ============================================================ */}
                {/* ACCURATE WORLD MAP CONTINENT OUTLINES (MINIMAL OPACITY 15%) */}
                {/* ============================================================ */}
                <g opacity="0.16" fill="#334155" stroke="#64748b" strokeWidth="0.8">
                  {/* Western Europe & UK */}
                  <path d="M 80 40 L 95 35 L 115 30 L 125 45 L 140 40 L 145 60 L 130 75 L 110 85 L 90 75 L 85 55 Z" />
                  <path d="M 100 22 L 108 20 L 112 30 L 103 32 Z" /> {/* UK */}

                  {/* Mediterranean Basin / Southern Europe */}
                  <path d="M 120 75 L 150 70 L 175 80 L 170 95 L 140 95 L 125 85 Z" />

                  {/* African Continent */}
                  <path d="M 95 95 L 165 95 L 205 130 L 225 170 L 220 220 L 205 270 L 175 300 L 150 280 L 140 230 L 115 175 L 85 140 L 80 115 Z" />
                  <path d="M 225 240 L 235 250 L 230 270 L 220 260 Z" /> {/* Madagascar */}

                  {/* Arabian Peninsula & Middle East */}
                  <path d="M 195 110 L 240 105 L 275 120 L 290 145 L 270 175 L 235 180 L 205 160 L 200 130 Z" />

                  {/* Persian Gulf & Red Sea waterways */}
                  <circle cx="280" cy="135" r="3" fill="#07579F" opacity="0.8" /> {/* Jebel Ali / Dubai */}

                  {/* Indian Subcontinent */}
                  <path d="M 440 115 L 485 110 L 530 120 L 545 155 L 535 200 L 510 240 L 490 255 L 475 220 L 460 175 L 445 145 Z" />
                  <path d="M 515 255 L 522 260 L 518 270 L 512 265 Z" /> {/* Sri Lanka */}

                  {/* Central Asia / Russia */}
                  <path d="M 280 40 L 400 30 L 550 35 L 620 50 L 600 95 L 530 110 L 450 100 L 350 90 L 270 85 Z" />

                  {/* Southeast Asia & Indochina */}
                  <path d="M 560 140 L 610 145 L 635 175 L 620 210 L 600 195 L 580 170 Z" />
                  <path d="M 615 225 L 635 230 L 640 250 L 620 245 Z" /> {/* Malay Peninsula & Singapore */}
                  <path d="M 625 255 L 670 260 L 650 280 L 610 270 Z" /> {/* Indonesian Archipelago */}
                  <path d="M 660 210 L 685 220 L 675 250 L 650 235 Z" /> {/* Philippines */}

                  {/* Australia (corner hint) */}
                  <path d="M 670 290 L 715 285 L 730 320 L 690 330 Z" />
                </g>

                {/* Ocean Region Watermark Labels (Subtle) */}
                <text x="350" y="240" fill="#475569" fontSize="10" fontFamily="monospace" letterSpacing="3" opacity="0.4">
                  ARABIAN SEA / INDIAN OCEAN
                </text>
                <text x="210" y="85" fill="#475569" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity="0.3">
                  MEDITERRANEAN / SUEZ
                </text>
                <text x="590" y="250" fill="#475569" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity="0.3">
                  MALACCA STRAIT
                </text>

                {/* Background inactive corridor trails */}
                {corridors.map((c) => {
                  if (c.id === selectedCorridorId) return null;
                  return (
                    <path
                      key={c.id}
                      d={c.pathD}
                      fill="none"
                      stroke="#334155"
                      strokeWidth="1.5"
                      strokeDasharray="4, 5"
                      opacity="0.5"
                    />
                  );
                })}

                {/* Active Selected Animated Route Line */}
                <path
                  d={activeCorridor.pathD}
                  fill="none"
                  stroke={activeCorridor.status === 'active' ? 'url(#activeCorridorGrad)' : 'url(#futureCorridorGrad)'}
                  strokeWidth="3.5"
                  className="route-dash"
                />

                {/* Origin Marker: JNPT / Mumbai (500, 175) */}
                <circle cx="500" cy="175" r="6" fill="#07579F" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="500" cy="175" r="14" fill="#07579F" opacity="0.3" className="animate-ping" />
                <text x="512" y="172" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                  INDIA (JNPT)
                </text>

                {/* Destination Marker */}
                <circle
                  cx={activeCorridor.destX}
                  cy={activeCorridor.destY}
                  r="7"
                  fill={activeCorridor.status === 'active' ? '#D71925' : '#38bdf8'}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <circle
                  cx={activeCorridor.destX}
                  cy={activeCorridor.destY}
                  r="16"
                  fill={activeCorridor.status === 'active' ? '#D71925' : '#38bdf8'}
                  opacity="0.3"
                  className="animate-ping"
                />
                <text
                  x={activeCorridor.destX - 10}
                  y={activeCorridor.destY - 12}
                  fill={activeCorridor.status === 'active' ? '#FFD400' : '#38bdf8'}
                  fontSize="9"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  {activeCorridor.shortName.toUpperCase()}
                </text>
              </svg>
            </div>

            {/* Responsive Floating Telemetry Node Cards (Cleanly structured for mobile & desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 relative z-10">
              
              {/* Origin Card */}
              <div className="bg-slate-900/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-blue-800/70 shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-white bg-blue-900/90 px-2 py-0.5 rounded-full border border-blue-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>ORIGIN</span>
                  </span>
                  <span className="text-[10px] text-slate-400">Maharashtra Belt</span>
                </div>
                <div className="font-bold text-xs sm:text-sm text-white">
                  Chhatrapati Sambhajinagar
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Direct Mandi Procurement & JNPT / Nhava Sheva Gateway
                </p>
              </div>

              {/* Destination Card */}
              <div className={`p-3.5 sm:p-4 rounded-xl backdrop-blur-md shadow-lg border ${
                activeCorridor.status === 'active'
                  ? 'bg-slate-900/90 border-red-800/80'
                  : 'bg-slate-900/90 border-sky-800/80'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`inline-flex items-center space-x-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    activeCorridor.status === 'active'
                      ? 'bg-red-950 text-red-200 border-red-700'
                      : 'bg-sky-950 text-sky-200 border-sky-700'
                  }`}>
                    <Globe className="w-3 h-3 text-[#FFD400]" />
                    <span>{activeCorridor.status === 'active' ? 'CONFIRMED TARGET' : 'FUTURE OPPORTUNITY'}</span>
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

            {/* Bottom Sourcing Checklist */}
            <div className="bg-black/50 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-3 relative z-10">
              <div className="text-xs">
                <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">
                  Key Sourcing Focus for this Route:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCorridor.keyProducts.map((p, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-slate-300 text-[10px] sm:text-[11px]"
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

          {/* 5-Step Checkpoints Footer */}
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
