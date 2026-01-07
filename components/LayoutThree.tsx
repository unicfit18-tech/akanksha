
import React from 'react';

export const LayoutThree: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover" 
          alt="Cocktail Bar" 
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col items-center">
          <div className="flex gap-1 text-emerald-400 mb-4">
             {[1,2,3,4,5].map(i => <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
          </div>
          <p className="text-white/60 uppercase tracking-[0.5em] text-xs font-bold">The Gold Standard in Catering</p>
        </div>

        <h1 className="text-6xl md:text-9xl font-bold text-white mb-10 tracking-tight leading-none">
          UNFORGETTABLE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">EXCELLENCE</span>
        </h1>

        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          From intimate executive retreats to grand-scale corporate galas, we deliver precise hospitality and innovative culinary craft.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-12 py-5 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-all shadow-xl hover:shadow-emerald-500/20 transform hover:-translate-y-1">
            Browse Experiences
          </button>
          <button className="w-full sm:w-auto px-12 py-5 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/20 transition-all">
            Contact Specialist
          </button>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="absolute bottom-12 left-0 w-full px-12 hidden lg:flex justify-between items-end border-t border-white/10 pt-8">
        <div className="flex gap-16">
          <div>
            <p className="text-3xl font-bold text-white">478+</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">Global Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">15k+</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">Plates Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">99%</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">Satisfaction</p>
          </div>
        </div>
        <div className="text-white/30 text-xs font-mono uppercase tracking-tighter">
          EST. 2012 / LONDON & NEW YORK
        </div>
      </div>
    </section>
  );
};
