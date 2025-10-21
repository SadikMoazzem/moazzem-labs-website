'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import Image from 'next/image';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'MyLocalMasjid',
      description: 'Complete digital ecosystem for masajid including mobile app, admin portal, websites, and backend system.',
      type: 'Complete Ecosystem',
      tech: ['React', 'React Native', 'Python', 'Flask', 'PostgreSQL', 'iOS', 'Android'],
      link: '/case-studies/mylocalmasjid',
      icon: Globe,
      gradient: 'gradient-purple',
      status: 'Live',
      year: '2020'
    },
    {
      title: 'SalahTimez',
      description: 'The foundation that started Moazzem Labs - a simple, fast prayer times PWA for London communities.',
      type: 'PWA',
      tech: ['React', 'Redux', 'Python', 'Flask', 'PostgreSQL'],
      link: '/case-studies/salahtimez',
      icon: Globe,
      gradient: 'gradient-blue',
      status: 'Live',
      year: '2016'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions that serve communities with integrity and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${project.gradient} rounded-xl flex items-center justify-center`}>
                  {project.title === 'MyLocalMasjid' ? (
                    <Image
                      src="/images/mylocalmasjid-logo.png"
                      alt="MyLocalMasjid Logo"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  ) : (
                    <project.icon className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">{project.year}</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

              {/* Project Type */}
              <div className="mb-4">
                <span className="text-sm text-gray-500">Type:</span>
                <span className="ml-2 text-sm text-white font-medium">{project.type}</span>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Technology:</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                className="w-full gradient-purple text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                {project.status === 'Live' ? 'View Case Study' : 
                 project.status === 'In Development' ? 'Learn More' : 'Coming Soon'}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We&apos;re constantly working on new solutions that serve communities with integrity. 
              Stay tuned for updates on our latest innovations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-purple text-white px-6 py-3 rounded-full font-medium"
            >
              Get Notified
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
