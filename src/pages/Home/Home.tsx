import React from 'react';
import HeroSection from './components/HeroSection';
// Más adelante importaremos aquí AboutPreview, KitsPreview, etc.

const Home = () => {
  return (
    <div className="w-full">
      {/* Aquí solo llamamos a los componentes en orden */}
      
      {/* 1. La Portada */}
      <HeroSection />

      {/* 2. Próximamente: About Preview */}
      {/* <AboutPreview /> */}

      {/* 3. Próximamente: Kits Preview */}
      {/* <KitsPreview /> */}

    </div>
  );
};

export default Home;