import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProject from '@/components/FeaturedProject';
import About from '@/components/About';
import ProjectsGrid from '@/components/ProjectsGrid';
import Contact from '@/components/Contact';
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
    <main className="min-h-screen bg-black text-white">
      <StructuredData
        data={breadcrumbSchema([{ name: 'Home', path: '/' }])}
      />
      <Navigation />
      <Hero />
      <FeaturedProject />
      <About />
      <ProjectsGrid />
      <Contact />
    </main>
  );
}