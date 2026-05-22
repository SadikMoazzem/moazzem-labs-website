import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import StructuredData from '@/components/StructuredData';
import { SITE } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/structured-data';

const title = 'Contact Moazzem Labs';
const description =
  'Get in touch with Moazzem Labs to discuss MyLocalMasjid, SalahTimez or a new project. Email info@moazzemlabs.com or send a message through the form — typically a reply within 24 hours.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    url: `${SITE.url}/contact`,
    title,
    description,
  },
  twitter: { title, description },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <Navigation />

      <section className="pt-32 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
            Get in touch
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Let&apos;s talk</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Have a project, a masjid that needs a website, or want to support the work?
            Drop a message — replies typically within 24 hours.
          </p>
        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}
