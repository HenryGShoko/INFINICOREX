import { Container } from '@/components/ui/Container';

const clients = [
  'TechCorp',
  'Meridian Finance',
  'Atlas Logistics',
  'Greenfield Energy',
  'Vertex Healthcare',
  'Savanna Digital',
];

export function ClientLogos() {
  return (
    <section className="py-12 lg:py-14 bg-white border-b border-slate-100">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.1em] text-slate-400 mb-8">
          Trusted by forward-thinking businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
          {clients.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-slate-300 hover:text-slate-400 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                <span className="text-[10px] font-bold text-slate-400">
                  {name.split(' ').map((w) => w[0]).join('')}
                </span>
              </div>
              <span className="text-sm font-semibold tracking-[-0.01em]">{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
