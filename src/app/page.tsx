import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import IndiaGlobalRoute from '@/components/home/IndiaGlobalRoute';
import ProductShowcase from '@/components/home/ProductShowcase';
import WhyMrParthExim from '@/components/home/WhyMrParthExim';
import HowItWorksPreview from '@/components/home/HowItWorksPreview';
import TargetMarketsSection from '@/components/home/TargetMarketsSection';
import HomeBlogPreview from '@/components/home/HomeBlogPreview';
import FinalCTASection from '@/components/home/FinalCTASection';
import { siteConfig } from '@/config/siteConfig';
import { ShieldCheck, MapPin, Globe, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. High-Impact Hero */}
      <HeroSection />

      {/* 2. Brand Positioning Banner (India -> Global) */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[#07579F]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Brand Idea</span>
              </div>
              <p className="font-display font-bold text-slate-900 text-sm">
                &quot;{siteConfig.tagline}&quot;
              </p>
              <p className="text-xs text-slate-500">Transparent trade covenants</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[#D71925]">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Origin Base</span>
              </div>
              <p className="font-display font-bold text-slate-900 text-sm">
                Maharashtra, India
              </p>
              <p className="text-xs text-slate-500">Chhatrapati Sambhajinagar</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[#07579F]">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Confirmed Target</span>
              </div>
              <p className="font-display font-bold text-slate-900 text-sm">
                United Arab Emirates (UAE)
              </p>
              <p className="text-xs text-slate-500">3-5 days direct maritime transit</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-amber-500">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Enterprise Stage</span>
              </div>
              <p className="font-display font-bold text-slate-900 text-sm">
                Upcoming Export Business
              </p>
              <p className="text-xs text-slate-500">Building verified supply corridors</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products With Global Potential */}
      <ProductShowcase />

      {/* 4. Signature Interaction: India -> UAE -> Global Trade Route */}
      <IndiaGlobalRoute />

      {/* 5. Why Choose MrParthExim */}
      <WhyMrParthExim />

      {/* 6. How We Work (6-step export methodology) */}
      <HowItWorksPreview />

      {/* 7. Markets We Aim to Serve */}
      <TargetMarketsSection />

      {/* 8. Educational Blog Insights */}
      <HomeBlogPreview />

      {/* 9. Final High-Conversion Quote & WhatsApp CTA */}
      <FinalCTASection />
    </div>
  );
}
