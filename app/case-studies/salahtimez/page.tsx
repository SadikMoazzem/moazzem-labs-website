import Navigation from '@/components/Navigation';
import { ArrowLeft, ExternalLink, Globe, Code, Database, Zap } from 'lucide-react';
import Link from 'next/link';

export default function SalahTimezCaseStudy() {
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
                <span className="text-gradient">SalahTimez</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                The Foundation of Moazzem Labs
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                The project that started it all - a simple, fast prayer times Progressive Web App for London communities. 
                Built with speed and simplicity in mind, this became the foundation for understanding community needs 
                and developing comprehensive digital solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.salahtimez.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-blue text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </a>
                <a
                  href="https://github.com/sadikmoazzem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect text-white px-6 py-3 rounded-full font-medium border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-[500px] bg-gray-900 rounded-2xl p-4 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl overflow-hidden relative">
                  <div className="p-6 h-full flex flex-col">
                    <div className="text-white text-center mb-6">
                      <h4 className="text-xl font-bold">SalahTimez</h4>
                      <p className="text-sm opacity-80">Prayer Times for London</p>
                    </div>
                    
                    <div className="flex-1 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="space-y-3">
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-white text-sm font-medium">Fajr</div>
                          <div className="text-white/80 text-xs">5:30 AM</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-white text-sm font-medium">Dhuhr</div>
                          <div className="text-white/80 text-xs">12:15 PM</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-white text-sm font-medium">Asr</div>
                          <div className="text-white/80 text-xs">3:45 PM</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-white text-sm font-medium">Maghrib</div>
                          <div className="text-white/80 text-xs">6:20 PM</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="text-white text-sm font-medium">Isha</div>
                          <div className="text-white/80 text-xs">8:00 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">The Story</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">How It Started</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  In 2016, I noticed that accessing prayer times quickly wasn&apos;t well-served in the market. 
                  Most solutions were either too complex or too slow. I wanted to create something simple, 
                  fast, and focused on the core need.
                </p>
                <p>
                  <strong className="text-white">SalahTimez</strong> was born as a Progressive Web App (PWA) 
                  rather than a full mobile app. This decision was crucial - PWAs offer the speed and 
                  simplicity of web apps with the convenience of mobile apps.
                </p>
                <p>
                  The focus was on <strong className="text-white">speed and simplicity</strong>. 
                  Users could access prayer times instantly without downloads, updates, or complex interfaces. 
                  Just open the browser and get the information you need.
                </p>
              </div>
            </div>
            
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <div className="text-white font-medium">Speed Matters</div>
                    <div className="text-gray-400 text-sm">Users want instant access to prayer times</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <div className="text-white font-medium">PWA Advantage</div>
                    <div className="text-gray-400 text-sm">No app store barriers, instant updates</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <div className="text-white font-medium">Community Needs</div>
                    <div className="text-gray-400 text-sm">Understanding real user requirements</div>
                  </div>
                </div>
              </div>
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
                <Globe className="w-6 h-6 text-blue-400" />
                Frontend
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'React', desc: 'Frontend framework for dynamic UI' },
                  { name: 'Redux', desc: 'State management for complex features' },
                  { name: 'PWA', desc: 'Progressive Web App capabilities' },
                  { name: 'SASS', desc: 'CSS preprocessing for styling' }
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
                <Database className="w-6 h-6 text-green-400" />
                Backend
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Python', desc: 'Backend development language' },
                  { name: 'Flask', desc: 'Lightweight web framework' },
                  { name: 'PostgreSQL', desc: 'Reliable database system' },
                  { name: 'REST API', desc: 'Clean API architecture' }
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

      {/* Evolution */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Evolution to MyLocalMasjid</span>
          </h2>
          
          <div className="glass-effect rounded-3xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">SalahTimez (2016)</h3>
                <p className="text-gray-400">Simple prayer times PWA for London</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Learning Phase (2016-2020)</h3>
                <p className="text-gray-400">Understanding community needs and technology requirements</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 gradient-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">MyLocalMasjid (2020)</h3>
                <p className="text-gray-400">Complete digital ecosystem for masajid</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                SalahTimez taught us that communities need more than just prayer times. They need comprehensive 
                digital solutions that respect their values and serve their actual needs. This understanding 
                became the foundation for MyLocalMasjid&apos;s complete ecosystem.
              </p>
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
