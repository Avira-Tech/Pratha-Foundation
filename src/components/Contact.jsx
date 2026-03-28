import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none leaf-watermark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-black text-black mb-6 tracking-tight">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-secondary font-medium text-xl mb-4 font-body tracking-wider">
            लोकाः समस्ताः सुखिनो भवन्तु
          </p>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details Column */}
          <div className="space-y-10">
            {[
              { 
                icon: MapPinIcon, 
                title: "Our Location", 
                detail: "Pune, Maharashtra, India", 
                desc: "Serving rural communities across the nation." 
              },
              { 
                icon: PhoneIcon, 
                title: "Phone", 
                detail: "+91 88307 77580", 
                desc: "Monday - Friday, 9am - 6pm" 
              },
              { 
                icon: EnvelopeIcon, 
                title: "Email", 
                detail: "socialgood@prathafoundation.com", 
                desc: "We typically respond within 24 hours." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-6 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="icon-zen flex-shrink-0">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary/70 mb-1 font-body">
                    {item.title}
                  </h4>
                  <p className="text-xl font-bold text-black font-heading">{item.detail}</p>
                  <p className="text-sm text-black/60 font-body mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form Column */}
          <motion.div
            className="zen-card p-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/40 ml-1 font-body">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 bg-surface/50 border-none rounded-zen focus:ring-2 focus:ring-secondary transition-all font-body"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/40 ml-1 font-body">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="w-full px-5 py-4 bg-surface/50 border-none rounded-zen focus:ring-2 focus:ring-secondary transition-all font-body"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-black/40 ml-1 font-body">Message</label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-5 py-4 bg-surface/50 border-none rounded-zen focus:ring-2 focus:ring-secondary transition-all resize-none font-body"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full btn-primary"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
