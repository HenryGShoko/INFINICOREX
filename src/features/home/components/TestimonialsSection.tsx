import { Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'INFINICOREX rebuilt our entire booking platform in under three months. The system handles 10x the traffic of our previous solution with zero downtime. Their engineering team is genuinely world-class.',
    name: 'David Moyo',
    role: 'CTO',
    company: 'Atlas Logistics',
  },
  {
    quote: "We needed a partner who understood both the technical and business side. INFINICOREX didn't just build what we asked for — they challenged our assumptions and delivered something far better.",
    name: 'Sarah Ndlovu',
    role: 'Head of Digital',
    company: 'Meridian Finance',
  },
  {
    quote: 'Their managed IT services saved us from a ransomware incident that would have cost us weeks of downtime. Proactive, responsive, and they actually explain things in plain language.',
    name: 'James Chigumba',
    role: 'Operations Director',
    company: 'Greenfield Energy',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          subtitle="Real feedback from businesses we've partnered with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-navy-950 flex items-center justify-center shrink-0">
                  <span className="text-[11px] font-bold text-white">
                    {t.name.split(' ').map((w) => w[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
