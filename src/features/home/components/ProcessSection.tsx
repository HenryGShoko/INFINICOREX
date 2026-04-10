import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { ProcessStep } from '@/domain/site/types';

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section id="process" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Process"
          title="How we work"
          subtitle="A structured process that keeps projects on track and delivers predictable results."
        />

        {/* Desktop: 3x2 grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-x-6 gap-y-8 lg:gap-x-8 lg:gap-y-10">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="flex items-start gap-4">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-brand-200 bg-white text-brand-600 text-sm font-bold shadow-[0_2px_8px_rgba(37,211,102,0.12)]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          {steps.map((step, index) => (
            <div key={step.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-brand-200 bg-white text-brand-600 text-sm font-bold shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                {index < steps.length - 1 && <div className="w-px flex-1 bg-slate-200 my-1.5" />}
              </div>
              <div className="pb-7">
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
