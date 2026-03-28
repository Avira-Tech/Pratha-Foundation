// import React from 'react';
// import { ArrowRightIcon, HeartIcon } from '@heroicons/react/24/solid'; // Solid icons for zen clarity
// import { motion } from 'framer-motion';

// const Hero = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 1.0, ease: 'easeInOut' }  // Slow & linear calm unfolding
//     }
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-primary leaf-watermark">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

//         <motion.div 
//           className="max-w-5xl mx-auto"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: { transition: { staggerChildren: 0.2 } }  // Slower stagger
//           }}
//         >
//           {/* Sub-heading in Deep Forest */}
//           <motion.p 
//             variants={fadeInUp}
//             className="text-black text-sm md:text-base font-bold mb-6 uppercase tracking-[0.4em] font-body"
//           >
//             Sustainable Growth & Impact
//           </motion.p>
          
//           {/* Primary Heading: Black Marcellus */}
//           <motion.h1 
//             variants={fadeInUp}
//             className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-black mb-8 leading-[0.95] tracking-tight"
//           >
//             Together We <br />
//             <span className="text-black">Prosper.</span>
//           </motion.h1>

//           {/* Hindi Slogan - Black medium weight like ink on paper */}
//           <motion.div
//             variants={fadeInUp}
//             className="mb-10"
//           >
//             <span className="text-black font-medium text-xl md:text-2xl tracking-wider font-body">
//               लोकाः समस्ताः सुखिनो भवन्तु
//             </span>
//             <div className="h-1 w-20 bg-black mx-auto mt-4 rounded-full" />
//           </motion.div>

//           {/* Minimalist Description: Black */}
//           <motion.p 
//             variants={fadeInUp}
//             className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-12 leading-relaxed font-body font-light"
//           >
//             Uplifting rural communities through healthcare, education, and 
//             environmental restoration. A professional approach to grassroots change.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//             variants={fadeInUp}
//           >
//             {/* Primary Button: Saffron-Gold */}
//             <motion.a
//               href="#involved"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="btn-primary flex items-center space-x-3"
//             >
//               <span>Donate Now</span>
//               <ArrowRightIcon className="w-5 h-5" />
//             </motion.a>
            
//             {/* Secondary Button: White black border */}
//             <motion.a
//               href="#involved"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="btn-secondary flex items-center space-x-3"
//             >
//               <HeartIcon className="w-5 h-5 text-black" />
//               <span>Volunteer</span>
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { ArrowRightIcon, HeartIcon } from '@heroicons/react/24/solid'; 
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.0, ease: 'easeInOut' } 
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-primary"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/watercolor-human-rights-day-background_23-2150998255.jpg?semt=ais_hybrid&w=740&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Color Overlay Layer (#80EF80 at 85% opacity to keep it pastel) */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: '#80EF80',
          opacity: 0.85,
          backdropFilter: 'blur(2px)' // Optional: adds a soft "zen" feel
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } } 
          }}
        >
          {/* Sub-heading */}
          <motion.p 
            variants={fadeInUp}
            className="text-black text-sm md:text-base font-bold mb-6 uppercase tracking-[0.4em] font-body"
          >
            Sustainable Growth & Impact
          </motion.p>
          
          {/* Primary Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-black mb-8 leading-[0.95] tracking-tight"
          >
            Together We <br />
            <span className="text-black">Prosper.</span>
          </motion.h1>

          {/* Hindi Slogan */}
          <motion.div
            variants={fadeInUp}
            className="mb-10"
          >
            <span className="text-black font-medium text-xl md:text-2xl tracking-wider font-body">
              लोकाः समस्ताः सुखिनो भवन्तु
            </span>
            <div className="h-1 w-20 bg-black mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-black max-w-2xl mx-auto mb-12 leading-relaxed font-body font-light"
          >
            Uplifting rural communities through healthcare, education, and 
            environmental restoration. A professional approach to grassroots change.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={fadeInUp}
          >
            <motion.a
              href="#involved"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center space-x-3 shadow-lg"
            >
              <span>Donate Now</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#involved"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border-2 border-black text-black rounded-full font-bold flex items-center space-x-3 shadow-lg"
            >
              <HeartIcon className="w-5 h-5" />
              <span>Volunteer</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;  