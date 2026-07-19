import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="floating-actions">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="fab fab-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Back to Top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
      
      <div className="side-socials">
        <motion.a 
          href="https://github.com/upeka200163" 
          target="_blank" 
          rel="noreferrer"
          className="fab-social"
          whileHover={{ x: 5 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/upeka-mahanama-910219303?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
          target="_blank" 
          rel="noreferrer"
          className="fab-social"
          whileHover={{ x: 5 }}
        >
          <FaLinkedin />
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingButtons;
