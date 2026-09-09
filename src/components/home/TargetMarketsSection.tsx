import React from 'react';
import Link from 'next/link';
import { Globe, ArrowRight, Anchor, CheckCircle2, Clock } from 'lucide-react';
import { targetMarkets } from '@/data/workflowData';
import SectionHeading from '@/components/common/SectionHeading';

export default function TargetMarketsSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Trade Horizons"
          title="Markets We Aim to Serve"
          subtitle="MrParthExim is an upcoming export business with the UAE as its primary confirmed target market, while actively surveying future international market opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetMarkets.map((market) => {
            const isConfirmed = market.status === 'confirmed_target';

            return (
              <div
                key={market.id}
                className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                  isConfirmed
                    ? 'bg-linear-to-b from-blue-50/50 to-white border-blue-300 shadow-md ring-1 ring-blue-200'
                    : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        isConfirmed
                          ? 'bg-[#D71925] text-white shadow-xs'
                          : 'bg-amber-100 text-amber-800'
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

                    <span className="text-xs text-slate-400 font-medium">
                      {market.region}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                    {market.country}
                  </h3>

                  <p className="text-xs font-semibold text-[#07579F] mb-3">
                    {market.highlight}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {market.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center space-x-1">
                    <Anchor className="w-3 h-3 text-[#07579F]" />
                    <span>Key Maritime Gateways</span>
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

        <div className="mt-12 text-center">
          <Link
            href="/global-reach"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
          >
            <span>View Detailed Global Reach & Maritime Logistics</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
