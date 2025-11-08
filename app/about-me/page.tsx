"use client";

import Navigation from '@/components/Navigation';
import { ArrowLeft, Code, Calendar, GraduationCap, MapPin, Mail, Github, Twitter, Linkedin, User, Heart, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Main Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Calendar },
    { id: 'education', label: 'Education', icon: GraduationCap }
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
              <div className="relative mx-auto w-[300px] sm:w-80 h-[500px] bg-gray-900 rounded-2xl p-4 shadow-2xl max-w-[calc(100vw-2rem)]">
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
                              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                              if (nextElement) {
                                nextElement.style.display = 'flex';
                              }
                            }}
                      />
                      <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                        <Image
                          src="/images/moazzem-labs-logo.png"
                          alt="Moazzem Labs Logo"
                          width={64}
                          height={64}
                          className="w-16 h-16 object-contain"
                        />
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
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Column 1 - Programming */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">Programming</h4>
                        
                        <div className="mb-4">
                          <h5 className="text-md font-semibold text-gray-300 mb-2">Languages</h5>
                          <ul className="space-y-1">
                            <li className="text-white">• JavaScript</li>
                            <li className="text-white">• TypeScript</li>
                            <li className="text-white">• Python</li>
                            <li className="text-white">• HTML/CSS</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-md font-semibold text-gray-300 mb-2">Libraries/Frameworks</h5>
                          <ul className="space-y-1">
                            <li className="text-white">• React</li>
                            <li className="text-white">• Next.js</li>
                            <li className="text-white">• Redux</li>
                            <li className="text-white">• FastAPI</li>
                            <li className="text-white">• Flask</li>
                            <li className="text-white">• Tailwind CSS</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Column 2 - Data & AI */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">Data & AI</h4>
                        
                        <div className="mb-4">
                          <h5 className="text-md font-semibold text-gray-300 mb-2">AI/ML</h5>
                          <ul className="space-y-1">
                            <li className="text-white">• Prompt Engineering</li>
                            <li className="text-white">• AI for Business</li>
                            <li className="text-white">• Responsible AI</li>
                            <li className="text-white">• Data Processing</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-md font-semibold text-gray-300 mb-2">Databases</h5>
                          <ul className="space-y-1">
                            <li className="text-white">• PostgreSQL</li>
                            <li className="text-white">• NoSQL</li>
                            <li className="text-white">• Database Design</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Column 3 - Cloud & Tools */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">Cloud & Tools</h4>
                        
                        <div className="mb-4">
                          <h5 className="text-md font-semibold text-gray-300 mb-2">Cloud</h5>
                          <ul className="space-y-1">
                            <li className="text-white">• AWS Lambda</li>
                            <li className="text-white">• CI/CD</li>
                            <li className="text-white">• GitHub Actions</li>
                            <li className="text-white">• Docker</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-md font-semibold text-gray-300 mb-2">Tooling</h5>
                          <ul className="space-y-1">
                            <li className="text-white">• Git</li>
                            <li className="text-white">• Agile/Scrum</li>
                            <li className="text-white">• SaaS Development</li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
                        Led the development of React-based B2B SaaS platform from inception to maturity, 
                        demonstrating strategic oversight and visionary leadership in building enterprise solutions.
                      </p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Agile Feature Deployment:</strong> Implemented beta features with feature flags and integrated 3D models, contributing to increased client satisfaction</li>
                        <li>• <strong>Performance Enhancement:</strong> Achieved 87.5% reduction in loading time (30s to 4s) for large datasets through strategic downsampling</li>
                        <li>• <strong>Rapid Product Development:</strong> Created new live dashboard product within one week, capturing new client and driving increased leads</li>
                        <li>• <strong>Technology Leadership:</strong> Pioneered TypeScript adoption and microfrontend implementation, enhancing development flexibility</li>
                        <li>• <strong>Workflow Optimization:</strong> Engineered tools for seamless microfrontend collaboration and streamlined production deployment</li>
                        <li>• <strong>Strategic Communication:</strong> Led company-wide meetings and collaborated with product/data science teams on roadmap development</li>
                        <li>• <strong>Mentorship:</strong> Guided interns and new-starters to become fully competent independent professional developers</li>
                      </ul>
                    </div>
                    
                    <div className="glass-effect rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">Junior Software Engineer</h4>
                          <p className="text-gray-400">Digital Fineprint (London)</p>
                        </div>
                        <span className="text-sm text-gray-500">Nov 2018 – Mar 2020</span>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Main contributor in developing a React SaaS application with interconnected offerings, 
                        taking ownership of core functionalities and playing a pivotal role in the platform&apos;s success.
                      </p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Project Ownership:</strong> Led the Broker Profiling project, overseeing database design, API development, and frontend visualization</li>
                        <li>• <strong>Technical Leadership:</strong> Actively participated in design discussions, deepening understanding of system and database architecture</li>
                        <li>• <strong>Developer Tools:</strong> Created AWS developer tools using Python, simplifying repeatable tasks and increasing development efficiency</li>
                        <li>• <strong>Team Collaboration:</strong> Mentored new joiners and juniors, aiding them in understanding the codebase and contributing to team growth</li>
                        <li>• <strong>Cross-functional Support:</strong> Collaborated with Sales team, bridging technical intricacies with client needs</li>
                        <li>• <strong>Agile Methodologies:</strong> Worked with SCRUM and Agile methodologies, demonstrating adaptability in diverse development environments</li>
                      </ul>
                    </div>
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

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Moazzem Labs Vision */}
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
                    href="https://twitter.com/MoazzemLabs"
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