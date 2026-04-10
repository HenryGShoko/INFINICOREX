import { ShieldCheck, Layers, Lock, Headphones, Target } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { WhyUsItem } from '@/domain/site/types';

interface WhyUsSectionProps {
  items: WhyUsItem[];
}

const iconMap: Record<string, typeof ShieldCheck> = {
  'shield-check': ShieldCheck,
  layers: Layers,
  lock: Lock,
  headphones: Headphones,
  target: Target,
};

export function WhyUsSection({ items }: WhyUsSectionProps) {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why INFINICOREX"
          title="Built for businesses that take technology seriously."
          subtitle="We don't just write code. We deliver production systems — engineered, secured, and supported for the real world."
          dark
        />

        <div className="space-y-4 lg:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {items.slice(0, 3).map((item, idx) => (
              <WhyUsCard key={item.id} item={item} index={idx} />
            ))}
          </div>
          {items.length > 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 lg:max-w-[calc(66.67%-0.625rem)] lg:mx-auto">
              {items.slice(3).map((item, idx) => (
                <WhyUsCard key={item.id} item={item} index={idx + 3} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function WhyUsCard({ item, index }: { item: WhyUsItem; index: number }) {
  const Icon = iconMap[item.iconKey ?? ''] ?? ShieldCheck;

  return (
    <div className="rounded-2xl border border-white/[0.1] bg-white/[0.06] p-6 sm:p-7 transition-all duration-300 hover:bg-white/[0.1] hover:border-white/[0.18]">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-400/15 text-brand-300">
          <Icon className="w-[18px] h-[18px]" />
        </div>
        <span className="text-xs font-mono text-white/50">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="text-base font-semibold text-white mb-2">
        {item.title}
      </h3>
      <p className="text-sm text-white/95 leading-relaxed">{item.description}</p>
    </div>
  );
}
