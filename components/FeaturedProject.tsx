'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Smartphone, Globe, Users, Star } from 'lucide-react';
import MyLocalMasjidAppPreview from './MyLocalMasjidAppPreview';

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-wide text-ink-subtle mb-2">
            Featured work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
            MyLocalMasjid — a complete digital ecosystem for masajid
          </h2>
        </motion.div>

        <div className="surface-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left: light narrative side */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/mylocalmasjid-logo.png"
                  alt="MyLocalMasjid logo"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-2xl font-bold text-ink">MyLocalMasjid</h3>
                  <p className="text-sm text-ink-muted">
                    Apps, websites, admin portal, backend
                  </p>
                </div>
              </div>

              <p className="text-lg text-ink-muted leading-relaxed mb-6">
                Empowers masajid to modernise community engagement while keeping
                their values. Privacy-first, ad-free, free forever for the
                community — built to serve, never exploit.
              </p>

              {/* Ecosystem chips */}
              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                <div className="flex items-center gap-2 px-3 py-2 bg-primary-soft rounded-xl">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-sm text-ink">iOS & Android · 5.0★</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-primary-soft rounded-xl">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm text-ink">500+ masjid websites</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-primary-soft rounded-xl">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-ink">Admin portal</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-primary-soft rounded-xl">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm text-ink">Digital displays</span>
                </div>
              </div>

              {/* Metric strip */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <Metric value="500+" label="Masajid served" />
                <Metric value="10K+" label="Community" />
                <Metric value="5.0★" label="App Store" />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/work/mylocalmasjid" className="btn-primary">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.mylocalmasjid.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Visit site <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: dark product canvas */}
            <div className="dark-canvas surface-dark relative overflow-hidden p-6 md:p-10 lg:rounded-none">
              <MyLocalMasjidAppPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Metric = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-2xl font-bold text-primary">{value}</div>
    <div className="text-xs text-ink-subtle">{label}</div>
  </div>
);

export default FeaturedProject;
