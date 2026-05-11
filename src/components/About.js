import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaHeadset } from 'react-icons/fa';
import { useContent } from '../context/ContentContext';
import './About.css';

function About() {
  const { content } = useContent();
  const [imageError, setImageError] = useState(false);

  const statsIcons = [
    <FaCheckCircle />,
    <FaUsers />,
    <FaHeadset />
  ];

  return (
    <section id="about" className="about">
      <div className="about-content">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {content.about.title}
        </motion.h2>

        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="image-placeholder neo-brutal-border"
            animate={{ 
              rotateY: [0, 10, 0, -10, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {!imageError ? (
              <img 
                src="/foto/tentang.png" 
                alt="Tentang Kyyvora" 
                className="about-image-img"
                onError={() => setImageError(true)}
              />
            ) : (
              <motion.span 
                className="placeholder-text"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                🎯
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        <motion.p 
          className="about-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content.about.description}
        </motion.p>

        <div className="stats">
          {content.about.stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item neo-brutal-border"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
            >
              <div className="stat-icon">{statsIcons[index]}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
