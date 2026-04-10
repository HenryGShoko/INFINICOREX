'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const WHATSAPP_NUMBER = '27621496491';
const WHATSAPP_MESSAGE = "Hi INFINICOREX, I'd like to discuss a project.";

function getWhatsAppUrl() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200 animate-[fadeIn_300ms_ease-out]">
          <p className="text-sm text-slate-700 font-medium pr-5">
            Chat with us on WhatsApp
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-0.5 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
