import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import ContactForm from '@/components/forms/ContactForm';
import { siteConfig, getWhatsAppUrl } from '@/config/siteConfig';
import { MapPin, Phone, Mail, MessageCircle, Clock, User, ShieldCheck, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Direct Trade Inquiries & Location',
  description:
    'Contact MrParthExim. Based in Chhatrapati Sambhajinagar, Maharashtra, India. Founder: Mr. Rushikesh Pardeshi. Direct phone and WhatsApp: +91 9975195895.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badge="Contact & Commercial Desk"
        title="Get in Touch with MrParthExim"
        description="Whether you have an immediate import requirement, need custom sourcing from India, or wish to connect with founder Mr. Rushikesh Pardeshi, our trade desk is at your service."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Business Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Business Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold text-[#D71925] uppercase tracking-wider">
                  Direct Trade Desk
                </span>
                <h3 className="font-display font-bold text-2xl text-slate-900 mt-1">
                  {siteConfig.name}
                </h3>
                <p className="text-xs font-semibold text-[#07579F] italic mt-0.5">
                  &quot;{siteConfig.tagline}&quot;
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#D71925] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider">
                      Business Location:
                    </strong>
                    <p className="text-xs leading-relaxed text-slate-700 mt-0.5">
                      {siteConfig.address.street},<br />
                      {siteConfig.address.landmark},<br />
                      {siteConfig.address.road},<br />
                      {siteConfig.address.city},<br />
                      {siteConfig.address.state} - {siteConfig.address.pincode}, India
                    </p>
                  </div>
                </div>

                {/* Founder */}
                <div className="flex items-start space-x-3 pt-3 border-t border-slate-100">
                  <User className="w-5 h-5 text-[#07579F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider">
                      Founder:
                    </strong>
                    <p className="text-xs text-slate-700 mt-0.5">
                      {siteConfig.founder}
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start space-x-3 pt-3 border-t border-slate-100">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider">
                      Phone / WhatsApp:
                    </strong>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-xs font-semibold text-slate-800 hover:text-[#07579F] block mt-0.5"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 pt-3 border-t border-slate-100">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider">
                      Business Email:
                    </strong>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-xs font-semibold text-slate-800 hover:text-[#07579F] block mt-0.5 break-all"
                    >
                      {siteConfig.email}
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      (Configurable domain desk)
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl('Hello MrParthExim, I am reaching out to discuss an export inquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Location Map Representation */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
                  <Navigation className="w-4 h-4 text-[#FFD400]" />
                  <span>Geographic Center</span>
                </span>
                <span className="text-[11px] text-slate-400">Maharashtra, India</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <p className="font-bold text-white">Chhatrapati Sambhajinagar (Aurangabad)</p>
                <p className="text-slate-400 leading-relaxed">
                  Situated along major industrial & agricultural freight routes in central Maharashtra,
                  offering rapid road transport connectivity to Jawaharlal Nehru Port Trust (JNPT) / Nhava Sheva.
                </p>
                <div className="pt-2 text-[11px] text-[#FFD400]">
                  📍 Near The Golden City Hospital, Paithan Road
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
