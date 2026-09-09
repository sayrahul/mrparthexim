import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  compact?: boolean;
}

export default function PageHero({
  badge,
  title,
  description,
  breadcrumbs = [],
  compact = false,
}: PageHeroProps) {
  return (
    <div className="relative bg-[#071A2B] text-white overflow-hidden py-14 sm:py-18 border-b border-slate-800">
      {/* Subtle decorative background gradient & grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#07579F_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#07579F]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D71925]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white flex items-center transition-colors">
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#FFD400] font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/60 border border-blue-700/60 text-[#FFD400] uppercase tracking-wider mb-4">
              {badge}
            </span>
          )}

          <h1 className={`font-display font-bold tracking-tight text-white ${compact ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
