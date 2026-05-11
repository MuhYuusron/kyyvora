import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLock, FaUser } from 'react-icons/fa';
import './AdminLogin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication (in production, use proper backend)
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Username atau password salah!');
    }
  };

  return (
    <div className="admin-login">
      <motion.div 
        className="login-container neo-brutal-border"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="login-icon"
          animate={{ 
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <FaLock size={60} />
        </motion.div>
        <h1 className="login-title">ADMIN LOGIN</h1>
        <p className="login-subtitle">Masuk ke Dashboard Admin</p>
        
        {error && (
          <motion.div 
            className="error-message"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input neo-brutal-border"
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input neo-brutal-border"
            />
          </div>
          <motion.button
            type="submit"
            className="neo-brutal-button login-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            MASUK →
          </motion.button>
        </form>
        <p className="login-hint">Hint: admin / admin123</p>
      </motion.div>
    </div>
  );
}

export default AdminLogin;
