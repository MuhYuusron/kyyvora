import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`
      }}
    >
      <motion.div 
        className="logo-container"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span 
          className="logo-text"
          animate={{
            textShadow: [
              '0 0 20px rgba(255, 215, 0, 0.5)',
              '0 0 30px rgba(255, 215, 0, 0.7)',
              '0 0 20px rgba(255, 215, 0, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          KYYVORA
        </motion.span>
      </motion.div>

      <motion.button 
        className="mobile-menu-btn" 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.button>

      <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
        <motion.a 
          href="#home" 
          className="nav-link"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(false)}
        >
          <span className="nav-link-text">HOME</span>
          <span className="nav-link-bg"></span>
        </motion.a>
        <motion.a 
          href="#services" 
          className="nav-link"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(false)}
        >
          <span className="nav-link-text">LAYANAN</span>
          <span className="nav-link-bg"></span>
        </motion.a>
        <motion.a 
          href="#about" 
          className="nav-link"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(false)}
        >
          <span className="nav-link-text">TENTANG</span>
          <span className="nav-link-bg"></span>
        </motion.a>
        <motion.a 
          href="#contact" 
          className="nav-link"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(false)}
        >
          <span className="nav-link-text">KONTAK</span>
          <span className="nav-link-bg"></span>
        </motion.a>
      </nav>
    </motion.header>
  );
}

export default Header;
