import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaDatabase, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiPostgresql, SiFirebase, SiC, SiIntellijidea,SiMongodb,SiFigma,SiBootstrap } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava />, color: "#b07219" },
        { name: "Python", icon: <FaPython />, color: "#3572A5" },
        { name: "C", icon: <SiC />, color: "#555555" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
        { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
        { name: "C#", icon: <TbBrandCSharp />, color: "#518068" },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34c26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4" },
        { name: "React.js", icon: <FaReact />, color: "#61dbfb" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#336791" },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL / SQL", icon: <FaDatabase />, color: "#00758f" },
        { name: "Git & GitHub", icon: <FaGitAlt />, color: "#f05032" },
        { name: "VS Code", icon: <VscVscode />, color: "#007acc" },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea />, color: "#fe315d" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#023a2c" },
        { name: "Firebase", icon: <SiFirebase />, color: "#ffca28" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38b2ac" },
        { name: "Vite", icon: <SiVite />, color: "#646cff" },
        { name: "Figma ", icon: <SiFigma />, color: "#646cff" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Technical Excellence
      </motion.h2>

      <div className="skills-container">
        {categories.map((category, idx) => (
          <motion.div
            key={category.title}
            className="skill-category glass"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, color: skill.color }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
