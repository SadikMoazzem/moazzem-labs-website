'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close menu after clicking
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
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-gradient cursor-pointer"
              >
                Moazzem Labs
              </motion.div>
            </Link>

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
              <Link href="/support">
                <button className="text-white hover:text-gradient transition-colors duration-300">
                  Support
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-white hover:text-gradient transition-colors duration-300 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-white hover:text-gradient transition-colors duration-300 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-white hover:text-gradient transition-colors duration-300 py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-white hover:text-gradient transition-colors duration-300 py-2"
              >
                Contact
              </button>
              <Link href="/support" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="block w-full text-left text-white hover:text-gradient transition-colors duration-300 py-2">
                  Support
                </button>
              </Link>
              <Link href="/about-me" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="gradient-purple text-white px-6 py-3 rounded-full font-medium w-full flex items-center justify-center gap-2 mt-4">
                  <User className="w-4 h-4" />
                  About Me
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Floating CTA Button - Positioned above donation bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-24 sm:bottom-28 right-4 sm:right-8 z-50"
      >
        <Link href="/about-me">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-purple text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <User className="w-4 h-4" />
            <span className="font-medium text-sm sm:text-base">About Me</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default Navigation;
