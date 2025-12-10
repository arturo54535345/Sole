import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewsCarousel from './ReviewsCarousel'; 

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/*  IZQUIERDA: TEXTO  */}
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-green-600 font-bold tracking-widest text-sm uppercase">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Tu compañero fiel en cada etapa del Camino.
            </h2>
            <div className="text-gray-600 text-lg space-y-4">
              <p>
                En <strong>Sole</strong>, somos apasionados del senderismo que entienden lo que significa el Camino de Santiago. No somos solo una tienda; somos peregrinos ayudando a peregrinos.
              </p>
              <p>
                Nuestra misión es equiparte con lo esencial, ligero y resistente, para que tu única preocupación sea disfrutar de los paisajes y la experiencia espiritual. Conocemos cada ruta y seleccionamos cada producto pensando en tus pies y tu espalda.
              </p>
            </div>
            <button 
              onClick={() => navigate('/about')}
              className="mt-4 px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg"
            >
              Conoce nuestra historia
            </button>
          </div>

          {/* --- DERECHA: CARRUSEL */}

          <div className="w-full lg:w-1/2 relative h-[400px]">
            
            {/* Contenedor */}
            <div className="
              relative z-10 w-full h-full 
              overflow-hidden   
              rounded-3xl       
              bg-gray-100
              
            ">
              <ReviewsCarousel />
            </div>
        
            <div className="
            absolute -bottom-10 -left-10 w-40 h-40
            bg-blue-200
            rounded-full
            blur-3xl -z-10
            rounded 3-xl
            "
            >
            </div>

          </div>

        </div>

       

      </div>
    </section>
  );
};

export default AboutSection;