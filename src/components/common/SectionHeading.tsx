import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: 'light' | 'dark';
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  theme = 'light',
}: SectionHeadingProps) {
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 ${
            isDark
              ? 'bg-blue-900/60 text-[#FFD400] border border-blue-700/60'
              : 'bg-blue-50 text-[#07579F] border border-blue-100'
          }`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
