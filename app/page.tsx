import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProject from '@/components/FeaturedProject';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { SITE } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: '/' },
  openGraph: {
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData data={breadcrumbSchema([{ name: 'Home', path: '/' }])} />
      <Navigation />

      <Hero />

      <FeaturedProject />

      {/* Other work teaser */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-subtle mb-2">
                More work
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
                Where it started
              </h2>
            </div>
            <Link href="/work" className="btn-ghost hidden sm:inline-flex">
              All work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <Link
            href="/work/salahtimez"
            className="surface-card block p-6 md:p-8 group hover:-translate-y-0.5 transition-transform"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center">
                <Image
                  src="/images/salahtimez_logo.png"
                  alt="SalahTimez logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink">SalahTimez</h3>
                <p className="text-sm text-ink-muted">PWA · 2016 →</p>
              </div>
            </div>
            <p className="text-ink-muted leading-relaxed mb-3">
              The Progressive Web App that started Moazzem Labs. Fast, ad-free,
              no-download prayer times — the lessons learned here became MyLocalMasjid.
            </p>
            <span className="btn-ghost">
              Read the case study <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto surface-cream rounded-3xl p-8 md:p-12 watermark-calligraphy">
          <p className="text-xs uppercase tracking-wide text-mustard mb-4">
            About the studio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight mb-4">
            Technology as <span className="text-mustard">sadaqah jariyah</span>.
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed mb-6 max-w-2xl">
            Moazzem Labs is one engineer in London building privacy-first products
            for Muslim communities. No ads. No tracking. Free for the people who
            use them, every prayer time and masjid discovered counted toward an
            ongoing reward — InshāʾAllāh — for everyone who supports the work.
          </p>
          <Link href="/about" className="btn-secondary">
            Read more about the studio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight mb-4">
            Have a project, or want to support?
          </h2>
          <p className="text-lg text-ink-muted max-w-2xl mx-auto mb-8">
            Whether it&apos;s a masjid that needs a website, a product brief, or a
            sadaqah jariyah you&apos;d like to make recurring — say hello.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/support" className="btn-secondary">
              Support the work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
