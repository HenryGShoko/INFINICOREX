import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  children,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} mb-16 lg:mb-20 ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
      {eyebrow && (
        <div className="mb-5">
          <span
            className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${
              dark
                ? 'bg-white/[0.08] text-white/90 ring-1 ring-white/[0.12]'
                : 'bg-brand-50 text-brand-700 ring-1 ring-brand-200/60'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-[2rem] font-bold tracking-[-0.025em] leading-[1.2] sm:text-[2.375rem] lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-[1.6] ${
            dark ? 'text-white' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
