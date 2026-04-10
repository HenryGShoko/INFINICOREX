import { sanityFetch } from '@/lib/sanity/fetch';
import {
  siteSettingsQuery,
  heroQuery,
  serviceCategoriesQuery,
  whyUsItemsQuery,
  processStepsQuery,
  consultationSectionQuery,
} from '../../../../sanity/queries/home';
import {
  mapSiteSettings,
  mapHero,
  mapServiceCategories,
  mapWhyUsItems,
  mapProcessSteps,
  mapConsultationSection,
  type RawServiceCategory,
  type RawWhyUsItem,
  type RawProcessStep,
} from '../mappers/map-cms-data';
import {
  fallbackSiteSettings,
  fallbackHero,
  fallbackServiceCategories,
  fallbackWhyUsItems,
  fallbackProcessSteps,
  fallbackConsultationSection,
} from '@/lib/constants/fallback-data';
import type { SiteSettings, HeroContent, WhyUsItem, ProcessStep, ConsultationSection } from '@/domain/site/types';
import type { ServiceCategory } from '@/domain/services/types';

export interface HomePageData {
  siteSettings: SiteSettings;
  hero: HeroContent;
  serviceCategories: ServiceCategory[];
  whyUsItems: WhyUsItem[];
  processSteps: ProcessStep[];
  consultationSection: ConsultationSection;
}

export async function getHomePageData(): Promise<HomePageData> {
  const [rawSettings, rawHero, rawCategories, rawWhyUs, rawSteps, rawConsultation] =
    await Promise.all([
      sanityFetch(siteSettingsQuery),
      sanityFetch(heroQuery),
      sanityFetch(serviceCategoriesQuery),
      sanityFetch(whyUsItemsQuery),
      sanityFetch(processStepsQuery),
      sanityFetch(consultationSectionQuery),
    ]);

  return {
    siteSettings: mapSiteSettings(rawSettings as Record<string, string> | null) ?? fallbackSiteSettings,
    hero: mapHero(rawHero as Record<string, string> | null) ?? fallbackHero,
    serviceCategories: mapServiceCategories(rawCategories as RawServiceCategory[] | null) ?? fallbackServiceCategories,
    whyUsItems: mapWhyUsItems(rawWhyUs as RawWhyUsItem[] | null) ?? fallbackWhyUsItems,
    processSteps: mapProcessSteps(rawSteps as RawProcessStep[] | null) ?? fallbackProcessSteps,
    consultationSection: mapConsultationSection(rawConsultation as Record<string, string> | null) ?? fallbackConsultationSection,
  };
}
