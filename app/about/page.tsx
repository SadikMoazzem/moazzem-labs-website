import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Shield, Users, Code } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { SITE } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/structured-data';

const title = 'About Moazzem Labs — Technology as Sadaqah Jariyah';
const description =
  'Moazzem Labs is a London-based studio building privacy-first technology for Muslim communities. We treat every product as sadaqah jariyah — continuous charity — built to serve, never exploit.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    url: `${SITE.url}/about`,
    title,
    description,
  },
  twitter: { title, description },
};

const principles = [
  {
    icon: Shield,
    title: 'Privacy-First',
    description:
      'No ads, no tracking, no selling data. Your trust is an amanah we will not betray.',
  },
  {
    icon: Heart,
    title: 'Community-Focused',
    description:
      'Every product solves a real need a real community asked for — never invented demand.',
  },
  {
    icon: Code,
    title: 'Built to Last',
    description:
      'Production-grade engineering, modern stacks, accessible by default. Free does not mean fragile.',
  },
  {
    icon: Users,
    title: 'In Service',
    description:
      'Technology that empowers and uplifts, framed around the principle of sadaqah jariyah.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <Navigation />

      <section className="pt-32 pb-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
            About the studio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Technology as</span>
            <br />
            <span className="text-white">Sadaqah Jariyah.</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Moazzem Labs is a London-based studio building privacy-first products for
            Muslim communities. We believe technology, when built with integrity, can
            be a form of continuous charity — benefiting both the people who use it
            and the people who build it, long after the code is shipped.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto glass-effect rounded-3xl p-8 md:p-12">
          <blockquote className="text-2xl md:text-3xl text-gray-200 italic leading-relaxed mb-6">
            &ldquo;When a person dies, all their deeds end except three: a
            continuing charity (sadaqah jariyah), beneficial knowledge, or a
            righteous child who prays for them.&rdquo;
          </blockquote>
          <p className="text-gray-400">Prophet Muhammad ﷺ — reported in Sahih Muslim</p>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Every prayer time delivered, every masjid discovered, every line of code
            written with care — we hope each of these counts as sadaqah jariyah for
            us and for the community that supports the work. That is the frame we
            build inside.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-gradient">How we work</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="glass-effect rounded-2xl p-6 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center shrink-0">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">The product family</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-12">
            From SalahTimez&apos;s simple beginnings to MyLocalMasjid&apos;s complete
            ecosystem — each project sharpens the next.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/work/mylocalmasjid"
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/mylocalmasjid-logo.png"
                  alt="MyLocalMasjid logo"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">MyLocalMasjid</h3>
                  <p className="text-sm text-gray-400">Complete ecosystem · 2020 →</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                iOS and Android apps, masjid websites, an admin portal and backend
                serving 500+ masajid across the UK.
              </p>
              <span className="inline-flex items-center gap-2 text-purple-300 group-hover:text-white transition-colors">
                Read the case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/work/salahtimez"
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/salahtimez_logo.png"
                  alt="SalahTimez logo"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">SalahTimez</h3>
                  <p className="text-sm text-gray-400">PWA · 2016 →</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Progressive Web App that started it all. Fast, ad-free,
                no-download prayer times for London communities.
              </p>
              <span className="inline-flex items-center gap-2 text-purple-300 group-hover:text-white transition-colors">
                Read the case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto glass-effect rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the founder
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Moazzem Labs is the work of one person — Sadik Moazzem, a London-based
            software engineer with 5+ years in product-focused SaaS development.
          </p>
          <Link
            href="/about/sadik"
            className="inline-flex items-center gap-2 gradient-purple text-white px-6 py-3 rounded-full font-medium hover:scale-[1.02] transition-transform"
          >
            About Sadik
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
