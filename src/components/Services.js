import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaEnvelopeOpenText } from 'react-icons/fa';
import { useContent } from '../context/ContentContext';
import './Services.css';

function Services() {
  const { content } = useContent();

  const iconMap = {
    '💻': <FaLaptopCode />,
    '💌': <FaEnvelopeOpenText />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <section id="services" className="services">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">LAYANAN KAMI</h2>
        <p className="services-subtitle">
          Solusi digital profesional untuk kebutuhan bisnis dan acara spesial Anda
        </p>
      </motion.div>
      
      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {content.services.map((service, index) => {
          const isUndanganDigital = service.title === 'UNDANGAN DIGITAL';
          const CardWrapper = isUndanganDigital ? 'a' : 'div';
          const cardProps = isUndanganDigital ? {
            href: 'https://kyyvora.unweb.id/',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'service-card-link'
          } : {};

          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <CardWrapper
                {...cardProps}
                className={`service-card neo-brutal-border ${isUndanganDigital ? 'service-card-clickable' : ''}`}
                style={{ backgroundColor: service.color }}
              >
                <motion.div 
                  className="service-icon"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {iconMap[service.icon] || service.icon}
                </motion.div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <motion.button 
                  className="neo-brutal-button service-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isUndanganDigital ? 'LIHAT CONTOH →' : 'PESAN SEKARANG'}
                </motion.button>
              </CardWrapper>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Services;
