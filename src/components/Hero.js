import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLaptopCode, FaFileAlt, FaMobileAlt } from 'react-icons/fa';
import { useContent } from '../context/ContentContext';
import Ballpit from './Ballpit';
import ScrollToTop from '../components/ScrollToTop';
import './Hero.css';

function Hero() {
  const { content } = useContent();
  const [ballpitError, setBallpitError] = useState(false);
  const [showBallpit, setShowBallpit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Delay ballpit initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      setShowBallpit(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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
          {!isMobile && !ballpitError && showBallpit ? (
            <div className="ballpit-container">
              <Ballpit
                count={50}
                colors={[0xFFBA08, 0xFF6B35, 0xF7931E, 0x4ECDC4]}
                followCursor={true}
                onError={() => setBallpitError(true)}
              />
            </div>
          ) : (
            <div className="ballpit-fallback">
              <motion.div
                className="fallback-icon"
                drag
                dragConstraints={{ left: -150, right: 150, top: -80, bottom: 80 }}
                dragElastic={0.7}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                animate={{ 
                  x: [0, 30, -20, 40, -30, 0],
                  y: [0, -25, 15, -30, 20, 0],
                  rotate: [0, 15, -10, 20, -15, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.2, rotate: 25 }}
                whileTap={{ scale: 0.9, cursor: 'grabbing' }}
              >
                <FaLaptopCode size={40} />
              </motion.div>
              <motion.div
                className="fallback-icon"
                drag
                dragConstraints={{ left: -150, right: 150, top: -80, bottom: 80 }}
                dragElastic={0.7}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                animate={{ 
                  x: [0, -35, 25, -40, 30, 0],
                  y: [0, 20, -30, 25, -20, 0],
                  rotate: [0, -20, 15, -25, 10, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  delay: 0.5,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.2, rotate: -25 }}
                whileTap={{ scale: 0.9, cursor: 'grabbing' }}
              >
                <FaMobileAlt size={36} />
              </motion.div>
              <motion.div
                className="fallback-icon"
                drag
                dragConstraints={{ left: -150, right: 150, top: -80, bottom: 80 }}
                dragElastic={0.7}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                animate={{ 
                  x: [0, 40, -30, 35, -25, 0],
                  y: [0, -20, 30, -25, 15, 0],
                  rotate: [0, 25, -15, 30, -20, 0]
                }}
                transition={{ 
                  duration: 9, 
                  repeat: Infinity, 
                  delay: 1,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.2, rotate: 30 }}
                whileTap={{ scale: 0.9, cursor: 'grabbing' }}
              >
                <FaFileAlt size={38} />
              </motion.div>
            </div>
          )}
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}

export default Hero;
