'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              Moazzem Labs
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-gradient transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-gradient transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-gradient transition-colors duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gradient transition-colors duration-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Floating CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link href="/about-me">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-purple text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <User className="w-4 h-4" />
            <span className="font-medium">About Me</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default Navigation;
