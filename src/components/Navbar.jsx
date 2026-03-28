import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/solid'; // Solid for zen
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Impact', href: '#impact' },
    { name: 'Get Involved', href: '#involved' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center p-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'tween', ease: 'easeOut' }}
        className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 md:px-8 w-full max-w-7xl mx-auto backdrop-blur-md ${
          scrolled 
            ? 'rounded-zen bg-primary/80 shadow-earth border border-primary/30 py-3 px-8' 
            : 'py-4 bg-primary/60'
        }`}
      >
        {/* Logo: Black text */}
        {/* <div className="flex-shrink-0">
          <a href="#home" className="text-xl md:text-2xl font-bold text-black whitespace-nowrap font-heading">
            Pratha Foundation
          </a>
        </div> */}
        {/* Logo: Circle with Slab Serif Marathi text and Tagline */}
<div className="flex-shrink-0 flex items-center group">
  <a href="#home" className="flex items-center space-x-3 no-underline">
    
    {/* Black Circle with Slab Serif Text */}
    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-earth transition-transform group-hover:scale-105 shrink-0 overflow-hidden border border-black/10">
      <span className="text-white text-[28px] font-[900] font-martel leading-none tracking-tighter select-none pt-1">
        प्रथा
      </span>
    </div>

    {/* Text Stack: Foundation & Tagline */}
    <div className="flex flex-col justify-center">
      <h1 className="text-xl md:text-2xl font-bold text-black font-heading leading-none tracking-tight">
        Foundation
      </h1>
      <p className="text-[10px] md:text-[11px] font-medium text-black/60 font-body mt-1 italic">
        लोकाः समस्ताः सुखिनो भवन्तु
      </p>
    </div>

  </a>
</div>

        {/* Desktop Menu: Black text on glass */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold text-black hover:text-secondary transition-colors duration-300 uppercase tracking-wider font-body rounded-zen hover:bg-surface/50 shadow-earth"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="#involved"
            className={`hidden sm:flex btn-primary whitespace-nowrap items-center space-x-2 shadow-earth ${
              scrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-base'
            }`}
          >
            <span>Donate Now</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-zen text-black hover:bg-surface/50 transition-colors focus:outline-none shadow-earth"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown: Zen card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ type: 'tween', ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 mt-3 lg:hidden zen-card shadow-earth overflow-hidden p-6 mx-4"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-semibold text-black px-4 py-3 hover:bg-primary/20 rounded-zen transition-all font-body"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#involved"
                  className="w-full text-center btn-primary py-4 rounded-zen shadow-earth mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Donate Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
