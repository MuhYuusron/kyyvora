import React, { createContext, useState, useContext } from 'react';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState({
    hero: {
      title: 'SOLUSI TERBAIK UNTUK',
      highlight: 'KEBUTUHAN DIGITAL',
      subtitle: 'Kami menyediakan jasa pembuatan website profesional dan undangan digital yang modern dan elegan untuk berbagai kebutuhan Anda',
      ctaText: 'MULAI SEKARANG'
    },
    services: [
      {
        id: 1,
        title: 'PEMBUATAN WEBSITE',
        description: 'Website profesional, modern, dan responsif untuk bisnis, portfolio, company profile, dan berbagai kebutuhan digital Anda',
        color: '#FFE66D',
        icon: '💻'
      },
      {
        id: 2,
        title: 'UNDANGAN DIGITAL',
        description: 'Undangan digital yang elegan dan interaktif untuk pernikahan, ulang tahun, acara perusahaan, dan berbagai event spesial Anda',
        color: '#FF6B9D',
        icon: '💌'
      }
    ],
    about: {
      title: 'TENTANG KYYVORA',
      description: 'Kyyvora adalah platform penyedia jasa digital terpercaya yang fokus pada pembuatan website dan undangan digital. Dengan pengalaman dan dedikasi tinggi, saya berkomitmen memberikan hasil terbaik dengan desain modern dan kualitas premium untuk setiap proyek Anda.',
      stats: [
        { number: '10+', label: 'Website Dibuat' },
        { number: '80+', label: 'Undangan Digital' },
        { number: '24/7', label: 'Support' }
      ]
    },
    contact: {
      email: 'muhammadyuusronn@gmail.com',
      whatsapp: '+62 858-9363-8145',
      location: 'Bekasi, Jawa Barat'
    }
  });

  const updateContent = (section, data) => {
    setContent(prev => ({
      ...prev,
      [section]: data
    }));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};
