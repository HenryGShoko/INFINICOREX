import { siteConfig } from '@/config/site';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: 'ZA',
    serviceType: [
      'Software Development',
      'Web Application Development',
      'Mobile Application Development',
      'Software Testing',
      'IT Support',
      'Managed IT Services',
      'IT Security',
      'UX/UI Design',
    ],
  };
}
