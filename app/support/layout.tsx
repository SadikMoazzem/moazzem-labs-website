import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

const title = `Support ${SITE.name} — Sadaqah Jariyah for Muslim Tech`;
const description =
  'Help keep MyLocalMasjid and SalahTimez free, ad-free and privacy-first. Every contribution is a sadaqah jariyah — ongoing charity that benefits Muslim communities across the UK.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/support' },
  openGraph: {
    url: `${SITE.url}/support`,
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
