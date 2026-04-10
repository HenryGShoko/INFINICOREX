export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  companyName,
  logoText,
  primaryCtaLabel,
  secondaryCtaLabel,
  contactEmail,
  contactPhone,
  footerContent
}`;

export const heroQuery = `*[_type == "hero"][0]{
  headline,
  subheadline,
  primaryCtaLabel,
  primaryCtaTarget,
  secondaryCtaLabel,
  secondaryCtaTarget
}`;

export const serviceCategoriesQuery = `*[_type == "serviceCategory"] | order(order asc){
  _id,
  title,
  description,
  iconKey,
  items[]{
    _key,
    "slug": slug.current,
    title,
    description
  }
}`;

export const whyUsItemsQuery = `*[_type == "whyUsItem"] | order(order asc){
  _id,
  title,
  description,
  iconKey
}`;

export const processStepsQuery = `*[_type == "processStep"] | order(order asc){
  _id,
  title,
  description,
  order
}`;

export const consultationSectionQuery = `*[_type == "consultationSection"][0]{
  heading,
  supportingText,
  formIntroText
}`;
