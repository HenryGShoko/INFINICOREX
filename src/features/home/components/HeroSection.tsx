import { ArrowRight, Shield, Zap, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import type { HeroContent } from '@/domain/site/types';

interface HeroSectionProps {
  hero: HeroContent;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 to-navy-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-brand-500/[0.06] rounded-full blur-[80px] pointer-events-none" />

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-20 sm:py-24 lg:py-28">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.08] px-3.5 py-1.5 mb-7">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span className="text-sm font-medium text-white">
                Software Engineering & IT Services
              </span>
            </div>

            <h1 className="text-[2.25rem] leading-[1.12] font-bold tracking-[-0.03em] text-white sm:text-[2.75rem] lg:text-[3.25rem]">
              {hero.headline}
            </h1>

            <p className="mt-5 text-lg text-white leading-[1.6] max-w-[540px]">
              {hero.subheadline}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href={hero.primaryCtaTarget} variant="primary" size="lg">
                {hero.primaryCtaLabel}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href={hero.secondaryCtaTarget} variant="dark" size="lg">
                {hero.secondaryCtaLabel}
              </Button>
            </div>
          </div>

          {/* Right — proof cards */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-3.5 items-end">
            {[
              { icon: Shield, label: 'Production-grade engineering', detail: 'Systems built to perform under real conditions' },
              { icon: Zap, label: 'Full-stack delivery', detail: 'Strategy through deployment and support' },
              { icon: Clock, label: 'Ongoing partnership', detail: 'We stay engaged after launch' },
            ].map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="w-full max-w-[380px] flex items-start gap-4 rounded-xl border border-white/[0.12] bg-white/[0.06] p-5 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-400/15 text-brand-300 shrink-0">
                  <Icon className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-[13px] text-white/90 mt-0.5 leading-snug">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust bar — mobile fallback */}
        <div className="relative pb-6 lg:hidden">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['Production-grade systems', 'Full-stack delivery', 'Ongoing support'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand-400" />
                <span className="text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </section>
  );
}
