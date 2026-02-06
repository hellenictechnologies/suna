import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Worker Conversation | hellenicAI',
  description: 'Interactive Worker conversation powered by hellenicAI',
  openGraph: {
    title: 'Worker Conversation | hellenicAI',
    description: 'Interactive Worker conversation powered by hellenicAI',
    type: 'website',
  },
};

export default async function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
