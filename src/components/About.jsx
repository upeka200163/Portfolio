import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="about-grid">
        <motion.div
          className="about-text glass"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            I am a highly motivated Third-Year Software Engineering undergraduate at the University of Plymouth (studying at NSBM Green University), specializing in Full-Stack Web Development, Mobile Application Development, and UI/UX Design. Passionate about building scalable, user-centric solutions, I developed a synchronous IoT-based university transport management system with real-time vehicle tracking and delay updates. My experience is further strengthened by a 6-month IT Training program at the Ceylon Electricity Board (CEB), where I gained hands-on experience in enterprise IT systems and technical support.
          </p>
          <p>
            Beyond my technical expertise, I actively contribute to the tech community as a Council Member of the FOSS Community and Active Member of the Mathematics and Statistics Circle at NSBM. I also engage with IEEE and hackathon communities, strengthening my leadership, teamwork, and problem-solving skills. This combination of technical knowledge, industry experience, and community involvement enables me to adapt quickly, embrace emerging technologies, and contribute effectively to software engineering projects.

          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h4>BSc (Hons)</h4>
              <p>Software Engineering (3rd Year)</p>
            </div>
            <div className="stat-item">
              <h4>Location</h4>
              <p>Tangalle, Sri Lanka</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-details glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Soft Skills</h3>
          <ul>
            <li>🗣️ <strong>Communication:</strong> Clear and effective interactions.</li>
            <li>🤝 <strong>Teamwork:</strong> Collaborative and supportive approach.</li>
            <li>🧩 <strong>Problem Solving:</strong> Critical thinking to tackle challenges.</li>
            <li>⏱️ <strong>Time Management:</strong> Efficient and adaptable under pressure.</li>
            <li>😊 <strong>Adaptability & Quick Learning:</strong> Experienced from Ceylon Electricity Board(CEB) training.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
