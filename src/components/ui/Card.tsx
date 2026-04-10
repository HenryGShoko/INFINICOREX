import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'outlined';
}

const variantStyles = {
  default: 'bg-white border border-slate-200/80',
  elevated: 'bg-white border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]',
  outlined: 'bg-transparent border border-slate-200',
};

export function Card({ children, className = '', hover = false, variant = 'default' }: CardProps) {
  return (
    <div
      className={`rounded-2xl p-7 sm:p-8 ${variantStyles[variant]} ${
        hover
          ? 'card-glow transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] hover:border-brand-200/60 hover:-translate-y-0.5'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
