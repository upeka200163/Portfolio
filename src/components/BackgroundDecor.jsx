import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaPython, FaJava,  } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiPostgresql, SiExpress, SiFigma, SiBootstrap } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

const BackgroundDecor = () => {
  const icons = [
    { icon: <FaReact />, top: '10%', left: '10%', size: '45px', delay: 0 },
    { icon: <FaJs />, top: '20%', left: '80%', size: '35px', delay: 2 },
    { icon: <SiVite />, top: '40%', left: '15%', size: '30px', delay: 4 },
    { icon: <FaNodeJs />, top: '60%', left: '85%', size: '40px', delay: 1 },
    { icon: <FaHtml5 />, top: '80%', left: '10%', size: '35px', delay: 5 },
    { icon: <FaCss3Alt />, top: '85%', left: '75%', size: '25px', delay: 3 },
    { icon: <SiTailwindcss />, top: '30%', left: '60%', size: '35px', delay: 0 },
    { icon: <FaDatabase />, top: '50%', left: '50%', size: '30px', delay: 2 },
    { icon: <SiPostgresql />, top: '70%', left: '25%', size: '40px', delay: 4 },
    { icon: <FaPython />, top: '15%', left: '40%', size: '30px', delay: 1 },
    { icon: <FaJava />, top: '55%', left: '70%', size: '35px', delay: 3 },
    { icon: <SiExpress />, top: '25%', left: '30%', size: '30px', delay: 0 },
    { icon: <SiFigma />, top: '75%', left: '55%', size: '35px', delay: 2 },
    { icon: <SiBootstrap />, top: '35%', left: '20%', size: '30px', delay: 4 },
    { icon: <TbBrandCSharp />, top: '65%', left: '40%', size: '35px', delay: 1 },
  ];

  return (
    <div className="background-decor-container">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.size,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}
      <div className="bg-mesh"></div>
    </div>
  );
};

export default BackgroundDecor;
