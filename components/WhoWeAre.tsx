
import React from 'react';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">
          
          {/* LEFT SIDE: Vertical Image */}
          <div className="w-full lg:w-[38%] shrink-0">
            <div className="relative h-full min-h-[500px] lg:min-h-0 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Chefs" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#006837]/5"></div>
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="w-full lg:w-[62%] flex flex-col justify-center py-4">
            {/* Section Heading */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#C1272D]"></span>
                <span className="bg-red-50 text-[#C1272D] px-3 py-1 rounded-full font-bold uppercase tracking-[0.2em] text-[10px]">
                  Our Story
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-serif text-gray-900 leading-tight mb-8">
                The Heritage of <br/>
                <span className="text-[#006837] italic relative inline-block">
                  House of Curry
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="#C1272D" strokeWidth="3" fill="transparent" />
                  </svg>
                </span>
              </h2>
              
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
                House of Curry is a premiere name in high-end catering. Born from a legacy of spice and hospitality, 
                we serve over 12,000 gourmet meals daily, ensuring that every bite tells a story of tradition 
                and uncompromising quality.
              </p>
            </div>

            {/* Content Grid: Stats Box & Quote/List */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              {/* The Brand Stats Box - Now Deep Green as per logo */}
              <div className="bg-[#006837] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                   <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-[1px] bg-red-400"></span>
                    <span className="text-4xl lg:text-5xl font-bold tracking-tighter">25,000<span className="text-red-400">+</span></span>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-red-50 mb-4">Happy Guests Daily</p>
                  <p className="text-xs text-white/70 leading-relaxed">
                    House of Curry is delivering excellence to major corporate hubs across the region every single day.
                  </p>
                </div>
                <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-[#C1272D]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Quote and Checklist */}
              <div className="flex flex-col justify-center space-y-8">
                <div className="border-l-4 border-[#C1272D] pl-6">
                  <p className="text-gray-600 italic font-medium text-sm leading-relaxed">
                    "Trusted by over 40 major corporations including global giants in tech, finance, and logistics."
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-50 rounded-full flex items-center justify-center text-[#C1272D]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span className="text-gray-700 font-bold text-sm">Finest Selection of Authentic Spices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-50 rounded-full flex items-center justify-center text-[#C1272D]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span className="text-gray-700 font-bold text-sm">Hygienic, Chef-Crafted Menus</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTONS: Red and Green Mix */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              <button className="px-8 py-4 bg-[#C1272D] text-white rounded-xl font-bold hover:bg-[#006837] transition-all shadow-lg hover:shadow-red-200 flex items-center gap-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call House of Curry
              </button>
              <button className="px-8 py-4 border-2 border-[#006837] text-[#006837] rounded-xl font-bold hover:bg-[#006837] hover:text-white transition-all flex items-center gap-2">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
