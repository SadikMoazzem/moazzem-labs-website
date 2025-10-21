import Navigation from '@/components/Navigation';
import { ArrowLeft, ExternalLink, Smartphone, Globe, Users, Star, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function MyLocalMasjidCaseStudy() {
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
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/mylocalmasjid-logo.png"
                  alt="MyLocalMasjid Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold">
                    <span className="text-gradient">MyLocalMasjid</span>
                  </h1>
                  <p className="text-xl text-gray-300">
                    Complete Digital Ecosystem for Masajid
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A comprehensive digital ecosystem that empowers masajid to modernize their community engagement 
                while maintaining their values. Built with privacy-first principles and designed to serve rather than exploit.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.mylocalmasjid.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-purple text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </a>
                <a
                  href="https://apps.apple.com/gb/app/mylocalmasjid-app/id6743862734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect text-white px-6 py-3 rounded-full font-medium border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Download App
                </a>
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-[2.5rem] overflow-hidden relative">
                  <Image
                    src="/images/mylocalmasjid-app-preview.png"
                    alt="MyLocalMasjid App Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Components */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Complete Ecosystem</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile App</h3>
              <p className="text-gray-400 mb-4">iOS & Android apps with 5.0 App Store rating</p>
              <div className="text-sm text-gray-500">Features: Prayer times, Masjid finder, Qibla compass, Privacy-first design</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Masjid Websites</h3>
              <p className="text-gray-400 mb-4">Modern, SEO-optimized websites for each masjid</p>
              <div className="text-sm text-gray-500">Features: Prayer times, Events, Announcements, Contact info</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-16 h-16 gradient-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Admin Portal</h3>
              <p className="text-gray-400 mb-4">Complete management platform for masjid administrators</p>
              <div className="text-sm text-gray-500">Features: Prayer times management, Events, Announcements, Facilities</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Masjid Screens</h3>
              <p className="text-gray-400 mb-4">Digital displays for prayer halls and entrances</p>
              <div className="text-sm text-gray-500">Features: Prayer times, Announcements, Event schedules (Coming Soon)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Technology Stack</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-purple-400" />
                Frontend & Mobile
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'React', desc: 'Web application framework' },
                  { name: 'React Native', desc: 'Cross-platform mobile development' },
                  { name: 'iOS', desc: 'Native iOS app development' },
                  { name: 'Android', desc: 'Native Android app development' },
                  { name: 'PWA', desc: 'Progressive Web App capabilities' }
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-center">
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-gray-400 text-sm">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-400" />
                Backend & Infrastructure
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Python', desc: 'Backend development language' },
                  { name: 'Flask', desc: 'Web framework for APIs' },
                  { name: 'PostgreSQL', desc: 'Primary database system' },
                  { name: 'REST API', desc: 'API architecture' },
                  { name: 'Admin Dashboard', desc: 'Management interface' }
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-center">
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-gray-400 text-sm">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Metrics */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Impact & Metrics</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-400">Masajid Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">10K+</div>
              <div className="text-gray-400">Community Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">5.0</div>
              <div className="text-gray-400">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">UK</div>
              <div className="text-gray-400">Market Coverage</div>
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
