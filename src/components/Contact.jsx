import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-container">
        <motion.div
          className="contact-info glass"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Let's build something.</h3>
          <p>
            I'm currently looking for new opportunities and would love to hear from you.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <FaEnvelope />
              <a href="mailto:upekamahanama@gmail.com" className="email-link">upekamahanama@gmail.com</a>
            </div>
            <div className="detail-item">
              <FaMapMarkerAlt />
              <span>Nugasewana, Medagama, Netolpitiya</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/upeka-mahanama-910219303?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/upeka200163" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-container glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form className="contact-form" action="https://formsubmit.co/upekamahanama@gmail.com" method="POST">
            {/* Optional FormSubmit Settings */}
            <input type="hidden" name="_subject" value="New submission from your Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
