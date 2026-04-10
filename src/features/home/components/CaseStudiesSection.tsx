import { ArrowRight, TrendingUp, Clock, Shield } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface CaseStudy {
  title: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
  resultIcon: typeof TrendingUp;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Logistics platform rebuild',
    client: 'Atlas Logistics',
    problem: 'Legacy booking system couldn\'t handle growing order volume, causing daily outages during peak hours.',
    solution: 'Rebuilt the platform with a modern stack, real-time tracking, and auto-scaling infrastructure.',
    result: '10x throughput, zero downtime in 12 months',
    resultIcon: TrendingUp,
    tags: ['Web App', 'Cloud Infrastructure', 'API Design'],
  },
  {
    title: 'Fintech compliance portal',
    client: 'Meridian Finance',
    problem: 'Manual compliance workflows took 3 weeks per audit cycle and were error-prone.',
    solution: 'Built an automated compliance portal with document management, audit trails, and real-time reporting.',
    result: 'Audit cycle reduced from 3 weeks to 2 days',
    resultIcon: Clock,
    tags: ['Software Development', 'UX/UI Design', 'Security'],
  },
  {
    title: 'IT security overhaul',
    client: 'Greenfield Energy',
    problem: 'No centralised IT security. Endpoints unmanaged, no incident response plan, outdated firewalls.',
    solution: 'Deployed endpoint protection, SIEM monitoring, staff training, and a 24/7 incident response process.',
    result: 'Blocked ransomware attack within 6 months',
    resultIcon: Shield,
    tags: ['IT Security', 'Managed IT', 'Training'],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Real problems. Measurable results."
          subtitle="A look at how we've helped businesses solve complex technical challenges."
        />

        <div className="space-y-5">
          {caseStudies.map((study) => {
            const ResultIcon = study.resultIcon;
            return (
              <div
                key={study.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 hover:border-brand-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                  {/* Left — problem & solution */}
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.06em] text-brand-700">
                        {study.client}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>

                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.06em] text-slate-400 mb-1">Challenge</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{study.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.06em] text-slate-400 mb-1">Solution</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {study.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — result */}
                  <div className="lg:col-span-4 flex items-center">
                    <div className="w-full rounded-xl bg-brand-50 border border-brand-100 p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <ResultIcon className="w-4 h-4 text-brand-600" />
                        <span className="text-xs font-semibold uppercase tracking-[0.06em] text-brand-700">Result</span>
                      </div>
                      <p className="text-base font-semibold text-slate-900 leading-snug">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
