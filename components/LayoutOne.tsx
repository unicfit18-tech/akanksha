
import React from 'react';

export const LayoutOne: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-[#FEFAF6]">
      {/* Left Side: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-32 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#C1272D] rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit border border-red-100">
          <span className="w-2 h-2 bg-[#C1272D] rounded-full animate-pulse"></span>
          Authentic Multi-Cuisine Catering
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-gray-900 mb-8">
          A Symphony of <span className="text-[#006837] italic">Spices</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
          House of Curry delivers unforgettable dining experiences, blending traditional heritage with modern culinary precision for your most important events.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="px-8 py-4 bg-[#006837] text-white rounded-lg font-bold flex items-center justify-center gap-2 group transition-all hover:bg-[#C1272D]">
            Explore Services
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <button className="px-8 py-4 border-2 border-[#006837] text-[#006837] rounded-lg font-bold hover:bg-[#006837] hover:text-white transition-all">
            View Menu
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map(i => (
              <img 
                key={i} 
                className="w-12 h-12 rounded-full border-4 border-white object-cover" 
                src={`https://picsum.photos/seed/curry${i}/200`} 
                alt="Client" 
              />
            ))}
          </div>
          <div>
            <div className="flex text-orange-500 gap-0.5 mb-1">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            <p className="text-sm font-bold text-gray-900">Rated #1 in North India & beyond</p>
          </div>
        </div>
      </div>

      {/* Right Side: Visual */}
      <div className="w-full md:w-1/2 relative h-[50vh] md:h-screen">
        <img 
          src="https://images.unsplash.com/photo-1540333563398-9942f1696084?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover" 
          alt="Curry Presentation" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FEFAF6] via-transparent to-transparent hidden md:block"></div>
        
        {/* Decorative Floating Element */}
        <div className="absolute bottom-12 left-12 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-xs hidden lg:block border border-red-50">
          <p className="text-[#C1272D] font-serif italic text-xl mb-2">"True culinary art."</p>
          <p className="text-[10px] text-[#006837] font-bold uppercase tracking-[0.2em]">The House of Curry Standard</p>
        </div>
      </div>
    </section>
  );
};
