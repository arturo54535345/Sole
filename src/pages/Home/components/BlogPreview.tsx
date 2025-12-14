import React from "react";
import { Link } from "react-router-dom";

const blogPreviews = [
  {
    id: "1",
    title: "5 Claves antes de empezar",
    category: "Preparación",
    image: "https://images.unsplash.com/photo-1533222481259-ce70b163f867?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Camino Francés en Otoño",
    category: "Rutas",
    image: "https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Guía de equipaje ligera",
    category: "Consejos",
    image: "https://images.unsplash.com/photo-1623164344075-8eb34c9c43d8?q=80&w=800&auto=format&fit=crop",
  },
];

export function BlogPreview() {
  return (
    <section className="w-full px-4 md:px-6 py-24 bg-white rounded-t-[3rem] -mt-8 relative z-10">
      
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333D29]">
            Diario <span className="text-[#B6AD90] font-serif italic">Sole</span>
          </h2>
          
          {/* BOTÓN "LEER TODO" (ANIMACIÓN CORREGIDA) */}
          <Link to="/blog" className="hidden md:block">
            <button
              className="
                group
                relative
                px-8 
                py-3 
                bg-transparent 
                border 
                border-[#333D29] 
                text-[#333D29]
                font-bold 
                text-sm
                uppercase
                tracking-widest
                rounded-full 
                overflow-hidden
                transition-all 
                duration-300
              "
            >
              {/* Capa de relleno animada (Swipe) */}
              <span className="absolute inset-0 w-full h-full bg-[#333D29] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              
              {/* Texto que cambia de color */}
              <span className="relative z-10 group-hover:text-[#F0FDF4] flex items-center gap-2">
                Leer todo
              </span>
            </button>
          </Link>
        </div>

        {/* GRID DE BLOGS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPreviews.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="group cursor-pointer">
              {/* IMAGEN CON BORDE REDONDEADO SUAVE */}
              <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* TEXTO MINIMAL */}
              <div className="pr-4">
                <span className="text-xs font-bold text-[#582F0E] uppercase tracking-wider mb-2 block">
                  {blog.category}
                </span>
                <h3 className="text-2xl font-bold text-[#333D29] leading-snug group-hover:text-[#B6AD90] transition-colors">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTÓN MÓVIL (TAMBIÉN CORREGIDO PARA COHERENCIA) */}
        <div className="mt-12 text-center md:hidden">
           <Link to="/blog">
            <button
              className="
                group
                relative
                px-8 
                py-3 
                bg-transparent 
                border 
                border-[#333D29] 
                text-[#333D29]
                font-bold 
                text-sm
                uppercase
                tracking-widest
                rounded-full 
                overflow-hidden
                transition-all 
                duration-300
              "
            >
              <span className="absolute inset-0 w-full h-full bg-[#333D29] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              <span className="relative z-10 group-hover:text-[#F0FDF4]">
                Ir al Blog
              </span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default BlogPreview;