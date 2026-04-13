import type { SiteSettings, HeroContent, WhyUsItem, ProcessStep, ConsultationSection } from '@/domain/site/types';
import type { ServiceCategory } from '@/domain/services/types';

export const fallbackSiteSettings: SiteSettings = {
  companyName: 'INFINICOREX',
  logoText: 'INFINICOREX',
  primaryCtaLabel: 'Book a consultation',
  secondaryCtaLabel: 'View services',
  contactEmail: 'info@infinicorex.co.za',
  contactPhone: '+27 62 149 6491',
  footerContent: 'Building reliable technology for serious businesses.',
};

export const fallbackHero: HeroContent = {
  headline: 'Build, support, and scale your digital operations with confidence.',
  subheadline:
    'INFINICOREX delivers software engineering, product design, and managed IT services for businesses that need reliable technology and serious execution.',
  primaryCtaLabel: 'Book a consultation',
  primaryCtaTarget: '#consultation',
  secondaryCtaLabel: 'View services',
  secondaryCtaTarget: '#services',
};

export const fallbackServiceCategories: ServiceCategory[] = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description: 'Custom software built for reliability, performance, and long-term maintainability.',
    iconKey: 'code',
    items: [
      { id: 'software-dev', slug: 'software-development', title: 'Software Development', description: 'We build custom software systems tailored to your business — reliable, scalable, and engineered for production.' },
      { id: 'web-app-dev', slug: 'web-app-development', title: 'Web App Development', description: 'Modern web applications built with performance, security, and user experience as core priorities.' },
      { id: 'mobile-app-dev', slug: 'mobile-app-development', title: 'Mobile App Development', description: 'Native and cross-platform mobile applications designed for real-world use and long-term maintainability.' },
      { id: 'testing-qa', slug: 'software-testing-qa', title: 'Software Testing & QA', description: 'Comprehensive testing strategies that catch issues before your users do — from unit tests to end-to-end validation.' },
      { id: 'maintenance', slug: 'software-maintenance', title: 'Software Maintenance', description: 'Ongoing maintenance, updates, and performance monitoring to keep your systems running at their best.' },
    ],
  },
  {
    id: 'product-design',
    title: 'Product & Design',
    description: 'Strategic planning and user-centered design that drives product success.',
    iconKey: 'palette',
    items: [
      { id: 'planning-strategy', slug: 'planning-strategy', title: 'Planning & Strategy', description: 'We help you define product direction, technical architecture, and delivery roadmaps that align with your business goals.' },
      { id: 'ux-ui-design', slug: 'ux-ui-design', title: 'UX/UI Design', description: 'User-centered design that balances aesthetics with usability — interfaces that look sharp and work intuitively.' },
    ],
  },
  {
    id: 'it-services',
    title: 'IT Services',
    description: 'Comprehensive IT support, security, and infrastructure for your business operations.',
    iconKey: 'server',
    items: [
      { id: 'it-support', slug: 'it-support', title: 'IT Support', description: 'Responsive technical support for your team — resolving issues quickly so your business stays productive.' },
      { id: 'managed-it', slug: 'managed-it-services', title: 'Managed IT Services', description: 'Proactive IT management that keeps your infrastructure healthy, secure, and optimised without the overhead of an in-house team.' },
      { id: 'hardware-software', slug: 'hardware-software', title: 'Hardware & Software', description: 'Procurement, configuration, and lifecycle management for your business hardware and software assets.' },
      { id: 'business-internet', slug: 'business-internet', title: 'Business Internet', description: 'Reliable, high-performance internet connectivity solutions designed for business-critical operations.' },
      { id: 'microsoft-tools', slug: 'microsoft-tools', title: 'Microsoft Tools', description: 'Microsoft 365 deployment, administration, and optimisation — email, collaboration, and productivity tools managed properly.' },
      { id: 'it-security', slug: 'it-security', title: 'IT Security', description: 'Protect your business with layered security — from endpoint protection and firewalls to security audits and compliance.' },
      { id: 'hosting', slug: 'hosting', title: 'Hosting', description: 'Secure, performant hosting infrastructure managed by our team — so you can focus on your business, not your servers.' },
    ],
  },
];

export const fallbackWhyUsItems: WhyUsItem[] = [
  {
    id: 'production-grade',
    title: 'Production-Grade Engineering',
    description: 'We build systems that perform under real-world conditions — tested, monitored, and built to last.',
    iconKey: 'shield-check',
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Delivery',
    description: 'From strategy to deployment and beyond. One team, full accountability, no handoff gaps.',
    iconKey: 'layers',
  },
  {
    id: 'secure-reliable',
    title: 'Secure & Reliable Systems',
    description: 'Security and stability are built in from day one, not added as an afterthought.',
    iconKey: 'lock',
  },
  {
    id: 'post-launch',
    title: 'Support After Launch',
    description: 'We stay engaged after delivery — maintaining, monitoring, and improving your systems over time.',
    iconKey: 'headphones',
  },
  {
    id: 'business-aligned',
    title: 'Business-Aligned Execution',
    description: 'Technology decisions driven by your business goals, not by trends or unnecessary complexity.',
    iconKey: 'target',
  },
];

export const fallbackProcessSteps: ProcessStep[] = [
  { id: 'discover', title: 'Discover', description: 'We learn your business, goals, and constraints to define the right path forward.', order: 1 },
  { id: 'plan', title: 'Plan', description: 'We design the architecture, scope, and delivery roadmap with clear milestones.', order: 2 },
  { id: 'design', title: 'Design', description: 'We create user-centered interfaces and system designs that serve your objectives.', order: 3 },
  { id: 'build', title: 'Build', description: 'We develop clean, tested, production-ready software using modern engineering practices.', order: 4 },
  { id: 'test', title: 'Test', description: 'We validate quality, performance, and security before anything goes live.', order: 5 },
  { id: 'support', title: 'Support', description: 'We provide ongoing maintenance, monitoring, and improvement post-launch.', order: 6 },
];

export const fallbackConsultationSection: ConsultationSection = {
  heading: 'Let\'s discuss your project',
  supportingText: 'Tell us about your business needs and we\'ll show you how we can help. No obligation, no pressure — just a clear conversation about what\'s possible.',
  formIntroText: 'Fill in your details and we\'ll get back to you within one business day.',
};
