import { pricingTiers, type PricingTier } from '@/lib/pricing-config';

// Re-export for backward compatibility
export type { PricingTier } from '@/lib/pricing-config';

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  nav: {
    links: [
      { id: 1, name: 'Home', href: '/' },
      // { id: 2, name: 'Use Cases', href: '/about' },
      { id: 2, name: 'Pricing', href: '/pricing' },
      // { id: 4, name: 'Tutorials', href: '/tutorials' },
    ],
  },
  hero: {
    description:
      'Kortix – open-source platform to build, manage and train your AI Workforce.',
  },
  cloudPricingItems: pricingTiers,
  footerLinks: [
    {
      title: 'Hellenic Technologies',
      links: [
        { id: 1, title: 'About', url: '/about' },
        { id: 2, title: 'Contact', url: 'mailto:info@hellenictechnologies.com' },
        { id: 3, title: 'Blog', url: '/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { id: 4, title: 'Documentation', url: 'https://github.com/hellenictechnologies' },
        { id: 5, title: 'Discord', url: '#' },
        { id: 6, title: 'GitHub', url: 'https://github.com/hellenictechnologies' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { id: 9, title: 'Privacy Policy', url: 'https://www.iubenda.com/privacy-policy/72788202' },
        { id: 10, title: 'Terms of Service', url: 'https://www.iubenda.com/privacy-policy/72788202/cookie-policy' },
        { id: 11, title: 'License Apache 2.0', url: '#' },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
