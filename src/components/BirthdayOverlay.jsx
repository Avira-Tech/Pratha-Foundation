import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

const BirthdayOverlay = ({ onClose }) => {
  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0, 
    height: typeof window !== 'undefined' ? window.innerHeight : 0 
  });

  const DURATION = 12000; // 12 seconds

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    const timer = setTimeout(onClose, DURATION);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [onClose]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    },
    exit: { 
      y: '-100%', 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const titleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black overflow-hidden cursor-crosshair"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={150}
          gravity={0.05}
          colors={['#ffffff', '#FFD700', '#333333']}
          opacity={0.6}
        />

        {/* Ambient Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />

        <div className="text-center px-6 relative z-10 select-none">
          <motion.div variants={titleVariants} className="mb-6">
            <span className="text-xs md:text-sm font-bold tracking-[0.6em] text-white/40 uppercase">
              Celebrating Excellence
            </span>
          </motion.div>

          <motion.h1
            variants={titleVariants}
            className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter"
          >
            Happy <br className="md:hidden" /> Birthday,
            <br />
            <motion.span 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-orange-500"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Pratha
            </motion.span>
          </motion.h1>

          <motion.div variants={titleVariants} className="mt-12">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-white/20" />
              <p className="text-lg md:text-xl font-light uppercase tracking-[0.4em] text-white/80">
                The Site is <span className="font-black text-white">Live</span>
              </p>
              <div className="h-[1px] w-12 bg-white/20" />
            </div>
          </motion.div>
        </div>

        {/* Cinematic Progress Loader */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <motion.div 
            className="h-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
            initial={{ width: "0%", left: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: DURATION / 1000, ease: "linear" }}
          />
        </div>

        {/* Corner Decor */}
        <div className="absolute top-10 left-10 border-t border-l border-white/20 w-10 h-10" />
        <div className="absolute bottom-10 right-10 border-b border-r border-white/20 w-10 h-10" />
      </motion.div>
    </AnimatePresence>
  );
};

export default BirthdayOverlay;