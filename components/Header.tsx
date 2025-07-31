'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Our Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`transition-all duration-300 z-50 ${
      isScrolled
        ? 'fixed top-0 left-0 right-0 bg-white backdrop-blur-sm border-b border-gray-200 shadow-lg'
        : 'relative mt-0 bg-transparent backdrop-blur-sm border-b border-white/20'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold text-lg">M</span>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h1 className="text-xl font-bold text-secondary-900">Modi & Company</h1>
                  <p className="text-xs text-secondary-600">Advocates LLP</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation - Centered before scroll */}
          <nav
            className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/90 shadow-sm' 
                : 'bg-transparent absolute left-1/2 transform -translate-x-1/2'
            }`}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50' 
                    : 'text-white hover:text-primary-200 hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'hover:bg-gray-100 text-secondary-700' 
                : 'hover:bg-white/10 text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="block text-secondary-700 hover:text-primary-600 hover:bg-primary-50 font-medium py-2 px-3 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
