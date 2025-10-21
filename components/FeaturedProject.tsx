'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, Users, Star } from 'lucide-react';
import Image from 'next/image';

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Featured Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our flagship platform connecting masajid with their communities through modern technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Image
                        src="/images/mylocalmasjid-logo.png"
                        alt="MyLocalMasjid Logo"
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                      <div>
                        <h3 className="text-3xl font-bold text-white">MyLocalMasjid</h3>
                        <p className="text-gray-400">Complete Digital Ecosystem for Masajid</p>
                      </div>
                    </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our featured project - a comprehensive digital ecosystem that empowers masajid to modernize 
                their community engagement while maintaining their values. Built with privacy-first principles 
                and designed to serve rather than exploit.
              </p>

              {/* MyLocalMasjid Ecosystem */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Complete Ecosystem Components</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
                    <Smartphone className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Mobile App</div>
                      <div className="text-sm text-gray-400">iOS & Android with 5.0 rating</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">Masjid Websites</div>
                      <div className="text-sm text-gray-400">Modern, SEO-optimized sites</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
                    <Users className="w-5 h-5 text-pink-400" />
                    <div>
                      <div className="text-white font-medium">Admin Portal</div>
                      <div className="text-sm text-gray-400">Complete management platform</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-white font-medium">Masjid Screens</div>
                      <div className="text-sm text-gray-400">Digital displays (Coming Soon)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-gray-400">Masajid Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">10K+</div>
                  <div className="text-sm text-gray-400">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">UK</div>
                  <div className="text-sm text-gray-400">Market Coverage</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-3">Complete Technology Stack</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Frontend & Mobile</div>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'React Native', 'iOS', 'Android', 'PWA'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Backend & Infrastructure</div>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Flask', 'PostgreSQL', 'REST API', 'Admin Dashboard'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/case-studies/mylocalmasjid"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient-purple text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Case Study
                </motion.a>
                <motion.a
                  href="https://www.mylocalmasjid.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-effect text-white px-6 py-3 rounded-full font-medium border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Visit Website
                </motion.a>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Phone Mockup */}
                <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-[2.5rem] overflow-hidden relative">
                    {/* App Interface Screenshot */}
                    <Image
                      src="/images/mylocalmasjid-app-preview.png"
                      alt="MyLocalMasjid App Screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 gradient-pink rounded-full opacity-60 blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 gradient-blue rounded-full opacity-60 blur-sm"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
