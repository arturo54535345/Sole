import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import KitsSection from './components/KitsPreview';


const Home = () => {
  return (
    <div className="w-full">
      
      
      
      <HeroSection />

      
      <AboutSection/>


      <KitsSection/>

    </div>
  );
};

export default Home;