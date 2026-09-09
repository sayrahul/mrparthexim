import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import { productsData } from '@/data/productsData';
import { getProductWhatsAppUrl, siteConfig } from '@/config/siteConfig';
import { CheckCircle2, MessageCircle, FileText, ArrowRight, ShieldCheck, MapPin, Package, Layers, Info } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | Sourcing & Export`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badge={product.category}
        title={product.name}
        description={product.shortDescription}
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Product Visuals & Quick Inquiry Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#D71925]" />
                  <span>Origin: {product.origin}</span>
                </span>
                <span className="text-[#FFD400] font-semibold">India Sourcing Base</span>
              </div>
            </div>

            {/* Direct Commercial CTAs */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-base text-slate-900">
                Inquire About This Product
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with MrParthExim’s trade desk to review batch availability, target
                specifications, and CIF/FOB pricing for your market.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={getProductWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <Link
                  href={`/quote?product=${encodeURIComponent(product.name)}`}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#D71925] hover:bg-[#b5131e] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Request Written Quotation</span>
                </Link>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 text-center">
                Initial confirmed destination: <strong>UAE</strong> • Custom RFQs welcomed
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Product Specifications & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                Product Overview & Sourcing Details
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.fullOverview}
              </p>

              {/* Verified Highlights */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-display font-semibold text-sm text-slate-800 mb-3 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#07579F]" />
                  <span>Key Quality & Sourcing Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Packaging, Variants & Export Suitability Table */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Export Technical Alignment
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Available Variants */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="font-semibold text-slate-800 flex items-center space-x-1.5">
                    <Layers className="w-4 h-4 text-[#07579F]" />
                    <span>Available Variants & Calibers:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {product.availableVariants.map((v, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-slate-700 text-xs font-medium"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sample Packaging */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="font-semibold text-slate-800 flex items-center space-x-1.5">
                    <Package className="w-4 h-4 text-[#D71925]" />
                    <span>Possible Packaging Options:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 text-xs pt-1">
                    {product.samplePackaging.map((pkg, i) => (
                      <li key={i}>{pkg}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-400 pt-1 italic">
                    * Customized retail branding or private label available based on batch volumes.
                  </p>
                </div>

                {/* Export Suitability */}
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-1">
                  <div className="font-semibold text-[#07579F]">Target Market Suitability:</div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {product.exportSuitability}
                  </p>
                </div>

                {/* Specifications Notice */}
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 flex items-start space-x-2">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Buyer Specification Note:</strong> {product.buyerNote} Exact laboratory assays, COA, phytosanitary clearance certificates, and batch moisture tests are available upon formal commercial request.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-6">
              Explore Related {product.category} Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full bg-slate-100">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-[#07579F] transition-colors line-clamp-1">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                      {rel.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
