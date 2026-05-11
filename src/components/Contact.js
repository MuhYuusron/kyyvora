import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import { useContent } from '../context/ContentContext';
import './Contact.css';

function Contact() {
  const { content } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format pesan untuk WhatsApp dengan format yang sederhana
    const whatsappNumber = content.contact.whatsapp.replace(/[^0-9]/g, '');
    
    // Membuat pesan dengan format sederhana (tanpa encoding dulu)
    const message = `Halo Kyyvora!
Saya tertarik dengan layanan Anda.

Saya *${formData.name}* ingin bertanya tentang layanan *${formData.service}*

Detail Kebutuhan :
${formData.message}`;
    
    // Encode message untuk URL
    const whatsappMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { 
      icon: <FaEnvelope />, 
      title: 'Email Kami', 
      value: content.contact.email,
      color: '#FFE66D',
      description: 'Kirim email kapan saja'
    },
    { 
      icon: <FaWhatsapp />, 
      title: 'WhatsApp', 
      value: content.contact.whatsapp,
      color: '#4ECDC4',
      description: 'Chat langsung dengan kami'
    },
    { 
      icon: <FaMapMarkerAlt />, 
      title: 'Lokasi', 
      value: content.contact.location,
      color: '#FF6B9D',
      description: 'Lokasi usaha kami'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">HUBUNGI KAMI</h2>
          <p className="section-subtitle">
            Siap membantu mewujudkan solusi digital Anda. Hubungi kami sekarang!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-info-wrapper">
              <h3 className="info-title">Informasi Kontak</h3>
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="info-card"
                    style={{ '--card-color': info.color }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="info-icon-wrapper">
                      <motion.div 
                        className="info-icon"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                      >
                        {info.icon}
                      </motion.div>
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      <p className="info-value">{info.value}</p>
                      <span className="info-description">{info.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="availability-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="availability-icon">
                  <FaClock />
                </div>
                <div className="availability-content">
                  <h4>Tersedia Kapan Saja</h4>
                  <p>Kami siap melayani Anda 24/7</p>
                  <p className="availability-note">Hubungi kami melalui WhatsApp atau Email untuk respons cepat</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Kirim Pesan</h3>
              <p className="form-subtitle">Isi formulir di bawah ini dan kami akan langsung menghubungi Anda via WhatsApp</p>
              
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder="Masukkan nama lengkap Anda" 
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Jenis Layanan</label>
                <select 
                  id="service"
                  name="service"
                  className="form-input form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Pilih jenis layanan</option>
                  <option value="Pembuatan Website">Pembuatan Website</option>
                  <option value="Undangan Digital">Undangan Digital</option>
                  <option value="Konsultasi">Konsultasi</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Ceritakan kebutuhan Anda..." 
                  rows="6"
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane /> KIRIM VIA WHATSAPP
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
