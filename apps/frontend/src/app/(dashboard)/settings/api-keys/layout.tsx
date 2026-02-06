import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Keys | hellenicAI',
  description: 'Manage your API keys for programmatic access to hellenicAI',
  openGraph: {
    title: 'API Keys | hellenicAI',
    description: 'Manage your API keys for programmatic access to hellenicAI',
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
