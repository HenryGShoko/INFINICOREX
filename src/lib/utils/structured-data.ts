import { siteConfig } from '@/config/site';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: 'info@infinicorex.co.za',
    telephone: '+27621496491',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Eastgate Complex, 6th Floor Red Bridge South, Robert Mugabe Rd',
      addressLocality: 'Harare',
      addressCountry: 'ZW',
    },
    areaServed: ['ZA', 'ZW'],
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
