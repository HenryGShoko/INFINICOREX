import type { SiteSettings, HeroContent, WhyUsItem, ProcessStep, ConsultationSection } from '@/domain/site/types';
import type { ServiceCategory } from '@/domain/services/types';

export interface RawServiceCategory {
  _id: string;
  title: string;
  description?: string;
  iconKey?: string;
  items?: Array<{ _key: string; slug?: string; title: string; description?: string }>;
}

export interface RawWhyUsItem {
  _id: string;
  title: string;
  description: string;
  iconKey?: string;
}

export interface RawProcessStep {
  _id: string;
  title: string;
  description: string;
  order: number;
}

export function mapSiteSettings(raw: Record<string, string> | null): SiteSettings | null {
  if (!raw) return null;
  return {
    companyName: raw.companyName ?? '',
    logoText: raw.logoText ?? raw.companyName ?? '',
    primaryCtaLabel: raw.primaryCtaLabel ?? '',
    secondaryCtaLabel: raw.secondaryCtaLabel ?? '',
    contactEmail: raw.contactEmail ?? '',
    contactPhone: raw.contactPhone ?? '',
    footerContent: raw.footerContent ?? '',
  };
}

export function mapHero(raw: Record<string, string> | null): HeroContent | null {
  if (!raw) return null;
  return {
    headline: raw.headline ?? '',
    subheadline: raw.subheadline ?? '',
    primaryCtaLabel: raw.primaryCtaLabel ?? '',
    primaryCtaTarget: raw.primaryCtaTarget ?? '',
    secondaryCtaLabel: raw.secondaryCtaLabel ?? '',
    secondaryCtaTarget: raw.secondaryCtaTarget ?? '',
  };
}

export function mapServiceCategories(raw: RawServiceCategory[] | null): ServiceCategory[] | null {
  if (!raw || raw.length === 0) return null;
  return raw.map((cat) => ({
    id: cat._id,
    title: cat.title,
    description: cat.description,
    iconKey: cat.iconKey,
    items: (cat.items ?? []).map((item) => ({
      id: item._key,
      slug: item.slug ?? (item.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'untitled'),
      title: item.title,
      description: item.description,
    })),
  }));
}

export function mapWhyUsItems(raw: RawWhyUsItem[] | null): WhyUsItem[] | null {
  if (!raw || raw.length === 0) return null;
  return raw.map((item) => ({
    id: item._id,
    title: item.title,
    description: item.description,
    iconKey: item.iconKey,
  }));
}

export function mapProcessSteps(raw: RawProcessStep[] | null): ProcessStep[] | null {
  if (!raw || raw.length === 0) return null;
  return raw.map((step) => ({
    id: step._id,
    title: step.title,
    description: step.description,
    order: step.order,
  }));
}

export function mapConsultationSection(raw: Record<string, string> | null): ConsultationSection | null {
  if (!raw) return null;
  return {
    heading: raw.heading ?? '',
    supportingText: raw.supportingText ?? '',
    formIntroText: raw.formIntroText ?? '',
  };
}
