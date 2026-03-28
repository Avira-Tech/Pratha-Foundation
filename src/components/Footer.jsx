import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  HeartIcon 
} from '@heroicons/react/24/solid';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Impact', href: '#impact' },
    { name: 'Get Involved', href: '#involved' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Mission */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="icon-zen">
                <HeartIcon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-3xl font-heading font-black tracking-tight text-white">
                  Pratha<span className="text-primary">.</span>
                </h3>
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mt-1 font-medium">
                  लोकाः समस्ताः सुखिनो भवन्तु
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-8 max-w-sm text-lg font-light">
              Empowering rural India through healthcare, education, and environmental sustainability. 
              Building a future rooted in growth and clarity.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {['FB', 'IG', 'LI', 'TW'].map((label) => (
                <motion.a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-zen border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-[10px] font-bold tracking-tighter"
                  whileHover={{ y: -4 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white text-xs font-bold mb-8 uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-primary transition-colors duration-300 text-sm block group">
                    <span className="inline-block w-0 group-hover:w-4 h-[1px] bg-primary mr-0 group-hover:mr-2 align-middle transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white text-xs font-bold mb-8 uppercase tracking-[0.2em]">Reach Us</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="icon-zen mt-1">
                  <MapPinIcon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors text-sm">Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="icon-zen">
                  <PhoneIcon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors text-sm">+91 88307 77580</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="icon-zen">
                  <EnvelopeIcon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors text-sm break-all">socialgood@prathafoundation.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legal & Final Branding */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
          <p>© 2026 Pratha Foundation. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Made with 
            <span className="mx-2 text-primary"><HeartIcon className="w-3 h-3" /></span>
            for sustainable growth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
