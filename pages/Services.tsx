
import React from 'react';

const serviceCategories = [
  {
    id: 'corporate',
    title: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    description: 'Elevate your professional gatherings with bespoke catering solutions tailored for impact and efficiency.'
  },
  {
    id: 'private',
    title: 'Private Dining',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
    description: 'Transform your home or venue into a Michelin-starred experience with our private chefs and staff.'
  },
  {
    id: 'weddings',
    title: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    description: 'The ultimate culinary journey for your most special day, from grand appetizers to signature desserts.'
  },
  {
    id: 'galas',
    title: 'Seasonal Galas',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=1200&auto=format&fit=crop',
    description: 'Large-scale events require precision and flair. Our gala catering handles high volume without sacrificing quality.'
  },
  {
    id: 'delivery',
    title: 'Delivery & Setup',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1200&auto=format&fit=crop',
    description: 'High-end gourmet meals delivered directly to your doorstep, perfectly presented and ready to enjoy.'
  },
  {
    id: 'industrial',
    title: 'Industrial Catering',
    image: 'https://images.unsplash.com/photo-1513135065346-a098a63a73ee?q=80&w=1200&auto=format&fit=crop',
    description: 'Reliable, healthy, and high-volume meal solutions for industrial workforces and large campuses.'
  }
];

interface ServicesProps {
  onServiceSelect: (id: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#C1272D]"></span>
              <span className="text-[#C1272D] font-bold uppercase tracking-[0.3em] text-xs">Our Expertise</span>
              <span className="w-12 h-[1px] bg-[#C1272D]"></span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#006837] mb-8">
            Tailored <span className="italic">Catering</span> Solutions
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
            From boardroom lunches to grand wedding receptions, House of Curry provides end-to-end hospitality that reflects your style and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
            <div 
              key={service.id} 
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => onServiceSelect(service.id)}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm mb-8 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest border-t border-white/20 pt-6 group-hover:gap-5 transition-all">
                  View Service Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="mt-32 bg-[#006837] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
              Looking for a <span className="italic text-emerald-400">Custom</span> <br/> Catering Concept?
            </h2>
            <p className="text-emerald-100/70 text-lg mb-12 max-w-2xl mx-auto">
              Our culinary consultants are ready to help you craft a unique menu that fits your exact requirements and guest preferences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-[#C1272D] text-white rounded-full font-bold hover:bg-white hover:text-[#006837] transition-all shadow-xl uppercase tracking-widest text-sm">
                Request a Consultation
              </button>
              <button className="w-full sm:w-auto px-12 py-5 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/20 transition-all uppercase tracking-widest text-sm">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
