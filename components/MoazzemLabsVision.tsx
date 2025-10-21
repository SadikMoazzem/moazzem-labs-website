'use client';

import { motion } from 'framer-motion';
import { Globe, Heart, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const MoazzemLabsVision = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What <span className="text-gradient">Moazzem Labs</span> Means to Me
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Moazzem Labs isn&apos;t just a company name—it&apos;s my personal mission to build technology that serves communities with integrity. 
            It represents the intersection of my professional expertise and my passion for creating solutions that genuinely help people, 
            not exploit them.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">The Journey</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                It all started with <strong className="text-white">SalahTimez</strong> in 2017—a simple prayer times app for London&apos;s Muslim community. 
                This wasn&apos;t just a project; it was my first step into understanding how technology could serve communities with respect and purpose.
              </p>
              <p>
                Through SalahTimez, I discovered that communities needed more than just functional tools—they needed solutions built with their values in mind. 
                This understanding became the foundation for everything that followed.
              </p>
              <p>
                <strong className="text-white">MyLocalMasjid</strong> represents the evolution of this vision—a comprehensive digital ecosystem that includes mobile apps, 
                websites, admin portals, and backend systems, all designed to serve masajid and their communities with integrity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Core Principles</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-red-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Community-First Design</h4>
                  <p className="text-gray-400 text-sm">Every solution is built with the community&apos;s actual needs and values at the center</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                      <h4 className="text-white font-semibold">Professional Excellence</h4>
                  <p className="text-gray-400 text-sm">Leveraging 5+ years of SaaS development experience to build robust, scalable solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Privacy-First Approach</h4>
                  <p className="text-gray-400 text-sm">Protecting user data and respecting individual privacy in every solution</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Projects Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">My Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* SalahTimez */}
            <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 gradient-blue rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">SalahTimez</h4>
                  <p className="text-gray-400">The Foundation (2017)</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                A simple, fast prayer times PWA for London&apos;s Muslim community. This project taught me that communities need 
                technology that respects their values and serves their actual needs, not just functional requirements.
              </p>
              <Link 
                href="/case-studies/salahtimez"
                className="gradient-blue text-white px-4 py-2 rounded-lg font-medium inline-block hover:scale-105 transition-transform"
              >
                Learn More
              </Link>
            </div>

            {/* MyLocalMasjid */}
            <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center">
                  <Image
                    src="/images/mylocalmasjid-logo.png"
                    alt="MyLocalMasjid Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">MyLocalMasjid</h4>
                  <p className="text-gray-400">Complete Ecosystem (2020-Present)</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                A comprehensive digital ecosystem serving 500+ masajid across the UK. This represents the full vision of 
                Moazzem Labs—technology that serves communities with integrity, privacy-first design, and genuine value.
              </p>
              <Link 
                href="/case-studies/mylocalmasjid"
                className="gradient-purple text-white px-4 py-2 rounded-lg font-medium inline-block hover:scale-105 transition-transform"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoazzemLabsVision;
