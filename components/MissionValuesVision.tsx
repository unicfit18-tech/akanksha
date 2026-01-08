
import React from 'react';

const values = [
  {
    title: "Quality First",
    description: "Uncompromising standards for ingredients and culinary preparation.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
  },
  {
    title: "Authenticity",
    description: "Staying true to our heritage and regional spice profiles.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
  },
  {
    title: "Innovation",
    description: "Constantly evolving our menus and service formats.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
  }
];

export const MissionValuesVision: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Mission & Vision Column */}
          <div className="space-y-16">
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-[#C1272D]"></span>
                <span className="text-[#C1272D] font-bold uppercase tracking-[0.3em] text-[10px]">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#006837] mb-6 leading-tight">
                To Serve <span className="italic">Excellence</span> <br/> 
                In Every Grain.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                Our mission is to serve more than just food; we create moments of connection and joy through authentic, chef-crafted culinary experiences that honor tradition while embracing modern innovation.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-[#006837]"></span>
                <span className="text-[#006837] font-bold uppercase tracking-[0.3em] text-[10px]">
                  Our Vision
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#C1272D] mb-6 leading-tight">
                Global Standards, <br/> 
                <span className="italic text-[#006837]">Local Heritage.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                To become the most trusted global name in premium catering, recognized for our commitment to quality, diversity of flavor, and sustainable hospitality excellence across corporate and private sectors.
              </p>
            </div>
          </div>

          {/* Image Feature Column */}
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl relative z-10 border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef expertise" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#006837]/40 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-gray-50 hidden md:block">
              <p className="text-4xl font-serif text-[#C1272D] mb-1">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#006837]">Customer Obsessed</p>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-10 -right-10 w-full h-full bg-[#006837]/5 -z-10 rounded-[3rem]"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="pt-20 border-t border-gray-100">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-[#006837]">Our Core <span className="text-[#C1272D] italic">Values</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className="p-10 bg-[#FEFAF6] rounded-[2.5rem] border border-red-50/50 hover:shadow-xl transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#C1272D] shadow-sm mb-6 group-hover:bg-[#C1272D] group-hover:text-white transition-colors">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-[#006837] mb-4">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
