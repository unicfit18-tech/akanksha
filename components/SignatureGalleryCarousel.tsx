
import React, { useState, useEffect, useRef } from 'react';

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1600&auto=format&fit=crop",
    title: "Signature Saffron King Prawns",
    category: "Appetizer Excellence",
    description: "Marinated in 24-hour aged spices and finished in our traditional clay oven."
  },
  {
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1600&auto=format&fit=crop",
    title: "Legacy Awadhi Dum Biryani",
    category: "Heritage Main Course",
    description: "Long-grain Basmati rice steamed with hand-picked saffron and tender choice cuts."
  },
  {
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1600&auto=format&fit=crop",
    title: "Artisanal Dessert Selection",
    category: "Sweet Finales",
    description: "A symphony of modern fusion desserts that celebrate traditional Indian sugarcraft."
  },
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop",
    title: "Gala Event Styling",
    category: "Event Hospitality",
    description: "Beyond the plate — we curate the entire sensory environment for your guests."
  }
];

export const SignatureGalleryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section 
      className="py-24 bg-white border-t border-gray-50 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-[#C1272D]"></span>
              <span className="text-[#C1272D] font-bold uppercase tracking-[0.3em] text-[10px]">The Signature Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#006837]">
              Culinary <span className="italic text-[#C1272D]">Highlights</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#006837] hover:bg-[#006837] hover:text-white transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#006837] hover:bg-[#006837] hover:text-white transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentIndex 
                  ? 'opacity-100 scale-100 translate-x-0' 
                  : index < currentIndex 
                    ? 'opacity-0 scale-110 -translate-x-full' 
                    : 'opacity-0 scale-110 translate-x-full'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
                <div className={`transition-all duration-700 delay-300 transform ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
                    {item.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                    {item.description}
                  </p>
                  <button className="px-8 py-3 bg-[#C1272D] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#006837] transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-20">
            <div 
              className="h-full bg-emerald-400 transition-all duration-[5000ms] ease-linear"
              style={{ 
                width: isPaused ? '0%' : '100%', 
                key: currentIndex 
              } as any}
            ></div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {galleryItems.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'w-12 bg-[#006837]' : 'w-3 bg-gray-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
