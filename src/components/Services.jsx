import React from 'react';
import { HeartIcon, BookOpenIcon, UserGroupIcon, CloudIcon } from '@heroicons/react/24/solid'; // Solid icons
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: HeartIcon,
      title: 'Healthcare Support',
      desc: 'Providing essential medical services, health camps, and medicine distribution to remote villages and underprivileged families.',
    },
    {
      icon: BookOpenIcon,
      title: 'Education for Children',
      desc: 'Quality education programs, school supplies, digital learning tools, and teacher training for rural children.',
    },
    {
      icon: CloudIcon,
      title: 'Tree Plantation Drives',
      desc: 'Mass tree plantation campaigns, environmental awareness programs, and sustainable agriculture initiatives.',
    },
    {
      icon: UserGroupIcon,
      title: 'Social Services',
      desc: 'Empowering communities through women’s workshops, vocational training, and disaster relief support.',
    }
  ];

  return (
    <section id="work" className="py-24 relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none leaf-watermark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-black text-black mb-6 tracking-tight">
            Our <span className="text-secondary">Work</span>
          </h2>
          <p className="text-secondary font-semibold text-xl mb-4 font-body tracking-wider">
            लोकाः समस्ताः सुखिनो भवन्तु
          </p>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-body">
            Transforming lives through targeted programs in healthcare, education, environment, and social welfare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="zen-card p-10 transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="icon-zen mb-8">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                  
                <h3 className="text-2xl font-heading font-black text-black mb-4">
                  {service.title}
                </h3>
                  
                <p className="text-black/70 leading-relaxed font-body font-light">
                  {service.desc}
                </p>

                <div className="mt-8 h-1 w-8 bg-secondary rounded-full hover:w-16 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
