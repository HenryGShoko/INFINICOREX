import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

const team: TeamMember[] = [
  {
    name: 'Henry Shoko',
    role: 'Founder & Lead Engineer',
    bio: 'Full-stack engineer with a decade of experience building production systems across fintech, logistics, and enterprise SaaS.',
    initials: 'HS',
  },
  {
    name: 'Tatenda Mhaka',
    role: 'Head of Product & Design',
    bio: 'Product designer who bridges business goals and user needs. Specialises in enterprise UX and design systems.',
    initials: 'TM',
  },
  {
    name: 'Kudzai Nyandoro',
    role: 'Infrastructure & Security Lead',
    bio: 'DevOps and security specialist managing cloud infrastructure, CI/CD pipelines, and incident response for mission-critical systems.',
    initials: 'KN',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind the platform"
          subtitle="A senior team that stays hands-on. No account managers, no handoffs — you work directly with the people building your product."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 text-center hover:border-brand-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-navy-950 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-white">{member.initials}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-0.5">{member.name}</h3>
              <p className="text-sm font-medium text-brand-700 mb-3">{member.role}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
