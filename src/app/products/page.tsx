'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { productsData, productCategories } from '@/data/productsData';
import { getProductWhatsAppUrl } from '@/config/siteConfig';
import { Search, Filter, Eye, MessageCircle, ArrowRight, CheckCircle2, SlidersHorizontal, PackageSearch } from 'lucide-react';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.categorySlug === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badge="Export Catalog"
        title="Products With Global Potential"
        description="We are building a flexible sourcing network across selected Indian product categories to serve evolving international buyer requirements. Selected products available through our verified sourcing network; custom specifications on request."
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* Sourcing Disclaimer Banner */}
      <div className="bg-blue-50 border-b border-blue-200 py-3.5 px-4 text-center text-xs text-blue-900 font-medium">
        <span>💡 <strong>Flexible Catalog:</strong> These demonstrate product categories we can explore based on buyer requirements. Have a custom specification? </span>
        <Link href="/quote" className="underline font-bold text-[#07579F] hover:text-blue-950 ml-1">
          Submit your RFQ here →
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Category Filter Toolbar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs mb-10 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products (e.g. Red Chilli, Cotton, Cashew)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#07579F] focus:ring-2 focus:ring-blue-100"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs text-slate-500 flex items-center space-x-1.5 self-start md:self-auto">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#07579F]" />
              <span>
                Showing <strong>{filteredProducts.length}</strong> of{' '}
                <strong>{productsData.length}</strong> demonstration items
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                selectedCategory === 'all'
                  ? 'bg-[#07579F] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                  selectedCategory === cat.slug
                    ? 'bg-[#07579F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center space-y-4">
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <PackageSearch className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-800">
              No products match your criteria
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We did not find any demo items matching &quot;{searchQuery}&quot;. We can source custom
              products directly from Indian suppliers.
            </p>
            <div className="pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-[#D71925] text-white text-xs font-bold shadow-xs hover:bg-[#b5131e]"
              >
                <span>Submit Custom Sourcing Request</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#071A2B]/90 backdrop-blur-xs text-[#FFD400] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {product.category}
                    </div>
                    {product.featured && (
                      <div className="absolute top-3 right-3 bg-[#D71925] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Body Details */}
                  <div className="p-6">
                    <div className="text-xs text-slate-400 mb-1 flex items-center space-x-1">
                      <span>Origin:</span>
                      <strong className="text-slate-600 font-medium">{product.origin}</strong>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#07579F] transition-colors mb-2">
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {product.shortDescription}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
                      {product.highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-0 border-t border-slate-100/80 mt-2 flex items-center justify-between gap-2">
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
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Sourcing Callout Footer */}
        <div className="mt-16 bg-[#071A2B] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#07579F_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="relative max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#FFD400] uppercase tracking-wider">
              Need Something Specific?
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Bespoke Product Sourcing & Private Labeling
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              If your required spice grade, cotton yarn count, packaging dimension, or agro commodity
              is not listed here, our sourcing desk in Maharashtra can identify and coordinate
              verified suppliers tailored to your bill of materials.
            </p>
            <div className="pt-3">
              <Link
                href="/quote"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#D71925] hover:bg-[#b5131e] text-white font-bold text-sm transition-colors shadow-lg"
              >
                <span>Submit Custom Sourcing Request</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
