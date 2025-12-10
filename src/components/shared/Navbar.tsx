import React, { useEffect } from 'react';
import { initFlowbite } from 'flowbite';

const Navbar = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <nav className="bg-transparent fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* --- LOGO --- */}
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Sole</span>
        </a>

        {/* --- BOTONES DERECHA --- */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            
            {/* Botón "Comencemos" translúcido */}
            <button type="button" className="
            text-white
            bg-white/10              
            backdrop-blur-md         
            border border-white/30
            hover:bg-white/20        
            focus:ring-4 focus:outline-none focus:ring-white/60
            font-medium
            rounded-full
            text-medium
            px-4
            py-2
            text-center 
            transition-transform hover:scale-105
            shadow-lg"
            >
              Comencemos
            </button>
            
            {/* Botón Menú Móvil (Hamburguesa) */}
            <button 
              data-collapse-toggle="navbar-sticky" 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-200" 
              aria-controls="navbar-sticky" 
              aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>

        
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          
          
          <ul className="
            flex flex-col p-4 md:p-0 mt-4 
            font-medium 
            md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 
            bg-transparent md:bg-transparent /* Aseguramos transparencia */
            border-0 /* Quitamos bordes */
          ">
            
            <li>
              <a href="#" className="
              block py-2 px-3
              text-white
              rounded-md
              md:bg-transparent
              md:text-green-600
              md:p-0
              " aria-current="page">
              Home
              </a>
            </li>

            <li>
              <a href="#" className="
              block py-2 px-3
              text-white
              rounded-md 
              hover:text-green-600
              md:hover:bg-transparent 
              md:p-0
              transition-colors">
                Sobre nosotros
              </a>
            </li>

            <li>
              <a href="#" className="
              block py-2 px-3
              text-white 
              rounded-md
              hover:text-green-600
              md:hover:bg-transparent
              md:p-0
              transition-colors">
                Tienda
              </a>
            </li>

            <li>
              <a href="#" className="
              block py-2 px-3
              text-white 
              rounded-md
              hover:text-green-600
              md:hover:bg-transparent
              md:p-0
              transition-colors">
                Kits
              </a>
            </li>

            <li>
              <a href="#" className="
              block py-2 px-3 
              text-white
              rounded-md
              hover:text-green-600
              md:hover:bg-transparent
              md:p-0
              transition-colors">
                Contactanos
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;