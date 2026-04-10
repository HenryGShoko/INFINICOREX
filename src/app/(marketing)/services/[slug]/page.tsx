import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getHomePageData } from '@/features/home/queries/get-home-data';
import type { Metadata } from 'next';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

async function getServiceBySlug(slug: string) {
  const { serviceCategories } = await getHomePageData();

  for (const category of serviceCategories) {
    const service = category.items.find((item) => item.slug === slug);
    if (service) {
      return { service, category, allCategories: serviceCategories };
    }
  }
  return null;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getServiceBySlug(slug);
  if (!result) return { title: 'Service Not Found' };

  return {
    title: `${result.service.title} | INFINICOREX`,
    description: result.service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const result = await getServiceBySlug(slug);

  if (!result) notFound();

  const { service, category, allCategories } = result;

  // Get other services from the same category (excluding current)
  const relatedServices = category.items.filter((item) => item.slug !== slug);

  // Get other categories
  const otherCategories = allCategories.filter((cat) => cat.id !== category.id);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />

        <Container>
          <div className="relative py-16 sm:py-20 lg:py-24">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/50 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <span>/</span>
              <span className="text-white/70">{category.title}</span>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-300 mb-4">
              {category.title}
            </p>
            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold tracking-[-0.03em] text-white leading-[1.15] max-w-2xl">
              {service.title}
            </h1>
            {service.description && (
              <p className="mt-5 text-lg text-white/80 leading-[1.6] max-w-xl">
                {service.description}
              </p>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="#consultation" variant="primary" size="lg">
                Book a consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/" variant="dark" size="lg">
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Related services from same category */}
      {relatedServices.length > 0 && (
        <section className="py-20 lg:py-24 bg-white">
          <Container>
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-slate-900 mb-8">
              Other {category.title} services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((item) => (
                <a
                  key={item.id}
                  href={`/services/${item.slug}`}
                  className="group rounded-2xl border border-slate-200 p-6 hover:border-brand-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
                >
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-brand-700 transition-colors mb-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  )}
                </a>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Other categories */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-slate-900 mb-8">
            Explore more services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherCategories.map((cat) => (
              <div key={cat.id} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                <h3 className="text-base font-semibold text-slate-900 mb-3">{cat.title}</h3>
                {cat.description && (
                  <p className="text-sm text-slate-500 mb-4">{cat.description}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <a
                      key={item.id}
                      href={`/services/${item.slug}`}
                      className="inline-flex items-center rounded-lg bg-slate-50 px-3 py-1.5 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
