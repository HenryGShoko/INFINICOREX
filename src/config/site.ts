export const siteConfig = {
  name: 'INFINICOREX',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.infinicorex.co.za',
  description:
    'INFINICOREX delivers software engineering, product design, and managed IT services for businesses that need reliable technology and serious execution.',
  ogImage: '/og-image.png',
} as const;
