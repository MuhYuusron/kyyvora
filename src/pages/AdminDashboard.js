import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaCog, FaSignOutAlt, FaEdit, FaSave } from 'react-icons/fa';
import { useContent } from '../context/ContentContext';
import Notification from '../components/Notification';
import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();
  const { content, updateContent } = useContent();
  const [activeTab, setActiveTab] = useState('hero');
  const [editData, setEditData] = useState(content);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  const handleSave = () => {
    updateContent(activeTab, editData[activeTab]);
    setNotification({ show: true, message: 'Perubahan berhasil disimpan!', type: 'success' });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [field]: value
      }
    }));
  };

  const handleServiceChange = (index, field, value) => {
    const newServices = [...editData.services];
    newServices[index] = {
      ...newServices[index],
      [field]: value
    };
    setEditData(prev => ({
      ...prev,
      services: newServices
    }));
  };

  return (
    <div className="admin-dashboard">
      <Notification 
        message={notification.message}
        type={notification.type}
        show={notification.show}
      />
      <aside className="admin-sidebar neo-brutal-border">
        <div className="sidebar-header">
          <h2>ADMIN PANEL</h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'hero' ? 'active' : ''}`}
            onClick={() => setActiveTab('hero')}
          >
            <FaHome /> Hero Section
          </button>
          <button 
            className={`nav-item ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            <FaCog /> Layanan
          </button>
          <button 
            className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            <FaEdit /> Tentang
          </button>
          <button 
            className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            <FaEdit /> Kontak
          </button>
        </nav>
        <button className="logout-btn neo-brutal-button" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      <main className="admin-content">
        <div className="content-header">
          <h1>Edit {activeTab.toUpperCase()}</h1>
          <motion.button 
            className="neo-brutal-button save-btn"
            onClick={handleSave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSave /> SIMPAN
          </motion.button>
        </div>

        <div className="edit-form">
          {activeTab === 'hero' && (
            <motion.div 
              className="form-section neo-brutal-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="form-group">
                <label>Judul</label>
                <input
                  type="text"
                  value={editData.hero.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="form-input neo-brutal-border"
                />
              </div>
              <div className="form-group">
                <label>Highlight</label>
                <input
                  type="text"
                  value={editData.hero.highlight}
                  onChange={(e) => handleInputChange('highlight', e.target.value)}
                  className="form-input neo-brutal-border"
                />
              </div>
              <div className="form-group">
                <label>Subtitle</label>
                <textarea
                  value={editData.hero.subtitle}
                  onChange={(e) => handleInputChange('subtitle', e.target.value)}
                  className="form-input neo-brutal-border"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Teks Tombol CTA</label>
                <input
                  type="text"
                  value={editData.hero.ctaText}
                  onChange={(e) => handleInputChange('ctaText', e.target.value)}
                  className="form-input neo-brutal-border"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'services' && (
            <div className="services-grid-admin">
              {editData.services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  className="service-edit-card neo-brutal-border"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ backgroundColor: service.color }}
                >
                  <div className="form-group">
                    <label>Icon (Emoji)</label>
                    <input
                      type="text"
                      value={service.icon}
                      onChange={(e) => handleServiceChange(index, 'icon', e.target.value)}
                      className="form-input neo-brutal-border"
                    />
                  </div>
                  <div className="form-group">
                    <label>Judul</label>
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                      className="form-input neo-brutal-border"
                    />
                  </div>
                  <div className="form-group">
                    <label>Deskripsi</label>
                    <textarea
                      value={service.description}
                      onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                      className="form-input neo-brutal-border"
                      rows="2"
                    />
                  </div>
                  <div className="form-group">
                    <label>Warna</label>
                    <input
                      type="color"
                      value={service.color}
                      onChange={(e) => handleServiceChange(index, 'color', e.target.value)}
                      className="color-input"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'about' && (
            <motion.div 
              className="form-section neo-brutal-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="form-group">
                <label>Judul</label>
                <input
                  type="text"
                  value={editData.about.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="form-input neo-brutal-border"
                />
              </div>
              <div className="form-group">
                <label>Deskripsi</label>
                <textarea
                  value={editData.about.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="form-input neo-brutal-border"
                  rows="4"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div 
              className="form-section neo-brutal-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={editData.contact.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="form-input neo-brutal-border"
                />
              </div>
              <div className="form-group">
                <label>WhatsApp</label>
                <input
                  type="text"
                  value={editData.contact.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  className="form-input neo-brutal-border"
                />
              </div>
              <div className="form-group">
                <label>Lokasi</label>
                <input
                  type="text"
                  value={editData.contact.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="form-input neo-brutal-border"
                />
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
