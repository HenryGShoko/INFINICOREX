import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import type { SiteSettings } from '@/domain/site/types';
import type { ServiceCategory } from '@/domain/services/types';

interface FooterProps {
  settings: SiteSettings;
  serviceCategories: ServiceCategory[];
}

export function Footer({ settings, serviceCategories }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        <div className="py-14 lg:py-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-12">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-4 lg:col-span-4 mb-4 lg:mb-0">
              <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white leading-none">IX</span>
                </div>
                <span className="text-sm font-bold tracking-[-0.02em] text-white">
                  {settings.logoText}
                </span>
              </Link>
              <p className="text-sm text-white/60 leading-relaxed max-w-[280px]">
                {settings.footerContent}
              </p>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">
                Company
              </p>
              <ul className="space-y-2.5">
                {['Home', 'Services', 'Why Us', 'Process', 'Contact'].map((label) => {
                  const id = label === 'Home' ? '' : label === 'Contact' ? 'consultation' : label.toLowerCase().replace(/\s/g, '-');
                  return (
                    <li key={label}>
                      <a
                        href={`#${id}`}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">
                Services
              </p>
              <ul className="space-y-2.5">
                {serviceCategories.map((cat) => (
                  <li key={cat.id}>
                    <a href="#services" className="text-sm text-white/70 hover:text-white transition-colors">
                      {cat.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">
                Contact
              </p>
              <ul className="space-y-2.5">
                {settings.contactEmail && (
                  <li>
                    <a href={`mailto:${settings.contactEmail}`} className="text-sm text-white/70 hover:text-white transition-colors">
                      {settings.contactEmail}
                    </a>
                  </li>
                )}
                {settings.contactPhone && (
                  <li>
                    <a href={`tel:${settings.contactPhone.replace(/\s/g, '')}`} className="text-sm text-white/70 hover:text-white transition-colors">
                      {settings.contactPhone}
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href="https://wa.me/27621496491?text=Hi%20INFINICOREX%2C%20I'd%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-[#25D366] transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/50">&copy; 2016 {settings.companyName}</p>
          <p className="text-sm text-white/50">Eastgate Complex, 6th Floor Red Bridge South, Robert Mugabe Rd, Harare, Zimbabwe</p>
        </div>
      </Container>
    </footer>
  );
}
