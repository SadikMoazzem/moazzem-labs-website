import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Smartphone, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { SITE } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/structured-data';

const title = 'Work — Projects by Moazzem Labs';
const description =
  'Privacy-first products for Muslim communities — including MyLocalMasjid (iOS, Android and web) and SalahTimez. Every project built to serve, never exploit.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/work' },
  openGraph: {
    url: `${SITE.url}/work`,
    title,
    description,
  },
  twitter: { title, description },
};

type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  status: 'Live' | 'In Development';
  highlights: { icon: typeof Globe; label: string }[];
  tech: string[];
  logo: string;
  href: string;
};

const projects: Project[] = [
  {
    slug: 'mylocalmasjid',
    name: 'MyLocalMasjid',
    tagline: 'Complete digital ecosystem for masajid',
    description:
      'iOS and Android apps, masjid websites, an admin portal and backend system. Serving 500+ masajid and 10,000+ community members across the UK with a 5.0 App Store rating.',
    year: '2020 — Present',
    status: 'Live',
    highlights: [
      { icon: Smartphone, label: 'Mobile · iOS & Android' },
      { icon: Globe, label: 'Web · 500+ masjid sites' },
      { icon: Users, label: 'Admin portal & backend' },
    ],
    tech: ['React Native', 'React', 'Python', 'Flask', 'PostgreSQL', 'iOS', 'Android'],
    logo: '/images/mylocalmasjid-logo.png',
    href: '/work/mylocalmasjid',
  },
  {
    slug: 'salahtimez',
    name: 'SalahTimez',
    tagline: 'Fast, simple prayer-times PWA for London',
    description:
      'The Progressive Web App that started Moazzem Labs in 2016. No downloads, no tracking — just instant access to salah times. The lessons learned here became the foundation for MyLocalMasjid.',
    year: '2016 — Present',
    status: 'Live',
    highlights: [
      { icon: Globe, label: 'Progressive Web App' },
      { icon: Smartphone, label: 'Install on any device' },
    ],
    tech: ['React', 'Redux', 'Python', 'Flask', 'PostgreSQL'],
    logo: '/images/salahtimez_logo.png',
    href: '/work/salahtimez',
  },
];

export default function WorkIndex() {
  return (
    <main className="min-h-screen bg-black text-white">
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
        ])}
      />
      <Navigation />

      <section className="pt-32 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
            Selected work
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Building for the Ummah</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Every Moazzem Labs project is built to serve, not exploit — privacy-first,
            ad-free, and free for the community. Here&apos;s what we&apos;ve shipped.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="glass-effect rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-shadow"
            >
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {project.name}
                      </h2>
                      <p className="text-gray-400">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 gradient-purple text-white px-6 py-3 rounded-full font-medium hover:scale-[1.02] transition-transform"
                  >
                    Read the case study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <aside className="space-y-4">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      Year
                    </div>
                    <div className="text-white font-medium">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      Status
                    </div>
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                      Highlights
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((h) => (
                        <li
                          key={h.label}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <h.icon className="w-4 h-4 text-purple-400" />
                          {h.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </article>
          ))}

          <div className="glass-effect rounded-3xl p-8 text-center border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-2">More on the way</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-4">
              Future projects continue the same principle: technology as sadaqah jariyah —
              built for communities, never against them.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
