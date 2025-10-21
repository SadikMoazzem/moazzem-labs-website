'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:info@moazzemlabs.com',
      color: 'hover:text-red-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sadik-moazzem/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/sadikmoazzem',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Learn More</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover more about Moazzem Labs and our MyLocalMasjid ecosystem. 
            Learn about our journey building technology that serves communities with integrity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Learn more about our work</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 resize-none"
                    placeholder="Tell us what you'd like to know..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full gradient-purple text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch directly</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400">info@moazzemlabs.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-blue rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Response Time</div>
                    <div className="text-gray-400">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect with us</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="text-white font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Our Products */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Products</h3>
              <div className="space-y-3">
                {[
                  'MyLocalMasjid Mobile App (iOS & Android)',
                  'MyLocalMasjid Admin Portal',
                  'MyLocalMasjid Masjid Websites',
                  'MyLocalMasjid Digital Displays',
                  'MyLocalMasjid Backend System',
                  'SalahTimez PWA Platform'
                ].map((product) => (
                  <div key={product} className="flex items-center gap-3">
                    <div className="w-2 h-2 gradient-purple rounded-full"></div>
                    <span className="text-gray-300">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center border-t border-white/10 pt-8"
        >
          <div className="text-gray-400">
            <p className="text-lg font-medium text-gradient mb-2">Moazzem Labs</p>
            <p className="text-sm">Innovation with Integrity</p>
            <p className="text-xs mt-4">© {new Date().getFullYear()} Moazzem Labs. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
