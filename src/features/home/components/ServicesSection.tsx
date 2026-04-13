import { Code, Palette, Server } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { ServiceCategory } from '@/domain/services/types';

interface ServicesSectionProps {
  categories: ServiceCategory[];
}

const iconMap: Record<string, typeof Code> = {
  code: Code,
  palette: Palette,
  server: Server,
};

export function ServicesSection({ categories }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Three disciplines. One integrated team."
          subtitle="We cover the full spectrum of digital delivery — from strategy and design to engineering and ongoing operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {categories.map((category, idx) => {
            const Icon = iconMap[category.iconKey ?? ''] ?? Code;

            return (
              <div
                key={category.id}
                className="group rounded-2xl border border-white/10 bg-navy-950 p-6 sm:p-7 transition-all duration-300 hover:border-white/25 hover:shadow-[0_16px_48px_rgba(0,122,204,0.4)] hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white ring-1 ring-white/20">
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {category.description && (
                  <p className="text-sm text-white/80 leading-relaxed mb-5">
                    {category.description}
                  </p>
                )}

                {/* Divider */}
                <div className="h-px bg-white/15 mb-4" />

                {/* Items */}
                <ul className="space-y-1">
                  {category.items.map((item, itemIdx) => (
                    <li key={item.id}>
                      <div className="flex items-center gap-2.5 py-1.5 text-sm text-white/90 group-hover:text-white transition-colors">
                        <span className="text-xs font-mono text-white/45 w-4 text-right shrink-0">
                          {String(itemIdx + 1).padStart(2, '0')}
                        </span>
                        <span>{item.title}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Category number */}
                <div className="mt-6 pt-4 border-t border-white/15">
                  <span className="text-xs font-mono text-white/50 tracking-wider">
                    {String(idx + 1).padStart(2, '0')} / {String(categories.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
