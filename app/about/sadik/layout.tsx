import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

const title = `About Sadik Moazzem — Founder of ${SITE.name}`;
const description =
  'Sadik Moazzem is a London-based software engineer with 5+ years building SaaS products in React and Python. Founder of Moazzem Labs — privacy-first technology for Muslim communities.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about/sadik' },
  openGraph: {
    url: `${SITE.url}/about/sadik`,
    title,
    description,
    type: 'profile',
  },
  twitter: {
    title,
    description,
  },
};

export default function AboutSadikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
