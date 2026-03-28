import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Laxmi Devi',
      role: 'Self-Help Group Leader, Nagpur, Maharashtra',
      quote: "Before Pratha Foundation, we didn't know how to save money or start a small business. Their vocational training gave us dignity.",
      initials: 'LD'
    },
    {
      name: 'Arjun Das',
      role: 'Local Farmer, Pune, Maharashtra',
      quote: "The tree plantation drive wasn't just about shade; it saved our soil. My yield has improved by 40% this year.",
      initials: 'AD'
    },
    {
      name: 'Sunita Meena',
      role: 'ASHA Worker, Mumbai, Maharashtra',
      quote: "Health camps brought specialist doctors and free medicines to our doorstep. They saved my neighbor's life.",
      initials: 'SM'
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none leaf-watermark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-black text-black mb-6 tracking-tight">
            Real Stories, <span className="text-secondary">Real Impact</span>
          </h2>
          <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="zen-card p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="icon-zen mb-8 text-2xl font-black">
                {testimonial.initials}
              </div>

              <div className="flex mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-secondary fill-current" />
                ))}
              </div>

              <p className="text-black/70 italic mb-10 leading-relaxed font-body text-lg font-light">
                "{testimonial.quote}"
              </p>

              <div className="mt-auto w-full pt-8 border-t border-primary/20">
                <h4 className="font-heading font-black text-black text-xl">
                  {testimonial.name}
                </h4>
                <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mt-2 font-body">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
