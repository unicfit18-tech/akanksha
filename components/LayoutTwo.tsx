
import React from 'react';

export const LayoutTwo: React.FC = () => {
  return (
    <section className="min-h-screen bg-emerald-950 pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 text-white">
          <span className="text-emerald-400 font-mono text-sm tracking-[0.4em] uppercase mb-4 block">Experience Perfection</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Curated <br/> <span className="italic text-emerald-400">Plates</span>
          </h1>
          <p className="text-emerald-100/70 text-lg mb-12 max-w-md">
            Elevating professional environments with Michelin-inspired catering, tailored for boardrooms, gala dinners, and everything in between.
          </p>
          
          <div className="space-y-6">
            <button className="w-full md:w-auto px-10 py-5 bg-white text-emerald-950 rounded-full font-bold hover:bg-emerald-100 transition-all flex items-center justify-center gap-3">
              Explore Our Services
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <div className="flex items-center gap-4 text-emerald-400/80">
              <span className="h-[1px] w-12 bg-emerald-400/30"></span>
              <span className="text-sm font-medium uppercase tracking-widest">Trusted by Google, Apple & Meta</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 row-span-2 h-[400px] rounded-3xl overflow-hidden shadow-2xl transform rotate-1">
              <img src="https://images.unsplash.com/photo-1528605248644-14dd04322a11?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Event" />
            </div>
            <div className="h-[250px] rounded-3xl overflow-hidden shadow-2xl transform -rotate-3">
              <img src="https://images.unsplash.com/photo-1547573854-74d2a71d0827?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Appetizer" />
            </div>
            <div className="h-[250px] rounded-3xl overflow-hidden shadow-2xl mt-[-50px] ml-4">
              <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Dining" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
