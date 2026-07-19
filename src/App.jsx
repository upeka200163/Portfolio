import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education'; // Added
import Skills from './components/Skills';
import Projects from './components/Projects';
import Leadership from './components/Leadership'; // Added
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import BackgroundDecor from './components/BackgroundDecor';
import MouseSpotlight from './components/MouseSpotlight';

import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      {/* Creative Background Elements */}
      <BackgroundDecor />
      <MouseSpotlight />

      {/* Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Nav />
      
      <main>
        <Hero />
        
        {/* Creative Section Dividers */}
        <div className="section-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="divider-color"></path>
          </svg>
        </div>

        <About />

        {/* 1. Education placed right after About */}
        <Education />
        
        <Skills />
        
        <div className="section-divider flip">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="divider-color"></path>
          </svg>
        </div>

        <Projects />

        {/* 2. Leadership placed right after Projects */}
        <Leadership />
        
        <Contact />
      </main>

      <FloatingButtons />

      <footer className="footer section">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Upeka Mahanama. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/upeka200163" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/upeka-mahanama-910219303?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;