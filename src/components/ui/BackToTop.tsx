'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:text-slate-900 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-200 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
