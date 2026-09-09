import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FinalCTASection from '@/components/home/FinalCTASection';
import { targetMarkets } from '@/data/workflowData';
import { Globe, Anchor, CheckCircle2, Clock, MapPin, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Reach | India to UAE Trade Corridor & Future Horizons',
  description:
    'Explore MrParthExim’s commercial trade corridor from India to the UAE, with expanding future opportunities across the Middle East, Africa, and Europe.',
};

export default function GlobalReachPage() {
  return (
    <div className="bg-white">
      <PageHero
        badge="Trade Connectivity"
        title="India to UAE. One Trusted Connection."
        description="Our initial international focus is the UAE, with opportunities to expand into additional markets. We are establishing verified supply chains connecting Indian agricultural and manufacturing strengths to international commerce."
        breadcrumbs={[{ label: 'Global Reach' }]}
      />

      {/* Corridor Visual & Narrative */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#D71925] uppercase tracking-wider">
                Confirmed International Focus
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Why the UAE is Our Primary Commercial Launchpad
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The trade relationship between India and the United Arab Emirates is bolstered by
                historic ties and the modern Comprehensive Economic Partnership Agreement (CEPA).
                For an emerging export business like MrParthExim, focusing on the UAE provides
                tangible operational benefits:
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                  <Anchor className="w-5 h-5 text-[#07579F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Direct Maritime Transit: 3-5 Days</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Fast vessel rotations from Nhava Sheva (JNPT) and western Indian ports directly into Jebel Ali Port, Dubai, minimizing cargo moisture vulnerability.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#D71925] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Established Demand for Indian Staples</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Exceptional market depth for authentic Indian whole and ground spices, Guntur red chillies, premium cashews, and institutional cotton linens.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                  <Compass className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Strategic Regional Re-Export Gateway</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      The UAE serves as the central trading fulcrum for the broader Gulf Cooperation Council (GCC), East Africa, and Levant markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Corridor Diagram */}
            <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-8 border border-slate-800 text-white shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Maritime Trade Corridor
                </span>
                <span className="px-2.5 py-1 rounded-full bg-red-950 text-red-300 border border-red-800 text-xs font-semibold">
                  UAE Target Focus
                </span>
              </div>

              {/* Graphical Schematic */}
              <div className="py-8 text-center space-y-6">
                <div className="p-4 rounded-2xl bg-blue-950/70 border border-blue-800/80 text-left">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">ORIGIN HUB (INDIA)</div>
                  <div className="font-display font-bold text-base text-white mt-0.5">
                    Chhatrapati Sambhajinagar, Maharashtra
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Central consolidation point connecting western Indian mandis & JNPT / Mumbai port terminal.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-1">
                  <div className="w-0.5 h-8 bg-linear-to-b from-[#07579F] to-[#D71925]" />
                  <span className="text-xs text-[#FFD400] font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                    Arabian Sea Ocean Freight (3-5 Days)
                  </span>
                  <div className="w-0.5 h-8 bg-linear-to-b from-[#FFD400] to-[#D71925]" />
                </div>

                <div className="p-4 rounded-2xl bg-red-950/60 border border-red-800/80 text-left">
                  <div className="text-[10px] uppercase tracking-wider text-red-300">PRIMARY DESTINATION (UAE)</div>
                  <div className="font-display font-bold text-base text-white mt-0.5">
                    Jebel Ali Port / Dubai & Port Khalifa / Abu Dhabi
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Direct customs clearance, wholesale food distribution, and regional warehousing.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] text-slate-400 text-center">
                Strict positioning: Emerging exporter focusing initially on UAE commercial alignment.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Markets & Expansion Strategy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Target Markets"
            title="Markets We Aim to Serve"
            subtitle="Do not mistake our focus for limitation. We are laying a strong foundation in the UAE while preparing future market opportunities across the Middle East, Africa, and Europe."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetMarkets.map((market) => {
              const isConfirmed = market.status === 'confirmed_target';
              return (
                <div
                  key={market.id}
                  className={`bg-white rounded-2xl p-7 border transition-all duration-200 flex flex-col justify-between ${
                    isConfirmed
                      ? 'border-[#D71925]/60 shadow-lg ring-1 ring-red-200'
                      : 'border-slate-200 shadow-xs hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                          isConfirmed
                            ? 'bg-[#D71925] text-white'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {isConfirmed ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Confirmed Target Market</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-3.5 h-3.5" />
                            <span>Future Opportunity</span>
                          </>
                        )}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{market.region}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                      {market.country}
                    </h3>
                    <div className="text-xs font-semibold text-[#07579F] mb-3">
                      {market.highlight}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {market.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center space-x-1">
                      <Anchor className="w-3.5 h-3.5 text-[#07579F]" />
                      <span>Target Ports & Hubs</span>
                    </div>
                    <ul className="space-y-1">
                      {market.portsOrHubs.map((port, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <span>{port}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </div>
  );
}
