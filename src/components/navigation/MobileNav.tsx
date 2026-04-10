'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { ServiceCategory } from '@/domain/services/types';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

interface MobileNavProps {
  categories: ServiceCategory[];
  ctaLabel: string;
}

export function MobileNav({ categories, ctaLabel }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
      >
        {isOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-black/10 backdrop-blur-[2px] z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <div
        className={`fixed left-0 right-0 top-[65px] bg-white z-50 border-b border-slate-200 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-250 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="px-5 py-5 space-y-0.5 max-h-[calc(100dvh-65px)] overflow-y-auto" aria-label="Mobile navigation">
          <a
            href="/#"
            onClick={(e) => { e.preventDefault(); setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-900 hover:bg-slate-50"
          >
            Home
          </a>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-slate-900 hover:bg-slate-50"
            >
              Services
              <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-250 ease-out ${servicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1 space-y-3 border-l border-slate-150 pl-4 pb-2">
                {categories.map((category) => (
                  <div key={category.id}>
                    <p className="text-xs font-semibold uppercase tracking-[0.06em] text-brand-700 mb-1.5 px-1">{category.title}</p>
                    <ul className="space-y-px">
                      {category.items.map((item) => (
                        <li key={item.id}>
                          <a
                            href="/#services"
                            onClick={(e) => { e.preventDefault(); setIsOpen(false); scrollTo('services'); }}
                            className="block rounded-md px-2.5 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {['Why Us', 'Process', 'Contact'].map((label) => {
            const id = label.toLowerCase().replace(/\s/g, '-');
            return (
              <a
                key={label}
                href={`/#${id}`}
                onClick={(e) => { e.preventDefault(); setIsOpen(false); scrollTo(id); }}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-900 hover:bg-slate-50"
              >
                {label}
              </a>
            );
          })}

          <div className="pt-4 px-1">
            <Button href="/#consultation" variant="primary" size="lg" className="w-full" onClick={(e: React.MouseEvent) => { e.preventDefault(); setIsOpen(false); scrollTo('consultation'); }}>
              {ctaLabel}
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
