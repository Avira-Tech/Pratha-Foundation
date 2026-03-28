import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, UserIcon, EnvelopeIcon, PhoneIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

const GetInvolved = () => {
  const [activeAmount, setActiveAmount] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleAmountSelect = (amount) => setActiveAmount(amount);
  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for getting involved!');
  };

  return (
    <section id="involved" className="py-24 relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none leaf-watermark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-black text-black mb-6 tracking-tight">
            Get <span className="text-secondary">Involved</span>
          </h2>
          <p className="text-secondary font-semibold text-xl mb-4 font-body tracking-wider">
            लोकाः समस्ताः सुखिनो भवन्तु
          </p>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-body">
            Your support can change lives. Join our community of volunteers or contribute to our sustainable growth initiatives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Volunteer Form Card */}
          <motion.div
            className="zen-card p-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading font-black text-black mb-8">
              Become a Volunteer
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
                  <UserIcon className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 bg-surface/50 border-none rounded-zen focus:ring-2 focus:ring-secondary transition-all font-body"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
                    <EnvelopeIcon className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 bg-surface/50 border-none rounded-zen focus:ring-2 focus:ring-secondary transition-all font-body"
                    required
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-4 bg-surface/50 border-none rounded-zen focus:ring-2 focus:ring-secondary transition-all font-body"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-5 text-black/40">
                  <ChatBubbleLeftIcon className="w-5 h-5" />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us how you'd like to help..."
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 bg-surface/50 border-none rounded-zen focus:ring-2 focus:ring-secondary resize-none font-body"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full btn-primary"
              >
                Join as Volunteer
              </motion.button>
            </form>
          </motion.div>

          {/* Donation Card */}
          <motion.div
            className="zen-card p-10 flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading font-black text-black mb-4">
              Make a Donation
            </h3>
            <p className="text-black/60 mb-8 font-body">Support rural healthcare and sustainable growth initiatives.</p>
            
            <div className="space-y-4 mb-6">
              {['100', '500', '1000'].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`w-full p-5 rounded-zen font-bold text-xl transition-all flex justify-between items-center font-body border-2 shadow-earth ${
                    activeAmount === amount
                      ? 'bg-secondary text-white border-secondary'
                      : 'bg-surface text-black border-black/20 hover:border-secondary/50'
                  }`}
                >
                  <span>₹{amount}</span>
                  {activeAmount === amount && <span className="text-sm uppercase tracking-widest font-black">Selected</span>}
                </button>
              ))}
            </div>

            <div className="relative mb-8">
              <input
                type="number"
                placeholder="Custom Amount (₹)"
                className="w-full px-5 py-5 bg-surface/50 border-none rounded-zen text-center text-xl font-bold font-body focus:ring-2 focus:ring-secondary"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full mt-auto btn-secondary flex items-center justify-center space-x-3"
            >
              <span>Donate Now</span>
              <ArrowRightIcon className="w-6 h-6" />
            </motion.button>

            <div className="mt-8 flex flex-col items-center space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Secured via encrypted payment</span>
              <div className="h-[1px] w-12 bg-secondary/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Tax Deductible Section 80G</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
