import { Mail, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import type { ConsultationSection as ConsultationSectionType } from '@/domain/site/types';

interface ConsultationSectionProps {
  section: ConsultationSectionType;
  contactEmail: string;
}

export function ConsultationSection({ section, contactEmail }: ConsultationSectionProps) {
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
                <p className="text-base text-white leading-[1.6]">
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
                      <span className="text-sm text-white/95">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact alternatives */}
              <div className="relative mt-10 pt-6 border-t border-white/[0.1] space-y-3">
                <a
                  href="https://wa.me/27621496491?text=Hi%20INFINICOREX%2C%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:text-[#20bd5a] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-2 text-sm font-medium text-brand-300 hover:text-brand-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {contactEmail}
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
