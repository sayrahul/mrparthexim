'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Eye, Shield, CheckCircle } from 'lucide-react';
import { productsData, productCategories } from '@/data/productsData';
import { getProductWhatsAppUrl } from '@/config/siteConfig';
import SectionHeading from '@/components/common/SectionHeading';

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? productsData.slice(0, 6)
      : productsData.filter((p) => p.categorySlug === selectedCategory).slice(0, 6);

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Flexible Sourcing Network"
          title="Products With Global Potential"
          subtitle="We are building a flexible sourcing network across selected Indian product categories to serve evolving international buyer requirements. Specifications and packaging tailored on request."
        />

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 ${
              selectedCategory === 'all'
                ? 'bg-[#07579F] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Categories
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 ${
                selectedCategory === cat.slug
                  ? 'bg-[#07579F] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#071A2B]/85 backdrop-blur-xs text-[#FFD400] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {product.category}
                  </div>
                  {product.featured && (
                    <div className="absolute top-3 right-3 bg-[#D71925] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <div className="text-xs text-slate-400 mb-1 flex items-center space-x-1">
                    <span>Origin:</span>
                    <strong className="text-slate-600 font-medium">{product.origin}</strong>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#07579F] transition-colors mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Sample highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
                    {product.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-center space-x-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100/60 mt-2 flex items-center justify-between gap-2">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center justify-center py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#07579F] hover:bg-blue-50 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 mr-1" />
                  <span>View Details</span>
                </Link>

                <a
                  href={getProductWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center py-2 px-3.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  <span>Inquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-[#07579F] hover:bg-[#054580] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore Complete Product Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-slate-400 mt-2">
            Looking for something specific? Custom product sourcing is available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
