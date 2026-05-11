import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div 
          className="loading-logo"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="logo-box box-yellow"></div>
          <div className="logo-box box-cyan"></div>
          <div className="logo-box box-red"></div>
        </motion.div>
        <motion.h1 
          className="loading-title"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          KYYVORA
        </motion.h1>
        <motion.div 
          className="loading-bar neo-brutal-border"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
        >
          <motion.div 
            className="loading-progress"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1, repeat: Infinity }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
