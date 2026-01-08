
import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop",
    title: "Culinary Heritage",
    subtitle: "A legacy of spices and excellence passed through generations.",
    accent: "The Beginning"
  },
  {
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop",
    title: "Bespoke Experiences",
    subtitle: "Tailoring every event to your unique vision and flavor profile.",
    accent: "Our Mission"
  },
  {
    image: "https://images.unsplash.com/photo-1528605248644-14dd04322a11?q=80&w=2000&auto=format&fit=crop",
    title: "Unmatched Hospitality",
    subtitle: "Professional service that meets the highest global standards.",
    accent: "The Standard"
  }
];

export const AboutHeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 max-w-5xl">
            <div className={`transition-all duration-700 delay-300 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">
                {slide.accent}
              </span>
              <h1 className="text-5xl md:text-8xl font-serif text-white leading-none mb-6">
                {slide.title.split(' ')[0]} <br/>
                <span className="italic text-emerald-400">{slide.title.split(' ')[1]}</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
                {slide.subtitle}
              </p>
              <button className="px-10 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-red-600 transition-all uppercase tracking-widest text-xs">
                Explore Our Story
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === current ? 'w-12 bg-emerald-400' : 'w-3 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Side Progress Indicators */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-8">
        {slides.map((_, index) => (
          <div key={index} className="flex items-center gap-4 group cursor-pointer" onClick={() => setCurrent(index)}>
            <span className={`text-[10px] font-bold tracking-widest transition-colors ${index === current ? 'text-white' : 'text-white/20'}`}>
              0{index + 1}
            </span>
            <div className={`w-1 h-8 rounded-full transition-all ${index === current ? 'bg-emerald-400' : 'bg-white/10'}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};
