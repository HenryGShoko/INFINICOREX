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
      <ClientLogos />
      <ServicesSection categories={serviceCategories} />
      <WhyUsSection items={whyUsItems} />
      <TestimonialsSection />
      <ProcessSection steps={processSteps} />
      <FaqSection />
      <ConsultationSection section={consultationSection} contactEmail={siteSettings.contactEmail} />
    </>
  );
}
