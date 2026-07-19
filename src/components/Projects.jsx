import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, idx }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="project-card glass"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="project-content" style={{ transform: "translateZ(50px)" }}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github !== "#" && (
            <a href={project.github} className="project-link" title="Source Code" target="_blank" rel="noopener noreferrer">
              <FaGithub /> Code
            </a>
          )}
          {project.live !== "#" && (
            <a href={project.live} className="project-link" title="Live Preview" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Personalized Health Tracking System(BMI-Calculator)",
      description: "A modern desktop BMI calculator application featuring secure user authentication, BMI calculation, and history tracking. Designed with a clean, intuitive interface and integrated database support for efficient data management.",
      tags: ["Python", "Tkinter (GUI)", "SQLite3"],
      github: "https://github.com/upeka200163/BMI-Calculator",
      live: "#",
    },
    {
      title: " Antonio Cake Restaurant — Premium Bakery & Dessert Experience",
      description: "Antonio Cake Restaurant is a modern, responsive bakery and restaurant website designed to showcase cakes, desserts, and specialty menu items through an elegant interface. It features seamless navigation, interactive elements, and responsive design to deliver an engaging and user-friendly browsing experience.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/upeka200163/Antonio-Cake-Restaurant-",
      live: "https://upeka200163.github.io/Antonio-Cake-Restaurant-/",
    },
    {
      title: "Academia – Modern Online Education & Learning Platform",
      description: "Academia is a modern, fully responsive online education platform designed to provide an engaging learning experience. It showcases courses, student testimonials, and institutional information through a clean, intuitive interface with responsive design and interactive UI elements to enhance accessibility and user experience.",
      tags: ["React.js", "CSS3", "HTML", "Figma"," Google Fonts"],
      github: "https://github.com/upeka200163/ACADEMIA-ONLINE-EDUCATION-LEARNING",
      live: "https://academia-online-education-learning.netlify.app/",
    },
    {
      title: "Utility Management System",
      description: "A web-based utility management system that connects utility service providers and consumers through a centralized platform for billing, payment processing, and customer account management. Developed as a group project.",
      tags: ["PHP", "CSS"],
      github: "https://github.com/upeka200163/UMS-Utility-Management-System",
      live: "#",
    },
    {
      title: "Food Express - Food Delivery App",
      description: "A modern, responsive food delivery application that enables users to browse menus, place orders, and track deliveries in real time through a clean, intuitive, and user-friendly interface.",
      tags: ["Flutter", "Dart", "Firebase Firestore"," Firebase Storage","Google Maps API", "Provider / Stateful Widgets"],
      github: "https://github.com/upeka200163/Food-Express-Mobile-App",
      live: "#",
    },
    {
      title: "Hospital Management System",
      description: "A modern and responsive healthcare platform designed to showcase hospital services, doctor profiles, and online appointment booking through a clean, intuitive interface. Built with responsive design and interactive UI elements, it ensures seamless navigation and easy access to essential healthcare services.",
      tags: ["HTML", "CSS", "JavaScript" ],
      github: "https://github.com/upeka200163/Hospital-Manegement-System",
      live: "#",
    },
    {
      title: "UniGrid — Student Social Media Platform",
      description: "A modern and responsive social media platform designed for students to connect, share, and collaborate. Features include user profiles, news feeds, messaging, and event management.",
      tags: ["React.js", "CSS", "JavaScript (ES6+)","HTML" ],
      github: "https://github.com/upeka200163/UniGrid-Student-Social-Media-Platform",
      live: "https://agent-6a3cc1493379015a43a11e04--unigrid-student.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="section" style={{ perspective: "1000px" }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;