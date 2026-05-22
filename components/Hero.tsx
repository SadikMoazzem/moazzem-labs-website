'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('featured-project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden gradient-cosmic"
    >
      {/* Decorative soft orbs — kept static, very low opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full opacity-50"
          style={{
            background:
              'radial-gradient(closest-side, rgba(14,138,120,0.18), transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-32 -left-24 w-[26rem] h-[26rem] rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(closest-side, rgba(138,122,42,0.16), transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <span className="chip mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Innovation with Integrity
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] mb-6 text-ink"
            style={{ letterSpacing: '-0.04em' }}
          >
            Privacy-first technology
            <br />
            for the <span className="text-primary">Ummah</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-ink-muted max-w-3xl leading-relaxed mb-10"
          >
            Moazzem Labs is a London studio building apps, websites and admin tools
            for Muslim communities. From SalahTimez to MyLocalMasjid — every project
            is sadaqah jariyah, built to serve, never exploit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/work" className="btn-primary">
              See the work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="btn-secondary">
              About the studio
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToNext}
          aria-label="Scroll to next section"
          className="text-ink-muted hover:text-primary transition-colors duration-300 animate-bounce motion-reduce:animate-none"
        >
          <ChevronDown className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
