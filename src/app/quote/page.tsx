import React, { Suspense } from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import QuoteForm from '@/components/forms/QuoteForm';
import { ShieldCheck, MessageCircle, Phone, Mail, Clock, Anchor } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Request a Quote | Export Sourcing Inquiry',
  description:
    'Submit your export product requirement to MrParthExim. Direct sourcing, specification alignment, and commercial quotation for UAE and international buyers.',
};

function QuoteFormContainer() {
  return <QuoteForm />;
}

export default function QuotePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badge="Commercial Inquiry Desk"
        title="Request an Export Quotation"
        description="Tell us what you are looking for. Share your required product specification, target volume, and destination port. Our trade desk will review sourcing options and respond with structured terms."
        breadcrumbs={[{ label: 'Request a Quote' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Area */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="bg-white p-8 rounded-2xl">Loading form...</div>}>
              <QuoteFormContainer />
            </Suspense>
          </div>

          {/* Sidebar: Trust Signals & Direct Handover */}
          <div className="lg:col-span-4 space-y-6">
            {/* WhatsApp Priority Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">
                Prefer WhatsApp for Speed?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you have an urgent RFQ or wish to connect directly with founder Mr. Rushikesh Pardeshi,
                reach out over WhatsApp.
              </p>
              <a
                href={getWhatsAppUrl('Hello MrParthExim, I am interested in requesting an export quotation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 mr-1.5" />
                <span>Chat on WhatsApp (+91 {siteConfig.phone})</span>
              </a>
            </div>

            {/* Sourcing Covenants */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3.5">
              <h3 className="font-display font-bold text-sm text-slate-900 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#07579F]" />
                <span>Our Quotation Commitment</span>
              </h3>
              <ul className="text-xs text-slate-600 space-y-2.5">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#07579F] mt-1.5 shrink-0" />
                  <span><strong>Transparent Pricing:</strong> Clear itemization of product cost, packaging, and freight terms (FOB/CIF).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#07579F] mt-1.5 shrink-0" />
                  <span><strong>Physical Lot Alignment:</strong> Samples or assay certificates provided prior to formal commitments.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#07579F] mt-1.5 shrink-0" />
                  <span><strong>UAE Transit Efficiency:</strong> 3-5 days ocean container sailings to Jebel Ali Port.</span>
                </li>
              </ul>
            </div>

            {/* Direct Contact Desk Info */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white text-xs space-y-2">
              <div className="font-semibold text-[#FFD400]">Trade Office Location:</div>
              <p className="text-slate-300">
                {siteConfig.address.formatted}
              </p>
              <div className="pt-2 border-t border-slate-800 text-slate-400">
                Founder: <strong className="text-white">{siteConfig.founder}</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
