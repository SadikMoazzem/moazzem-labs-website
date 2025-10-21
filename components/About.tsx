'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Code, Users } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Privacy-First',
      description: 'We build technology that protects user data and respects privacy, never exploiting personal information for profit.'
    },
    {
      icon: Heart,
      title: 'Community-Focused',
      description: 'Every solution we create serves real communities, addressing genuine needs rather than creating artificial demand.'
    },
    {
      icon: Code,
      title: 'Excellence',
      description: 'We maintain the highest standards in code quality, user experience, and ethical development practices.'
    },
    {
      icon: Users,
      title: 'Service',
      description: 'Technology should serve people, not the other way around. We build tools that empower and uplift communities.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">About Moazzem Labs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey from a simple prayer times app to building comprehensive community platforms
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">The Journey</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Moazzem Labs was founded with a simple mission: build technology that serves communities 
                with integrity. It all started with <strong className="text-white">SalahTimez</strong> in 2016 - 
                a simple, fast prayer times app for London communities.
              </p>
              <p>
                Through SalahTimez, we discovered the real needs of Muslim communities - not just prayer times, 
                but comprehensive digital solutions that respect their values and serve their actual needs. 
                This understanding became the foundation for our featured project.
              </p>
              <p>
                <strong className="text-white">MyLocalMasjid</strong> represents our complete vision - a comprehensive 
                digital ecosystem that includes mobile apps, masjid websites, admin portals, digital displays, 
                and backend systems. Today, we serve hundreds of masajid across the UK with privacy-first 
                technology that honors trust and builds genuine community connections.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto gradient-cosmic rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 gradient-purple rounded-full flex items-center justify-center">
                    <Image
                      src="/images/moazzem-labs-logo.png"
                      alt="Moazzem Labs Logo"
                      width={256}
                      height={256}
                      className="w-64 h-64 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 border-2 border-purple-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-blue-400 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
          <blockquote className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed">
            &ldquo;At Moazzem Labs, we build innovative technology solutions with unwavering integrity, 
            serving communities through honest, transparent development that honors trust and 
            empowers rather than exploits.&rdquo;
          </blockquote>
          <div className="mt-6 text-lg text-gradient font-semibold">
            — Sadik Moazzem, Founder
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React & React Native',
              'Python & Flask',
              'PostgreSQL',
              'iOS Development',
              'Android Development',
              'Progressive Web Apps',
              'API Development',
              'Privacy-First Design'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 glass-effect rounded-full text-gray-300 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
