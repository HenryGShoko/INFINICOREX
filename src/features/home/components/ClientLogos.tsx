import Image from 'next/image';
import { Container } from '@/components/ui/Container';

const clients = [
  { name: 'Buy Zimbabwe', src: '/logos/buy-zimbabwe.jpg' },
  { name: 'PiqueSquid', src: '/logos/piquesquid.png' },
  { name: 'Seed Co', src: '/logos/seed-co.jpg' },
  { name: 'Airports Company of Zimbabwe', src: '/logos/acz.png' },
  { name: 'Padenga Holdings', src: '/logos/padenga.jpg' },
  { name: 'Air Zimbabwe', src: '/logos/air-zimbabwe.png' },
  { name: 'Simbisa Brands', src: '/logos/simbisa.jpg' },
  { name: 'Varun Beverages', src: '/logos/varun-beverages.png' },
  { name: 'Mammoth', src: '/logos/mammoth.jpg' },
  { name: 'UtengTech', src: '/logos/utengtech.png' },
  { name: 'POTRAZ', src: '/logos/potraz.jpg' },
  { name: 'WGA Liquor', src: '/logos/wga-liquor.png' },
  { name: 'World Federation of Advertisers', src: '/logos/wfa.png' },
  { name: 'EFF', src: '/logos/eff.png' },
  { name: 'OK Zimbabwe', src: '/logos/ok-zimbabwe.png' },
];

export function ClientLogos() {
  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.1em] text-slate-400 mb-10">
          Trusted by forward-thinking businesses
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-8 lg:gap-10 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="relative h-10 w-full max-w-[140px]"
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-contain"
                sizes="140px"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
