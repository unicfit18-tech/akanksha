
import React, { useState } from 'react';

interface ChoiceReason {
  id: string;
  title: string;
  description: string;
}

const reasons: ChoiceReason[] = [
  {
    id: '01',
    title: "Master Spice Blenders & Chefs",
    description: "Our culinary team consists of industry veterans who specialize in authentic regional cuisines and contemporary fusion."
  },
  {
    id: '02',
    title: "Bespoke Culinary Concepts",
    description: "No two events are the same. We craft menus that align perfectly with your theme, dietary needs, and flavor preferences."
  },
  {
    id: '03',
    title: "Heritage-Sourced Ingredients",
    description: "We use exclusively sourced spices and the freshest farm-to-table produce to ensure every dish is vibrant and flavorful."
  },
  {
    id: '04',
    title: "Elite Hospitality Professionals",
    description: "Our service staff is trained in high-end hospitality to provide a seamless and dignified dining experience for your guests."
  }
];

export const WhyChoiceUs: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F9FBFA] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M800 800C800 358.172 441.828 0 0 0" stroke="#006837" strokeWidth="0.5" strokeDasharray="10 10"/>
          <path d="M800 600C800 268.629 531.371 0 200 0" stroke="#006837" strokeWidth="0.5" strokeDasharray="10 10"/>
        </svg>
      </div>

      <div className="w-[90%] mx-auto relative z-10">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            {/* Section Badge */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#006837]"></span>
              <span className="bg-white px-4 py-1.5 rounded-full text-[#006837] font-bold uppercase tracking-[0.3em] text-[11px] shadow-sm border border-emerald-100">
                Why Choice Us
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#006837] leading-tight">
              Exceptional Catering Service <br/>
              <span className="text-[#C1272D] italic relative inline-block">
                Unforgettable
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 0 100 10" stroke="#C1272D" strokeWidth="4" fill="transparent" />
                </svg>
              </span> Flavors For Your Guests.
            </h2>
          </div>

          <button className="px-10 py-4 bg-[#D1E995] text-[#006837] rounded-full font-bold flex items-center gap-3 hover:bg-[#006837] hover:text-white transition-all shadow-lg group">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* List Section */}
          <div className="w-full lg:w-1/2 space-y-0">
            {reasons.map((reason, index) => (
              <div 
                key={reason.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`group relative py-8 border-b border-emerald-100 transition-all cursor-pointer flex items-center justify-between ${hoveredIndex === index ? 'pl-4' : ''}`}
              >
                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-[#006837]' : 'text-gray-400'}`}>
                    {reason.title}
                  </h3>
                  <div className={`overflow-hidden transition-all duration-500 max-h-0 ${hoveredIndex === index ? 'max-h-24 mt-4' : ''}`}>
                    <p className="text-gray-500 max-w-md leading-relaxed text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
                
                <div className={`transition-all duration-300 transform ${hoveredIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006837" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>

                {/* Vertical Active Indicator */}
                <div className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#006837] transition-all duration-300 ${hoveredIndex === index ? 'scale-y-100' : 'scale-y-0 opacity-0'}`}></div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[450px] group/img">
              <img 
                src="https://images.unsplash.com/photo-1577214286171-eaf19967bf5e?q=80&w=1200&auto=format&fit=crop" 
                alt="Chefs in action" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
              />
              {/* Image Overlay with Flame-like Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C1272D]/30 to-transparent mix-blend-overlay"></div>
              
              {/* Floating Action Button */}
              <div className="absolute bottom-10 left-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform border border-emerald-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-45deg]"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
            
            {/* Background Accent Square */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-50 -z-10 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
