import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Keys | HellenicAI',
  description: 'Manage your API keys for programmatic access to HellenicAI',
  openGraph: {
    title: 'API Keys | HellenicAI',
    description: 'Manage your API keys for programmatic access to HellenicAI',
    type: 'website',
  },
};

export default async function APIKeysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
