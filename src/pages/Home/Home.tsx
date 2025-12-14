import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import KitsSection from './components/KitsPreview';
import BlogPreview from './components/BlogPreview';


const Home = () => {
  return (
    <div className="w-full">
      
      <HeroSection />

      
      <AboutSection/>


      <KitsSection/>


      <BlogPreview/>

    </div>
  );
};

export default Home;