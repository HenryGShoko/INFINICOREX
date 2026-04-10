'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Code, Palette, Server, ArrowRight } from 'lucide-react';
import type { ServiceCategory } from '@/domain/services/types';

interface ServicesDropdownProps {
  categories: ServiceCategory[];
}

const iconMap: Record<string, typeof Code> = {
  code: Code,
  palette: Palette,
  server: Server,
};

export function ServicesDropdown({ categories }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function toggle() {
    if (!isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const header = triggerRef.current.closest('header');
      const bottom = header ? header.getBoundingClientRect().bottom : rect.bottom;
      setCoords({ top: bottom + 4, left: rect.left + rect.width / 2 });
    }
    setIsOpen((v) => !v);
  }

  // Close on click outside or Escape
  useEffect(() => {
    if (!isOpen) return;

    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        triggerRef.current && !triggerRef.current.contains(target) &&
        panelRef.current && !panelRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="relative z-10 flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-150"
      >
        Services
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={panelRef}
            style={{
              position: 'fixed',
              top: coords.top,
              left: coords.left,
              transform: 'translateX(-50%)',
              zIndex: 9999,
            }}
            className="animate-[fadeIn_150ms_ease-out]"
          >
            <div className="w-[700px] rounded-xl bg-white border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.03)] p-1.5">
              <div className="grid grid-cols-3">
                {categories.map((category) => {
                  const Icon = iconMap[category.iconKey ?? ''] ?? Code;
                  return (
                    <div key={category.id} className="rounded-lg p-4 hover:bg-slate-50 transition-colors duration-100">
                      <a
                        href="/#services"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center gap-2.5 mb-3 group"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-100 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                          {category.title}
                        </span>
                      </a>

                      <ul className="space-y-0.5" role="none">
                        {category.items.map((item) => (
                          <li key={item.id} role="none">
                            <a
                              href="/#services"
                              role="menuitem"
                              onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(false);
                                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="group/item flex items-center justify-between rounded-md px-2.5 py-1.5 text-[13px] text-slate-600 hover:text-brand-700 hover:bg-brand-50/60 transition-colors duration-100"
                            >
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150 text-brand-500" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
