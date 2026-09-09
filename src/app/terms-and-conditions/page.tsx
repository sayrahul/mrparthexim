import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Terms & Conditions | International Trade Framework',
  description: 'Terms & Conditions governing website usage, trade inquiries, and export quotation interactions with MrParthExim.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badge="Legal & Commercial Terms"
        title="Terms & Conditions"
        description="General terms governing website access, demonstration product listings, and export inquiry communications with MrParthExim."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-8 text-slate-700 text-sm leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">1. Introduction</h2>
            <p>
              Welcome to the website of MrParthExim (&quot;Company&quot;, &quot;we&quot;, or &quot;us&quot;). By accessing our website,
              reviewing product information, or submitting commercial inquiries, you agree to comply with
              these Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">2. Business Stage & Demonstration Content</h2>
            <p>
              MrParthExim is an emerging Indian export business based in Chhatrapati Sambhajinagar,
              Maharashtra, preparing to enter international trade with an initial commercial focus on
              the United Arab Emirates (UAE).
            </p>
            <p className="mt-2">
              Product categories, item profiles, and packaging specifications displayed on this website
              serve as demonstration representations of our sourcing capabilities and supplier networks.
              No binding contract for sale or purchase is formed merely by viewing this website.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">3. Quotations & Contracts</h2>
            <p>
              Quotations provided through our Request a Quote system, email, or WhatsApp communications
              are preliminary invitations to treat. A formal, legally binding international trade
              transaction is created only upon the mutual execution of a formal Sales Contract or
              Proforma Invoice (PI) detailing verified Incoterms (e.g. FOB/CIF), payment mechanics
              (e.g. Letter of Credit or T/T), laboratory assay parameters, and delivery timelines.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">4. Intellectual Property</h2>
            <p>
              The official name &quot;MrParthExim&quot;, brand logo, typography, tagline (&quot;Your Trust, Our Promise&quot;),
              and original content are proprietary to MrParthExim and founder Mr. Rushikesh Pardeshi.
              Unauthorized reproduction or modification is prohibited.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">5. Governing Law & Jurisdiction</h2>
            <p>
              These terms and any commercial inquiries initiated through this platform shall be
              governed by and construed in accordance with the laws of the Republic of India. Any
              disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent
              courts situated in Chhatrapati Sambhajinagar, Maharashtra, India.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">6. Commercial Contact</h2>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-2 text-xs space-y-1 text-slate-800">
              <p><strong>{siteConfig.name}</strong></p>
              <p>Location: {siteConfig.address.formatted}</p>
              <p>Phone / WhatsApp: {siteConfig.phoneDisplay}</p>
              <p>Email: {siteConfig.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
