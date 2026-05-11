import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLaptopCode, FaFileAlt, FaMobileAlt, FaChartLine, FaCloud } from 'react-icons/fa';
import { useContent } from '../context/ContentContext';
import ScrollToTop from '../components/ScrollToTop';
import './Hero.css';

function Hero() {
  const { content } = useContent();

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content.hero.title}
            <motion.span 
              className="highlight"
              initial={{ rotate: -5 }}
              animate={{ rotate: [-5, 2, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {' '}{content.hero.highlight}{' '}
            </motion.span>
            ANDA
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.hero.subtitle}
          </motion.p>
          <motion.button 
            className="neo-brutal-button cta-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <FaRocket /> CEK LAYANAN →
          </motion.button>
        </div>
        
        <div className="hero-decoration-3d">
          {/* Icon 1 - Laptop (Draggable) */}
          <motion.div 
            className="floating-icon icon-1"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileHover={{ scale: 1.15, rotate: 10, z: 50 }}
            whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 8, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaLaptopCode size={50} />
          </motion.div>

          {/* Icon 2 - File (Draggable) */}
          <motion.div 
            className="floating-icon icon-2"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileHover={{ scale: 1.15, rotate: -10, z: 50 }}
            whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            animate={{ 
              y: [0, -15, 5, 0],
              x: [0, 10, -10, 0],
              rotate: [0, -5, 5, 0],
              scale: [1, 1.08, 0.98, 1],
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaFileAlt size={45} />
          </motion.div>

          {/* Icon 3 - Mobile (Draggable) */}
          <motion.div 
            className="floating-icon icon-3"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileHover={{ scale: 1.15, rotate: 15, z: 50 }}
            whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            animate={{ 
              y: [0, -25, 10, 0],
              rotate: [0, 12, -12, 0],
              scale: [1, 0.95, 1.1, 1],
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaMobileAlt size={40} />
          </motion.div>

          {/* Icon 4 - Chart (Draggable) */}
          <motion.div 
            className="floating-icon icon-4"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileHover={{ scale: 1.15, rotate: -15, z: 50 }}
            whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            animate={{ 
              y: [0, 10, -18, 0],
              x: [0, -8, 8, 0],
              rotate: [0, -10, 10, 0],
              scale: [1, 1.06, 0.96, 1],
            }}
            transition={{ 
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaChartLine size={48} />
          </motion.div>

          {/* Icon 5 - Cloud (Draggable) */}
          <motion.div 
            className="floating-icon icon-5"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileHover={{ scale: 1.15, rotate: 12, z: 50 }}
            whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            animate={{ 
              y: [0, -22, 8, 0],
              x: [0, 12, -12, 0],
              rotate: [0, 6, -6, 0],
              scale: [1, 1.04, 1, 1],
            }}
            transition={{ 
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaCloud size={55} />
          </motion.div>

          {/* Decorative Boxes (Background) - More Dynamic */}
          <motion.div 
            className="decoration-box box-1"
            animate={{ 
              rotate: [5, 25, -15, 5],
              y: [0, -30, 10, 0],
              x: [0, 15, -15, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="decoration-box box-2"
            animate={{ 
              rotate: [-8, 12, -20, -8],
              x: [0, 30, -20, 0],
              y: [0, -15, 15, 0],
              scale: [1, 0.9, 1.15, 1],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="decoration-box box-3"
            animate={{ 
              rotate: [12, -15, 20, 12],
              y: [0, 25, -20, 0],
              x: [0, -18, 18, 0],
              scale: [1, 1.08, 0.92, 1],
            }}
            transition={{ 
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>

          {/* Additional Floating Elements */}
          <motion.div
            className="floating-circle circle-1"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="floating-circle circle-2"
            animate={{
              y: [0, 30, 0],
              x: [0, -25, 0],
              scale: [1, 0.8, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}

export default Hero;
