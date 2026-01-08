
import React, { useState, useRef } from 'react';

interface HeaderProps {
  onViewChange?: (view: 'home' | 'about' | 'services' | 'blog' | 'contact') => void;
  onServiceSelect?: (serviceId: string) => void;
  currentView?: 'home' | 'about' | 'services' | 'service-detail' | 'blog' | 'contact';
}

export const Header: React.FC<HeaderProps> = ({ onViewChange, onServiceSelect, currentView = 'home' }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const services = [
    { id: 'corporate', title: 'Corporate Events', description: 'Professional catering for boardrooms and galas.' },
    { id: 'private', title: 'Private Dining', description: 'Intimate culinary experiences at your location.' },
    { id: 'weddings', title: 'Weddings', description: 'Tailored menus for your most special day.' },
    { id: 'galas', title: 'Seasonal Galas', description: 'Large scale festive and charity event solutions.' },
    { id: 'delivery', title: 'Delivery & Setup', description: 'Gourmet meals delivered ready to serve.' },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const isDark = currentView === 'about' || currentView === 'service-detail' || currentView === 'contact';

  return (
    <nav className={`absolute top-0 left-0 w-full z-40 px-6 py-6 md:px-12 flex items-center justify-between ${isDark ? 'bg-transparent' : ''}`}>
      <div 
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => onViewChange?.('home')}
      >
        <div className="w-12 h-12 bg-[#C1272D] rounded-xl flex items-center justify-center text-white font-bold shadow-lg border-2 border-[#006837] relative overflow-hidden group">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="z-10"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>
          <div className="absolute inset-0 bg-[#006837] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </div>
        <div className="flex flex-col">
          <span className={`text-xl font-bold tracking-tighter uppercase leading-none ${isDark ? 'text-white' : 'text-[#006837]'}`}>
            House of Curry
          </span>
          <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${isDark ? 'text-emerald-400' : 'text-[#C1272D]'}`}>Catering Experts</span>
        </div>
      </div>
      
      <div className={`hidden md:flex items-center gap-8 lg:gap-10 text-xs lg:text-sm font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-[#006837]'}`}>
        <button 
          onClick={() => onViewChange?.('home')}
          className={`hover:text-[#C1272D] transition-colors border-b-2 pb-1 ${currentView === 'home' ? 'border-[#C1272D]' : 'border-transparent'}`}
        >
          Home
        </button>
        <button 
          onClick={() => onViewChange?.('about')}
          className={`hover:text-[#C1272D] transition-colors border-b-2 pb-1 ${currentView === 'about' ? 'border-emerald-400' : 'border-transparent'}`}
        >
          About Us
        </button>
        
        <div 
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            onClick={() => onViewChange?.('services')}
            className={`flex items-center gap-1 hover:text-[#C1272D] transition-colors uppercase tracking-widest outline-none border-b-2 pb-1 ${currentView === 'services' || currentView === 'service-detail' ? 'border-emerald-400' : 'border-transparent'} ${isServicesOpen ? 'text-[#C1272D]' : ''}`}
          >
            Services
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>

          <div 
            className={`absolute left-0 mt-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-top-left ${
              isServicesOpen 
                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="p-2">
              {services.map((service, index) => (
                <button 
                  key={index} 
                  onClick={() => {
                    onServiceSelect?.(service.id);
                    setIsServicesOpen(false);
                  }}
                  className="w-full text-left block p-4 rounded-xl hover:bg-red-50 transition-colors group/item"
                >
                  <p className="font-bold text-gray-900 group-hover/item:text-[#C1272D] transition-colors mb-0.5">
                    {service.title}
                  </p>
                  <p className="text-[11px] text-gray-500 lowercase tracking-normal font-normal">
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
            <div className="bg-gray-50 p-4 border-t border-gray-100">
              <button 
                onClick={() => {
                  onViewChange?.('services');
                  setIsServicesOpen(false);
                }}
                className="w-full text-[10px] font-bold text-[#006837] hover:text-[#C1272D] transition-colors flex items-center justify-between uppercase tracking-widest"
              >
                VIEW ALL SERVICES
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>

        <button 
          onClick={() => onViewChange?.('blog')}
          className={`hover:text-[#C1272D] transition-colors border-b-2 pb-1 ${currentView === 'blog' ? 'border-[#C1272D]' : 'border-transparent'}`}
        >
          Blog
        </button>
        <button 
          onClick={() => onViewChange?.('contact')}
          className={`hover:text-[#C1272D] transition-colors border-b-2 pb-1 ${currentView === 'contact' ? 'border-[#C1272D]' : 'border-transparent'}`}
        >
          Contact Us
        </button>
      </div>

      <div>
        <button 
          onClick={() => onViewChange?.('contact')}
          className="px-6 py-3 bg-[#006837] text-white rounded-full text-sm font-bold hover:bg-[#C1272D] transition-all shadow-lg hover:shadow-red-200 uppercase tracking-wider"
        >
          Get a Quote
        </button>
      </div>
    </nav>
  );
};
