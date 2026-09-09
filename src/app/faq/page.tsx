'use client';

import React, { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FinalCTASection from '@/components/home/FinalCTASection';
import { faqData } from '@/data/faqData';
import { ChevronDown, HelpCircle, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/config/siteConfig';

export default function FAQPage() {
  const [openIds, setOpenIds] = useState<string[]>(['source-products-not-listed', 'target-countries']);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badge="Clarifications & Answers"
        title="Frequently Asked Questions"
        description="Clear, transparent answers about our export capabilities, sourcing approach, UAE market focus, packaging options, and commercial quotation process."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
              activeCategory === 'all'
                ? 'bg-[#07579F] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Questions
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('sourcing')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
              activeCategory === 'sourcing'
                ? 'bg-[#07579F] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Product Sourcing
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('quotation')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
              activeCategory === 'quotation'
                ? 'bg-[#07579F] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Quotations & Pricing
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('shipping')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
              activeCategory === 'shipping'
                ? 'bg-[#07579F] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Shipping & Process
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('general')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
              activeCategory === 'general'
                ? 'bg-[#07579F] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Company & Contact
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#07579F] cursor-pointer"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#07579F] text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#07579F] flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl text-slate-900">
            Have a Specific Sourcing Question?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Our trade team in Chhatrapati Sambhajinagar is available to discuss your specifications,
            custom packaging needs, or target pricing.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/quote"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#D71925] hover:bg-[#b5131e] text-white font-semibold text-xs transition-colors shadow-xs"
            >
              Request a Quote
            </Link>
            <a
              href={getWhatsAppUrl('Hello MrParthExim, I have a question regarding product sourcing.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <FinalCTASection />
    </div>
  );
}
