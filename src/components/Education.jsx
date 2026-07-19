import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const educationList = [
    {
      institute: "University of Plymouth, UK (at NSBM Green University)",
      degree: "BSc (Hons) in Software Engineering - Undergraduate",
      duration: "Mar 2024 - Dec 2027",
      details: ["Currently pursuing degree, in progress.", "Completed with Advanced Certificate Programmer(2024)"]
    },
    {
      institute: "National Youth Service Council",
      degree: "Information and Communication Technology Technician (NVQ Level 4)",
      duration: "2023",
      details: ["Focused on computer networks, systems, and enterprise IT configurations."]
    },
    {
      institute: "National Youth Service Council",
      degree: "Advancing Career Skills English Course (NVQ Level 3)",
      duration: "2023",
      details: ["Professional communication, presentation, and corporate English skills."]
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="education-timeline">
          {educationList.map((edu, index) => (
            <motion.div 
              className="education-card"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="edu-header">
                <h3>{edu.degree}</h3>
                <span className="edu-duration">{edu.duration}</span>
              </div>
              <h4 className="edu-institute">{edu.institute}</h4>
              <ul className="edu-details">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;