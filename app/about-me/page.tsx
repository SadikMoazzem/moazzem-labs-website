import Navigation from '@/components/Navigation';
import { ArrowLeft, Code, Globe, Smartphone, Database, Heart, Shield, Users, Award, MapPin, Mail, Github, Twitter, Linkedin, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Sadik Moazzem</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Founder & Developer at Moazzem Labs
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A passionate developer dedicated to building technology that serves communities with integrity. 
                From creating SalahTimez in 2016 to building the comprehensive MyLocalMasjid ecosystem, 
                I believe in innovation that respects values and genuinely helps people.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:sadik@moazzemlabs.com"
                  className="gradient-purple text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="https://github.com/sadikmoazzem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect text-white px-6 py-3 rounded-full font-medium border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>
            
            {/* Profile Visual */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-[500px] bg-gray-900 rounded-2xl p-4 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl overflow-hidden relative flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <User className="w-16 h-16" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Sadik Moazzem</h3>
                    <p className="text-sm opacity-80">Developer & Founder</p>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">London, UK</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Award className="w-4 h-4" />
                        <span className="text-sm">Est. 2016</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">My Journey</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">From Idea to Impact</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  My journey started in 2016 with a simple observation: accessing prayer times quickly 
                  wasn't well-served in the market. This led to creating <strong className="text-white">SalahTimez</strong> - 
                  a Progressive Web App that prioritized speed and simplicity.
                </p>
                <p>
                  Through SalahTimez, I discovered the real needs of Muslim communities - not just prayer times, 
                  but comprehensive digital solutions that respect their values. This understanding became 
                  the foundation for <strong className="text-white">MyLocalMasjid</strong>.
                </p>
                <p>
                  Today, MyLocalMasjid serves hundreds of masajid across the UK with a complete digital ecosystem 
                  including mobile apps, websites, admin portals, and backend systems - all built with 
                  privacy-first principles and community-centric design.
                </p>
              </div>
            </div>
            
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">2016 - SalahTimez Launch</div>
                    <div className="text-gray-400 text-sm">Created fast, simple prayer times PWA</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">2020 - MyLocalMasjid Launch</div>
                    <div className="text-gray-400 text-sm">Complete digital ecosystem for masajid</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">2024 - 500+ Masajid Served</div>
                    <div className="text-gray-400 text-sm">Expanding across UK communities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile Development</h3>
              <p className="text-gray-400 mb-4">iOS, Android, React Native, PWA</p>
              <div className="text-sm text-gray-500">Cross-platform mobile apps with native performance</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
              <p className="text-gray-400 mb-4">React, Next.js, TypeScript, Tailwind</p>
              <div className="text-sm text-gray-500">Modern, responsive web applications</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-16 h-16 gradient-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
              <p className="text-gray-400 mb-4">Python, Flask, PostgreSQL, REST APIs</p>
              <div className="text-sm text-gray-500">Scalable backend systems and APIs</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Full-Stack</h3>
              <p className="text-gray-400 mb-4">End-to-end development</p>
              <div className="text-sm text-gray-500">Complete solutions from concept to deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Values & Philosophy</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">Privacy-First Design</h4>
                    <p className="text-gray-300">
                      Protecting user data and respecting individual privacy is fundamental to everything I build.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-red-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">Community-Centric</h4>
                    <p className="text-gray-300">
                      Technology should genuinely serve and empower communities, prioritizing their needs above all.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">Integrity & Transparency</h4>
                    <p className="text-gray-300">
                      Building with honesty, ensuring transparent practices and ethical development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Development Philosophy</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Innovation with Integrity</h4>
                  <p className="text-gray-300">
                    Pushing technological boundaries while maintaining ethical standards and community values.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Simplicity First</h4>
                  <p className="text-gray-300">
                    Complex problems deserve simple, elegant solutions that users can understand and trust.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Long-term Thinking</h4>
                  <p className="text-gray-300">
                    Building sustainable solutions that grow with communities and adapt to their evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          
          <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:sadik@moazzemlabs.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    sadik@moazzemlabs.com
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5" />
                    London, United Kingdom
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Follow My Work</h3>
                <div className="space-y-4">
                  <a
                    href="https://github.com/sadikmoazzem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com/SadikMozzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    Twitter
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sadikmoazzem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© {new Date().getFullYear()} Moazzem Labs. All rights reserved.</p>
          <p className="text-sm text-gray-500">Innovation with Integrity</p>
        </div>
      </section>
    </main>
  );
}
