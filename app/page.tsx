import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MoazzemLabsVision from '@/components/MoazzemLabsVision';
import FeaturedProject from '@/components/FeaturedProject';
import About from '@/components/About';
import ProjectsGrid from '@/components/ProjectsGrid';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <MoazzemLabsVision />
      <FeaturedProject />
      <About />
      <ProjectsGrid />
      <Contact />
    </main>
  );
}