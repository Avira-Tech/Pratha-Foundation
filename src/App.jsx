import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BirthdayOverlay from './components/BirthdayOverlay';
import CelebrationRibbon from './components/CelebrationRibbon';

import './App.css';

function App() {
  const BIRTHDAY_DATE = new Date('2026-03-28');
  const [birthdayActive, setBirthdayActive] = useState(false);

  const isBirthdayToday = () => {
    const today = new Date();
    return today.getFullYear() === BIRTHDAY_DATE.getFullYear() &&
           today.getMonth() === BIRTHDAY_DATE.getMonth() &&
           today.getDate() === BIRTHDAY_DATE.getDate();
  };

  useEffect(() => {
    setBirthdayActive(isBirthdayToday());
  }, []);

  const [celebrationActive, setCelebrationActive] = useState(false);

  const handleBirthdayClose = () => {
    setBirthdayActive(false);
    setCelebrationActive(true);
    
    // Auto hide celebration after 30s
    setTimeout(() => {
      setCelebrationActive(false);
    }, 30000);
  };

  return (
    <div className="App">
      {birthdayActive && <BirthdayOverlay onClose={handleBirthdayClose} />}
      {!birthdayActive && <Navbar />}
      {celebrationActive && <CelebrationRibbon />}
      <Hero />
      <About />
      <Services />
      <Impact />
      <Testimonials />
      <GetInvolved />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
