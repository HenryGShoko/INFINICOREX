import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ServicesDropdown } from '@/components/navigation/ServicesDropdown';
import { MobileNav } from '@/components/navigation/MobileNav';
import type { SiteSettings } from '@/domain/site/types';
import type { ServiceCategory } from '@/domain/services/types';

interface HeaderProps {
  settings: SiteSettings;
  serviceCategories: ServiceCategory[];
}

const navLinkClass =
  'relative z-10 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-150';

export function Header({ settings, serviceCategories }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-2xl border-b border-slate-100">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center shrink-0" aria-label={settings.logoText}>
            <Image
              src="/logo-v3.png"
              alt={settings.logoText}
              width={600}
              height={92}
              priority
              sizes="(min-width: 1024px) 380px, 280px"
              className="h-10 w-auto lg:h-12"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            <Link href="/" className={navLinkClass}>Home</Link>
            <ServicesDropdown categories={serviceCategories} />
            <Link href="/#why-us" className={navLinkClass}>Why Us</Link>
            <Link href="/#process" className={navLinkClass}>Process</Link>
            <Link href="/#consultation" className={navLinkClass}>Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0 relative z-10">
            <Button href="/#consultation" variant="primary" size="sm">
              {settings.primaryCtaLabel}
            </Button>
          </div>

          {/* Mobile */}
          <MobileNav categories={serviceCategories} ctaLabel={settings.primaryCtaLabel} />
        </div>
      </Container>
    </header>
  );
}
