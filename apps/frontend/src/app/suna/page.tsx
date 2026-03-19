import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'hellenicAI | hellenicAI - Open Source AI Worker',
  description: 'hellenicAI is the same powerful open source AI assistant and generalist AI worker you know and love, now with a new name and bigger vision.',
  keywords: [
    'hellenicAI',
    'AI assistant',
    'open source AI',
    'generalist AI worker',
    'AI worker',
    'autonomous AI',
  ],
  openGraph: {
    title: 'hellenicAI',
    description: 'hellenicAI - Same powerful open source AI worker, new name.',
    type: 'website',
    url: 'https://workforce.hellenicai.com/',
    siteName: 'hellenicAI',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'hellenicAI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hellenicAI',
    description: 'hellenicAI - Same powerful open source AI worker, new name.',
    images: ['/banner.png'],
  },
  alternates: {
    canonical: 'https://workforce.hellenicai.com/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SunaPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'hellenicAI',
            alternateName: ['hellenicAI'],
            url: 'https://workforce.hellenicai.com/',
            logo: 'https://workforce.hellenicai.com/favicon.png',
            sameAs: [
              'https://github.com/hellenictechnologies',
            ],
            description:
              'hellenicAI is an open source generalist AI worker that helps you accomplish real-world tasks through natural conversation.',
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://workforce.hellenicai.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'hellenicAI',
                item: 'https://workforce.hellenicai.com/suna',
              },
            ],
          }),
        }}
      />

      <main className="w-full relative overflow-hidden bg-background">
        <div className="relative flex flex-col items-center w-full px-4 sm:px-6">
          {/* Hero Section with Logo */}
          <div className="relative z-10 pt-16 sm:pt-24 md:pt-32 mx-auto h-full w-full max-w-6xl flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 pt-8 sm:pt-20 max-w-4xl mx-auto pb-10">
              {/* hellenicAI Symbol with grain texture */}
              <div className="relative mb-8 sm:mb-12" style={{ width: '80px', height: '80px' }}>
                <Image
                  src="/ht-symbol.png"
                  alt="Hellenic AI"
                  fill
                  className="object-contain dark:invert"
                  priority
                  style={{ mixBlendMode: 'normal' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'url(/grain-texture.png)',
                    backgroundSize: '100px 100px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'multiply',
                    opacity: 0.6,
                    maskImage: 'url(/ht-symbol.png)',
                    WebkitMaskImage: 'url(/ht-symbol.png)',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                />
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter text-balance text-center">
                Hellenic AI
              </h1>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-3xl mx-auto px-2 sm:px-0 pb-16">
              <Link
                href="/"
                className="flex h-12 items-center justify-center w-full sm:w-auto px-8 text-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm font-medium"
              >
                Go to Hellenic AI
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
