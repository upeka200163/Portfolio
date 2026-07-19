import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/me.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="hero-section section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="hero-greeting">Hi, I'm</h2>
          <h1 className="hero-name">Upeka Mahanama</h1>
          <h3 className="hero-role">Software Engineering Undergraduate</h3>
          <p className="hero-description">
            Aspiring Software Engineer passionate about building modern web applications.
            Focused on creating clean, efficient, and user-centric digital experiences.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="Upeka's CV.pdf" download="Upeka_Mahanama_CV.pdf" className="btn btn-secondary">Download CV</a>
            <a href="mailto:upeka.mahanama@gmail.com" className="btn btn-secondary">Email Me</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image-glow"></div>
          <img src={profileImg} alt="Upeka Mahanama" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
