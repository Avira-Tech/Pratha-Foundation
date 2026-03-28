import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { UsersIcon, MapPinIcon, HeartIcon } from '@heroicons/react/24/solid'; // Solid icons

const Impact = () => {
  const stats = useMemo(() => [
    { num: 100, suffix: '+', label: 'Lives Impacted', icon: HeartIcon },
    { num: 50, suffix: '+', label: 'Volunteers', icon: UsersIcon },
    { num: 5, suffix: '+', label: 'Villages Reached', icon: MapPinIcon },
  ], []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const duration = 2000; 
      const steps = 60;
      const intervalTime = duration / steps;
      
      const timer = setInterval(() => {
        setCounts(prev => 
          prev.map((count, i) => {
            if (count < stats[i].num) {
              const increment = Math.ceil(stats[i].num / steps);
              return Math.min(count + increment, stats[i].num);
            }
            return count;
          })
        );
      }, intervalTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, stats]);

  return (
    <section id="impact" className="py-24 relative">
      {/* Subtle Grid Watermark */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none leaf-watermark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* High-Contrast Heading: Black */}
          <h2 className="text-5xl md:text-6xl font-heading font-black text-black mb-6 tracking-tight">
            Our <span className="text-secondary">Impact</span> So Far
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="zen-card p-12 transition-all duration-300 text-center hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Zen Icon Container */}
                <div className="icon-zen mx-auto mb-8">
                  <Icon className="w-10 h-10 text-secondary" />
                </div>
                
                {/* Number in Heading Font */}
                <div className="text-6xl md:text-7xl font-heading font-black text-black mb-2 tracking-tighter">
                  {counts[index]}{stat.suffix}
                </div>
                
                {/* Label */}
                <div className="text-sm font-bold text-secondary uppercase tracking-[0.25em] font-body">
                  {stat.label}
                </div>

                {/* Decorative growth bar */}
                <div className="mt-8 h-0.5 w-12 bg-primary/50 mx-auto hover:w-24 hover:bg-secondary transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
