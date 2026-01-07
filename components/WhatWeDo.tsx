
import React from 'react';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  isLight?: boolean;
}

const services: ServiceCard[] = [
  {
    title: "CAFETERIA SERVICES",
    description: "Serving fresh meals that enhance your team's productivity and workplace happiness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>
    ),
    imageUrl: "https://images.unsplash.com/photo-1547573854-74d2a71d0827?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "CORPORATE CATERING",
    description: "Elevating everyday meals into exceptional corporate dining experiences your team deserves.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
    ),
    imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "INDUSTRIAL CATERING",
    description: "Reliable catering tailored for industries, ensuring workforce satisfaction and nutrition.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    imageUrl: "https://images.unsplash.com/photo-1513135065346-a098a63a73ee?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "PACKED FOOD SERVICES",
    description: "Hygienic, convenient, and timely packed meals—ideal for office lunches and special events.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#C1272D]"><path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"/><path d="m3 8 9 6 9-6"/><path d="M3 8v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8"/></svg>
    ),
    imageUrl: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=600&auto=format&fit=crop",
    isLight: true
  },
  {
    title: "ONSITE CATERING",
    description: "Bringing the kitchen to you with live stations and personalized chef experiences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><path d="M13 13h4"/><path d="M13 17h4"/></svg>
    ),
    imageUrl: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "HOSPITAL CAFETERIA",
    description: "Nutritious, medically-compliant meals prepared with the highest hygiene standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>
    ),
    imageUrl: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "SALADS & LUNCHES",
    description: "Light, fresh, and energy-boosting options for modern professionals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Z"/><path d="M12 22a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7Z"/></svg>
    ),
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "MULTI-CUISINE MENU",
    description: "Global flavors from Asian to Continental, tailored to diverse palates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20"/><path d="M2 12h20"/><path d="M12 2a14.5 14.5 0 0 1 0 20"/></svg>
    ),
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop"
  }
];

export const WhatWeDo: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FEFAF6] to-white relative overflow-hidden">
      {/* Decorative Spice Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="spicePattern" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q 25 20 50 10 T 100 10" fill="none" stroke="#C1272D" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#spicePattern)" />
        </svg>
      </div>

      <div className="w-[90%] mx-auto relative z-10 text-center">
        {/* Section Badge */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#006837]"></span>
            <span className="bg-white px-4 py-1.5 rounded-full text-[#006837] font-bold uppercase tracking-[0.3em] text-[10px] shadow-sm border border-red-50/50">
              What We Do
            </span>
            <span className="w-12 h-[1px] bg-[#006837]"></span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#006837] leading-tight mb-16 max-w-4xl mx-auto">
          We Have Services For <br/>
          <span className="text-[#C1272D] italic relative inline-block mx-2">
            Catering
            <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M0 10 Q 50 0 100 10" stroke="#006837" strokeWidth="4" fill="transparent" />
            </svg>
          </span> 
          Tailored To Your Event.
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative h-[260px] rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center p-6 cursor-pointer ${
                service.isLight ? 'bg-white shadow-md border border-red-50' : 'bg-[#006837]'
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 ${service.isLight ? 'bg-white/95' : 'bg-[#006837]/95'}`}></div>
              </div>

              <div className="relative z-10 flex flex-col h-full items-center w-full">
                <div className={`mb-3 p-3 rounded-xl transition-all duration-500 group-hover:scale-105 ${
                  service.isLight ? 'bg-red-50 text-[#C1272D]' : 'bg-white/10 text-red-300'
                }`}>
                  {service.icon}
                </div>
                
                <h3 className={`text-base font-bold tracking-wider mb-2 leading-tight transition-colors duration-300 ${
                  service.isLight ? 'text-gray-900' : 'text-white'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-[13px] leading-snug mb-4 transition-colors duration-300 px-2 line-clamp-2 ${
                  service.isLight ? 'text-gray-500' : 'text-red-50/70'
                }`}>
                  {service.description}
                </p>

                <div className="mt-auto">
                  <a href="#" className={`flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] transition-all duration-300 group-hover:gap-3 ${
                    service.isLight ? 'text-[#C1272D]' : 'text-red-400'
                  }`}>
                    LEARN MORE
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
