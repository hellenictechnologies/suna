import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Suna is now Kortix | Kortix Suna - Open Source AI Worker',
  description: 'Suna has rebranded to Kortix. Kortix (formerly Suna) is the same powerful open source AI assistant and generalist AI worker you know and love, now with a new name and bigger vision.',
  keywords: [
    'Suna',
    'Kortix Suna',
    'Suna AI',
    'Suna assistant',
    'Suna.so',
    'where is Suna',
    'Kortix',
    'Suna rebrand',
    'Suna is now Kortix',
    'AI assistant',
    'open source AI',
    'generalist AI worker',
    'AI worker',
    'autonomous AI',
  ],
  openGraph: {
    title: 'Suna is now Kortix',
    description: 'Kortix (formerly Suna) - Same powerful open source AI worker, new name.',
    type: 'website',
    url: 'https://www.kortix.com/suna',
    siteName: 'Kortix',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Kortix - Formerly Suna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suna is now Kortix',
    description: 'Kortix (formerly Suna) - Same powerful open source AI worker, new name.',
    images: ['/banner.png'],
  },
  alternates: {
    canonical: 'https://www.kortix.com/suna',
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
            name: 'Kortix',
            alternateName: ['Suna', 'Kortix Suna', 'Suna AI'],
            url: 'https://www.kortix.com',
            logo: 'https://www.kortix.com/favicon.png',
            sameAs: [
              'https://github.com/kortix-ai',
              'https://x.com/kortix',
              'https://linkedin.com/company/kortix',
            ],
            description:
              'Kortix (formerly known as Suna) is an open source generalist AI worker that helps you accomplish real-world tasks through natural conversation.',
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
                item: 'https://www.kortix.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Suna is now Kortix',
                item: 'https://www.kortix.com/suna',
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
              {/* Kortix Symbol with grain texture */}
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
