import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './Notification.css';

function Notification({ message, type = 'success', show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`notification neo-brutal-border ${type}`}
          initial={{ opacity: 0, y: -50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -50, x: '-50%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="notification-icon">
            {type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
          </div>
          <div className="notification-message">{message}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notification;
