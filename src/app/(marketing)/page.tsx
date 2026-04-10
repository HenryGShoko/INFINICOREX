import { getHomePageData } from '@/features/home/queries/get-home-data';
import { HeroSection } from '@/features/home/components/HeroSection';
import { ServicesSection } from '@/features/home/components/ServicesSection';
import { WhyUsSection } from '@/features/home/components/WhyUsSection';
import { ProcessSection } from '@/features/home/components/ProcessSection';
import { ConsultationSection } from '@/features/home/components/ConsultationSection';

export default async function HomePage() {
  const { hero, serviceCategories, whyUsItems, processSteps, consultationSection } =
    await getHomePageData();

  return (
    <>
      <HeroSection hero={hero} />
      <ServicesSection categories={serviceCategories} />
      <WhyUsSection items={whyUsItems} />
      <ProcessSection steps={processSteps} />
      <ConsultationSection section={consultationSection} />
    </>
  );
}
