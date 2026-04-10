export interface SiteSettings {
  companyName: string;
  logoText: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  contactEmail: string;
  contactPhone: string;
  footerContent: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCtaLabel: string;
  primaryCtaTarget: string;
  secondaryCtaLabel: string;
  secondaryCtaTarget: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconKey?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  order: number;
}

export interface ConsultationSection {
  heading: string;
  supportingText: string;
  formIntroText: string;
}
