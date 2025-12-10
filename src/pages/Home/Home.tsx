import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

// Más adelante importaremos aquí AboutPreview, KitsPreview, etc.

const Home = () => {
  return (
    <div className="w-full">
      
      
      
      <HeroSection />

      
      <AboutSection/>

      {/* 3. Próximamente: Kits Preview */}
      {/* <KitsPreview /> */}

    </div>
  );
};

export default Home;