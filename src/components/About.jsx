import React from 'react';
import { HeartIcon, AcademicCapIcon, CloudIcon } from '@heroicons/react/24/solid'; // Solid icons for zen
import { motion } from 'framer-motion';

const About = () => {
  const missionCards = [
    { 
      icon: HeartIcon, 
      title: 'Our Mission', 
      desc: 'To provide essential healthcare services to rural and underprivileged communities, ensuring every family has access to basic medical care.' 
    },
    { 
      icon: AcademicCapIcon, 
      title: 'Our Vision', 
      desc: 'A future where every child in rural India has access to quality education and opportunities to thrive.' 
    },
    { 
      icon: CloudIcon, 
      title: 'Our Goal', 
      desc: 'Sustainable environmental initiatives through tree plantation drives, combating climate change and restoring ecosystems.' 
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none leaf-watermark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-black text-black mb-6 tracking-tight">
            About <span className="text-secondary">Pratha</span> Foundation
          </h2>

          <motion.div
            className="text-black font-medium text-2xl mb-8 font-body tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            लोकाः समस्ताः सुखिनो भवन्तु
          </motion.div>

          <p className="text-xl text-black/70 max-w-2xl mx-auto leading-relaxed font-body font-light">
            A newly founded non-profit dedicated to uplifting rural communities through healthcare, 
            education, and environmental sustainability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {missionCards.map((item, index) => (
            <motion.div
              key={item.title}
              className="zen-card p-10 transition-all duration-300 hover:-translate-y-2 flex flex-col items-start text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="icon-zen mb-8">
                <item.icon className="w-10 h-10 text-secondary" />
              </div>

              <h3 className="text-2xl font-heading font-black text-black mb-4">
                {item.title}
              </h3>

              <p className="text-black/70 leading-relaxed font-body text-md">
                {item.desc}
              </p>
              
              <div className="mt-6 w-8 h-1 bg-secondary rounded-full hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
