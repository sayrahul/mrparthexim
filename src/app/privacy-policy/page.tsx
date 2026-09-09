import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy | Trade Confidentiality & Data Protection',
  description: 'Privacy Policy for MrParthExim. How we handle international trade inquiries, contact submissions, and buyer information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badge="Legal & Compliance"
        title="Privacy Policy"
        description="How MrParthExim handles international commercial inquiries, RFQ specifications, and business communications."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-8 text-slate-700 text-sm leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">1. Overview</h2>
            <p>
              MrParthExim (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to respecting the commercial privacy
              and confidentiality of our buyers, suppliers, and website visitors. This Privacy Policy
              describes how we collect, store, and utilize information submitted through our website
              and communication channels.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">2. Information We Collect</h2>
            <p>
              When you submit an export quotation request, send a message through our contact forms,
              or contact us via WhatsApp or email, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-slate-600">
              <li>Full Name and Professional Title</li>
              <li>Company / Trading Business Name</li>
              <li>Business Email Address and Telephone / WhatsApp Number</li>
              <li>Country of Operation and Destination Port of Discharge</li>
              <li>Product Requirements, Quantity Estimates, and Target Specifications</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">3. Use of Commercial Data</h2>
            <p>
              The information submitted by prospective buyers is utilized strictly to:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-slate-600">
              <li>Evaluate supplier sourcing availability across our Indian agricultural and manufacturing network.</li>
              <li>Formulate accurate commercial quotations, Proforma Invoices, and ocean freight logistics estimates.</li>
              <li>Communicate directly regarding product specifications, laboratory assay reports, and shipment timelines.</li>
            </ul>
            <p className="mt-2">
              We never sell, rent, or lease buyer contact details or proprietary RFQ specifications to third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">4. Trade Confidentiality</h2>
            <p>
              We treat your product formulas, private-label artwork, packaging designs, and destination
              volumes as confidential commercial intellectual property. Access is restricted exclusively
              to personnel directly responsible for fulfilling your export transaction.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">5. Contact Our Privacy Desk</h2>
            <p>
              If you have any questions or wish to update your business information on file, please
              contact:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-2 text-xs space-y-1 text-slate-800">
              <p><strong>{siteConfig.name}</strong></p>
              <p>Founder: {siteConfig.founder}</p>
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
