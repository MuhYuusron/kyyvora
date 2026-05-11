import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="footer-title">KYYVORA</h3>
          <p>Solusi digital terpercaya untuk kebutuhan Anda</p>
          <div className="social-icons">
            <motion.a 
              href="#" 
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4>LAYANAN</h4>
          <ul>
            <li>Pembuatan Website</li>
            <li>Undangan Digital</li>
          </ul>
        </motion.div>
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4>KONTAK</h4>
          <ul>
            <li>Email: muhammadyuusronn@gmail.com</li>
            <li>WA: +62 858-9363-8145</li>
            <li>Bekasi, Jawa Barat</li>
          </ul>
        </motion.div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 KYYVORA. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default Footer;
