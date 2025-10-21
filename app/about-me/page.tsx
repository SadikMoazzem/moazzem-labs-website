'use client';

import Navigation from '@/components/Navigation';
import { ArrowLeft, Code, Calendar, GraduationCap, Trophy, MapPin, Mail, Github, Twitter, Linkedin, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Main Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Calendar },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'awards', label: 'Awards', icon: Trophy }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
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
              <p className="text-lg text-gray-400 mb-4">Welcome to my World</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hi, I&apos;m <span className="text-gradient">Sadik Moazzem</span>
              </h1>
              <h2 className="text-2xl text-gray-300 mb-8">Full Stack Developer</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I am Sadik Moazzem, an experienced Software Engineer with 5+ years in product-focused development, 
                specializing in building and evolving SaaS applications using React and Python. I&apos;m passionate 
                about continuous learning and building community-focused solutions that serve real needs with integrity.
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
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/sadik-profile.jpg"
                        alt="Sadik Moazzem Profile"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                        <User className="w-16 h-16" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Sadik Moazzem</h3>
                    <p className="text-sm opacity-80">Full Stack Developer</p>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">London, UK</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">5+ Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="glass-effect rounded-3xl p-8">
            <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
              I am Sadik Moazzem, an experienced Software Engineer with 5+ years in product-focused development, 
              specializing in building and evolving SaaS applications using React and Python. I founded Moazzem Labs 
              to build technology that serves communities with integrity, combining my professional expertise with 
              my passion for community-focused solutions.
            </p>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'gradient-purple text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === 'skills' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { name: 'React', level: 'Expert' },
                      { name: 'TypeScript', level: 'Expert' },
                      { name: 'Python', level: 'Expert' },
                      { name: 'AI/ML', level: 'Advanced' },
                      { name: 'Redux', level: 'Advanced' },
                      { name: 'Pydantic', level: 'Advanced' },
                      { name: 'FastAPI', level: 'Advanced' },
                      { name: 'PostgreSQL', level: 'Advanced' },
                      { name: 'AWS Lambda', level: 'Advanced' },
                      { name: 'CI/CD', level: 'Advanced' },
                      { name: 'GitHub Actions', level: 'Advanced' },
                      { name: 'SaaS', level: 'Expert' },
                      { name: 'Database Design', level: 'Advanced' },
                      { name: 'Responsible AI', level: 'Intermediate' }
                    ].map((skill) => (
                      <div key={skill.name} className="glass-effect rounded-xl p-4 text-center">
                        <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                        <p className="text-gray-400 text-sm">{skill.level}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    <div className="glass-effect rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">Software Engineer</h4>
                          <p className="text-gray-400">Carpio Tech (London)</p>
                        </div>
                        <span className="text-sm text-gray-500">2024 - Present</span>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Working with Carpio Tech, a leading AI consultancy and engineering company, on bespoke AI solutions 
                        and AI-driven processes. Contributing to their mission of helping organizations go from AI strategy 
                        to delivering measurable outcomes.
                      </p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Developing AI-driven solutions for regulated industries and enterprise clients</li>
                        <li>• Contributing to Carpio Studio&apos;s ContentOps automation platform</li>
                        <li>• Building responsible AI systems with governance and evaluation frameworks</li>
                        <li>• Working on end-to-end AI product development and deployment</li>
                      </ul>
                    </div>
                    
                    <div className="glass-effect rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">Full Stack Software Engineer</h4>
                          <p className="text-gray-400">BKwai (London)</p>
                        </div>
                        <span className="text-sm text-gray-500">Jun 2020 – Jan 2024</span>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Led the development of React-based B2B SaaS platform from inception to maturity. 
                        Achieved 87.5% reduction in loading time for large datasets and spearheaded rapid 
                        product development including live dashboard creation within one week.
                      </p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Implemented beta features with feature flags and 3D model integration</li>
                        <li>• Engineered tools for seamless microfrontend collaboration</li>
                        <li>• Pioneered TypeScript adoption and microfrontend implementation</li>
                        <li>• Mentored interns and new-starters into independent professionals</li>
                      </ul>
                    </div>
                    
                    <div className="glass-effect rounded-xl p-6">
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-6">
                    <div className="glass-effect rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">Apprenticeship Diploma</h4>
                          <p className="text-gray-400">BCS - Software Development</p>
                        </div>
                        <span className="text-sm text-gray-500">Completed</span>
                      </div>
                      <p className="text-gray-300">
                        Professional qualification in software development through apprenticeship program.
                      </p>
                    </div>
                    
                    <div className="glass-effect rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">A-Levels</h4>
                          <p className="text-gray-400">City & Islington</p>
                        </div>
                        <span className="text-sm text-gray-500">Completed</span>
                      </div>
                      <p className="text-gray-300">
                        Computer Science, Electronics, and Mathematics.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'awards' && (
                  <div className="space-y-6">
                    <div className="glass-effect rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">87.5% Performance Improvement</h4>
                          <p className="text-gray-400">Loading Time Optimization</p>
                        </div>
                        <span className="text-sm text-gray-500">BKwai</span>
                      </div>
                      <p className="text-gray-300">
                        Reduced loading time for large datasets from 30s to 4s using strategic downsampling, 
                        ensuring fast data retrieval and improved platform performance.
                      </p>
                    </div>
                    
                    <div className="glass-effect rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">Rapid Product Development</h4>
                          <p className="text-gray-400">Live Dashboard Creation</p>
                        </div>
                        <span className="text-sm text-gray-500">BKwai</span>
                      </div>
                      <p className="text-gray-300">
                        Developed a new live dashboard product in one week, acquiring a new client and 
                        transitioning the solution to production, adding value to the company&apos;s portfolio.
                      </p>
                    </div>
                    
                    <div className="glass-effect rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">500+ Masajid Served</h4>
                          <p className="text-gray-400">Community Impact</p>
                        </div>
                        <span className="text-sm text-gray-500">MyLocalMasjid</span>
                      </div>
                      <p className="text-gray-300">
                        Successfully serving over 500 masajid across the UK with comprehensive digital solutions, 
                        demonstrating scalability and community trust.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Contact Me</span>
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
                    href="https://www.linkedin.com/in/sadik-moazzem/"
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