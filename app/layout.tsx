import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FloatingDonationBar from '@/components/FloatingDonationBar';
import StructuredData from '@/components/StructuredData';
import { SITE } from '@/lib/site';
import { organizationSchema, personSchema } from '@/lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    'Moazzem Labs',
    'Sadik Moazzem',
    'MyLocalMasjid',
    'SalahTimez',
    'prayer times app UK',
    'masjid app UK',
    'Muslim community technology',
    'privacy-first apps',
    'sadaqah jariyah',
    'ethical software development',
  ],
  authors: [{ name: SITE.founder.name, url: SITE.url }],
  creator: SITE.founder.name,
  publisher: SITE.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    creator: '@MoazzemLabs',
    site: '@MoazzemLabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/moazzem_labs_logo-ico.ico',
    apple: '/images/moazzem-labs-logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0E8A78' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0F12' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <StructuredData data={[organizationSchema(), personSchema()]} />
        {children}
        <FloatingDonationBar />
      </body>
    </html>
  );
}
