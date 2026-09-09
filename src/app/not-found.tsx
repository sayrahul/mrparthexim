import React from 'react';
import Link from 'next/link';
import { Compass, Home, Package, ArrowRight, Anchor } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
        
        {/* Maritime / Trade Icon */}
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#07579F] flex items-center justify-center mx-auto shadow-inner">
          <Compass className="w-8 h-8 animate-spin duration-3000" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-[#D71925] tracking-widest uppercase">
            404 • Destination Not Located
          </span>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
            Looks like this route didn&apos;t reach its destination.
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page or cargo shipment coordinates you are seeking may have been repositioned or
            does not exist on our trade network.
          </p>
        </div>

        {/* Quick Route Recovery Links */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#07579F] hover:bg-[#054580] text-white text-xs font-bold transition-colors shadow-xs"
          >
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
          >
            <Package className="w-4 h-4 mr-1.5" />
            <span>Explore Products</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
          <span>Need assistance? </span>
          <Link href="/contact" className="text-[#07579F] hover:underline font-semibold">
            Contact MrParthExim Trade Desk
          </Link>
        </div>

      </div>
    </div>
  );
}
