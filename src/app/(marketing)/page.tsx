import { getHomePageData } from '@/features/home/queries/get-home-data';
import { HeroSection } from '@/features/home/components/HeroSection';
import { ClientLogos } from '@/features/home/components/ClientLogos';
import { ServicesSection } from '@/features/home/components/ServicesSection';
import { WhyUsSection } from '@/features/home/components/WhyUsSection';
import { TestimonialsSection } from '@/features/home/components/TestimonialsSection';
import { ProcessSection } from '@/features/home/components/ProcessSection';
import { FaqSection } from '@/features/home/components/FaqSection';
import { ConsultationSection } from '@/features/home/components/ConsultationSection';

export default async function HomePage() {
  const { siteSettings, hero, serviceCategories, whyUsItems, processSteps, consultationSection } =
    await getHomePageData();

  return (
    <>
      <HeroSection hero={hero} />
      <div className="divider-to-light" />
      <ClientLogos />
      <ServicesSection categories={serviceCategories} />
      <div className="divider-to-dark" />
      <WhyUsSection items={whyUsItems} />
      <div className="divider-to-slate" />
      <TestimonialsSection />
      <ProcessSection steps={processSteps} />
      <FaqSection />
      <div className="divider-slate-to-white" />
      <ConsultationSection section={consultationSection} contactEmail={siteSettings.contactEmail} />
    </>
  );
}
