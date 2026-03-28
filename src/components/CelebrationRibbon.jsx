// import React, { useEffect, useState } from 'react';
// import Confetti from 'react-confetti';
// import { motion } from 'framer-motion';

// const CelebrationRibbon = () => {
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [triggerLeft, setTriggerLeft] = useState(true);
//   const [triggerRight, setTriggerRight] = useState(true);

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });

//     // Trigger left ribbon burst
//     const leftTimer = setTimeout(() => {
//       setTriggerLeft(true);
//     }, 500);

//     // Trigger right ribbon burst 0.5s later
//     const rightTimer = setTimeout(() => {
//       setTriggerRight(true);
//     }, 1000);

//     return () => {
//       clearTimeout(leftTimer);
//       clearTimeout(rightTimer);
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-40 pointer-events-none">
//       {/* Left Ribbon Crackers */}
//       {triggerLeft && (
//         <Confetti
//           width={window.innerWidth / 2}
//           height={window.innerHeight}
//           recycle={false}
//           numberOfPieces={200}
//           angle={90}
//           spread={45}
//           startVelocity={45}
//           gravity={0.5}
//           colors={['#FFD700', '#FF4500', '#FF1493', '#00FF7F']}
//         />
//       )}

//       {/* Right Ribbon Crackers */}
//       {triggerRight && (
//         <div style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%' }}>
//         <Confetti
//           width={window.innerWidth / 2}
//           height={window.innerHeight}
//           recycle={false}
//           numberOfPieces={200}
//           angle={270}
//           spread={45}
//           startVelocity={45}
//           gravity={0.5}
//           colors={['#FFD700', '#FF4500', '#FF1493', '#00FF7F']}
//         />
//       </div>
//       )}
//     </div>
//   );
// };

// export default CelebrationRibbon;

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const CelebrationRibbon = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    // Set initial size
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    // Sequence the bursts
    const leftTimer = setTimeout(() => setShowLeft(true), 500);
    const rightTimer = setTimeout(() => setShowRight(true), 1200);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(leftTimer);
      clearTimeout(rightTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Left Cracker - Shooting Inward/Upward */}
      {showLeft && (
        <div className="absolute left-0 bottom-0 w-1/2 h-full">
          <Confetti
            width={windowSize.width / 2}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={300}
            // 45 degrees shoots toward the top-right
            confettiSource={{ x: 0, y: windowSize.height / 1.5, w: 0, h: 0 }}
            initialVelocityX={20}
            initialVelocityY={25}
            gravity={0.3}
            colors={['#FFD700', '#FF4500', '#FF1493', '#00FF7F']}
          />
        </div>
      )}

      {/* Right Cracker - Shooting Inward/Upward */}
      {showRight && (
        <div className="absolute right-0 bottom-0 w-1/2 h-full">
          <Confetti
            width={windowSize.width / 2}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={300}
            // Shoots toward the top-left
            confettiSource={{ x: windowSize.width / 2, y: windowSize.height / 1.5, w: 0, h: 0 }}
            initialVelocityX={-20}
            initialVelocityY={25}
            gravity={0.3}
            colors={['#FFD700', '#FF4500', '#FF1493', '#00FF7F']}
          />
        </div>
      )}
    </div>
  );
};

export default CelebrationRibbon;