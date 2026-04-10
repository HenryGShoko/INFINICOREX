import { Mail, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import type { ConsultationSection as ConsultationSectionType } from '@/domain/site/types';

interface ConsultationSectionProps {
  section: ConsultationSectionType;
}

export function ConsultationSection({ section }: ConsultationSectionProps) {
  return (
    <section id="consultation" className="py-24 lg:py-32 bg-white relative">
      <Container>
        <div className="rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left panel — VS Code blue */}
            <div className="lg:col-span-5 bg-navy-950 bg-grid-pattern p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/[0.05] rounded-full blur-[80px] pointer-events-none" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-300 mb-4">
                  Get started
                </p>
                <h2 className="text-[1.75rem] sm:text-[2rem] font-bold tracking-[-0.025em] text-white leading-[1.2] mb-4">
                  {section.heading}
                </h2>
                <p className="text-base text-white/80 leading-[1.6]">
                  {section.supportingText}
                </p>

                {/* Trust points */}
                <div className="mt-8 space-y-3">
                  {[
                    'Response within one business day',
                    'No-obligation consultation',
                    'Direct access to engineering leadership',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                      <span className="text-sm text-white/70">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="relative mt-10 pt-6 border-t border-white/[0.1]">
                <p className="text-sm text-white/50 mb-1.5">Prefer email?</p>
                <a
                  href="mailto:info@infinicorex.co.za"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-300 hover:text-brand-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@infinicorex.co.za
                </a>
              </div>
            </div>

            {/* Right panel — form */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white">
              <ConsultationForm introText={section.formIntroText} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
