import React, { useEffect } from 'react';
import { initFlowbite } from 'flowbite';

const Navbar = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    // CAMBIO 1: bg-neutral-primary -> bg-white
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* LOGO */}
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
            {/* CAMBIO 2: text-heading -> text-black */}
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">Flowbite</span>
        </a>

        {/* BOTONES DERECHA */}
        <div className="
        flex md:order-2 
        space-x-3
        md:space-x-0 
        rtl:space-x-reverse"
        >
            {/* CAMBIO 3: bg-brand -> bg-blue-700 (Azul estándar) */}
            <button type="button" className="text-white
            bg-blue-700
            hover:bg-blue-800
            focus:ring-4
            focus:outline-none
            focus:ring-blue-300
            font-medium
            rounded-lg
            text-sm
            px-4 
            py-2 
            text-center 
            shadow-lg">
              Get started
            </button>
            
            {/* BOTÓN MÓVIL (Hamburguesa) */}
            <button 
              data-collapse-toggle="navbar-sticky" 
              type="button" 
              className="inline-flex
            items-center
            p-2
            w-10
            h-10
            justify-center
            text-sm
            text-gray-500
            rounded-lg 
            md:hidden
            hover:bg-gray-100
            focus:outline-none
            focus:ring-2
            focus:ring-gray-200" 
              aria-controls="navbar-sticky" 
              aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>

        {/* ENLACES DEL MENÚ */}
        <div className="
        items-center
        justify-between
        hidden w-full
        md:flex
        md:w-auto 
        md:order-1
        " id="navbar-sticky">
          <ul className="
        flex flex-col p-4
        md:p-0 mt-4 
        font-medium
        border border-gray-100 
        rounded-lg
        bg-gray-50
         md:space-x-8 
        rtl:space-x-reverse
        md:flex-row 
        md:mt-0
        md:border-0
        md:bg-white">
            <li>
              {/* CAMBIO 4: Colores de enlaces activos */}
              <a href="#" className="
              block py-2 px-3
              text-white bg-blue-700
              rounded-md
              md:bg-transparent
              md:text-blue-700
              md:p-0"
              aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="
              block py-2 px-3 
              text-gray-900
              rounded-md 
              hover:bg-gray-100
              md:hover:bg-transparent
              md:hover:text-blue-700
              md:p-0">Sobre nosotros</a>
            </li>
            <li>
              <a href="#" className="
              block py-2 px-3
              text-gray-900 
              rounded-md 
              hover:bg-gray-100
              md:hover:bg-transparent
              md:hover:text-blue-700
              md:p-0">Tienda</a>
            </li>
            <li>
              <a href="#" className="
              block py-2 px-3 
              text-gray-900
              rounded-md
              hover:bg-gray-100
              md:hover:bg-transparent
              md:hover:text-blue-700
              md:p-0">Kits</a>
            </li>
            <li>
              <a href="#" className="
              block py-2 px-3 
              text-gray-900
              rounded-md 
              hover:bg-gray-100
              md:hover:bg-transparent
              md:hover:text-blue-700
              md:p-0">Contactanos</a>
            </li>
            <li>
              <a href="#" className="
              block py-2 px-3 
              text-gray-900
              rounded-md 
              hover:bg-gray-100
              md:hover:bg-transparent
              md:hover:text-blue-700
              md:p-0">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;