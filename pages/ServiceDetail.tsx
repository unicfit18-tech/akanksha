
import React from 'react';

interface ServiceContent {
  id: string;
  title: string;
  heroImage: string;
  subtitle: string;
  introduction: string;
  offerings: string[];
  sampleMenu: {
    category: string;
    items: string[];
  }[];
}

const serviceData: Record<string, ServiceContent> = {
  corporate: {
    id: 'corporate',
    title: 'Corporate Events',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop',
    subtitle: 'Efficiency Meets Elegance',
    introduction: 'In the world of business, first impressions and sustained energy are key. House of Curry provides professional catering solutions that align with your corporate brand, ensuring high-quality nutrition and seamless service.',
    offerings: [
      'Executive Boardroom Lunches',
      'Full-Day Conference Packages',
      'Team Building Workshops Catering',
      'Product Launch Receptions',
      'Cocktail networking hours'
    ],
    sampleMenu: [
      {
        category: 'Working Lunch',
        items: ['Signature Paneer Lababdar', 'Dal House of Curry', 'Assorted Naan & Kulcha', 'Fresh Seasonal Salads']
      },
      {
        category: 'Networking Appetizers',
        items: ['Mini Lamb Sliders', 'Truffle Mushroom Croquettes', 'Spiced Prawn Satay', 'Vegetable Tempura']
      }
    ]
  },
  private: {
    id: 'private',
    title: 'Private Dining',
    heroImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop',
    subtitle: 'The Luxury of Personalization',
    introduction: 'Experience the intimacy of a fine-dining restaurant in the comfort of your own space. Our private dining service brings together master chefs, bespoke menu design, and world-class table service for your closest circle.',
    offerings: [
      'Multi-course Chef\'s Tasting Menus',
      'At-home Birthday Celebrations',
      'Intimate Anniversary Dinners',
      'Holiday Family Feasts',
      'Personalized Kitchen Experiences'
    ],
    sampleMenu: [
      {
        category: 'Appetizers',
        items: ['Pan-seared Scallops with Curry Emulsion', 'Beetroot & Goat Cheese Galette', 'Crispy Okra Fries']
      },
      {
        category: 'Mains',
        items: ['Slow-cooked Lamb Shank Rogan Josh', 'Hand-picked Wild Mushroom Risotto', 'Grilled Sea Bass with Lemon-Spiced Butter']
      }
    ]
  },
  weddings: {
    id: 'weddings',
    title: 'Weddings',
    heroImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop',
    subtitle: 'A Culinary Celebration of Love',
    introduction: 'Your wedding day is a masterpiece, and the food should be its centerpiece. From the first greeting drink to the final midnight snack, we craft a narrative through flavors that your guests will talk about for years.',
    offerings: [
      'Themed Buffet Installations',
      'Live Interactive Cooking Stations',
      'Traditional Plated Service',
      'Signature Wedding Cakes & Desserts',
      'Post-Ceremony Cocktail Hour'
    ],
    sampleMenu: [
      {
        category: 'Live Stations',
        items: ['Artisanal Chaat Counter', 'Flaming Tandoori Platter', 'Oriental Dim Sum Basket']
      },
      {
        category: 'The Grand Feast',
        items: ['Awadhi Dum Biryani', 'Butter Chicken Classic', 'Slow-churned Gajar Halwa', 'Exotic Fruit Display']
      }
    ]
  },
  galas: {
    id: 'galas',
    title: 'Seasonal Galas',
    heroImage: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=2000&auto=format&fit=crop',
    subtitle: 'Grandeur on a Global Scale',
    introduction: 'For high-profile charity balls, seasonal festivals, and grand openings, our team delivers high-impact catering that matches the scale of your vision. Precision logistics meet creative culinary presentation.',
    offerings: [
      'High-Volume Plated Dinners',
      'Themed Decorative Buffets',
      'VIP Lounge Hospitality',
      'Themed Bar & Mixology Services',
      'Floral & Table Styling Integration'
    ],
    sampleMenu: [
      {
        category: 'Main Course',
        items: ['Salmon with Saffron Cream', 'Filet Mignon with Red Wine reduction', 'Truffle-infused Polenta Cakes']
      },
      {
        category: 'Dessert Bar',
        items: ['Macaron Tower', 'Chocolate Ganache Tartlets', 'Champagne Poached Pears']
      }
    ]
  },
  delivery: {
    id: 'delivery',
    title: 'Delivery & Setup',
    heroImage: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2000&auto=format&fit=crop',
    subtitle: 'Gourmet at Your Doorstep',
    introduction: 'Enjoy the excellence of House of Curry anywhere. Our delivery and setup service provides restaurant-quality meals, professionally packed and artfully set up at your office, home, or event space.',
    offerings: [
      'Gourmet Packed Lunch Boxes',
      'Drop-off Buffet Setup',
      'Tea & Coffee Break Service',
      'Disposable Elegant Catering Kits',
      'Daily Meal Subscriptions for Offices'
    ],
    sampleMenu: [
      {
        category: 'The Gourmet Box',
        items: ['Herb-crusted Chicken Wrap', 'Quinoa & Roast Veggie Salad', 'Greek Yogurt Parfait', 'Artisanal Bread Roll']
      }
    ]
  }
};

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack }) => {
  const content = serviceData[serviceId] || serviceData.corporate;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={content.heroImage} 
          alt={content.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <button 
            onClick={onBack}
            className="absolute top-32 left-10 text-white/60 hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Services
          </button>
          
          <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-xs mb-4">
            {content.subtitle}
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight">
            {content.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-serif text-[#006837] mb-8">Elevating Your <span className="italic text-[#C1272D]">Experience</span></h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-12">
            {content.introduction}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FEFAF6] p-8 rounded-[2rem] border border-red-50">
              <h3 className="text-xl font-bold text-[#006837] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C1272D] text-white flex items-center justify-center text-xs">01</span>
                Core Offerings
              </h3>
              <ul className="space-y-4">
                {content.offerings.map((offering, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg className="mt-1 shrink-0 text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    {offering}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#006837] p-8 rounded-[2rem] text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6">Service Standards</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">Culinary Team</p>
                  <p className="text-sm opacity-80">Led by our Michelin-starred Executive Chef.</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">Presentation</p>
                  <p className="text-sm opacity-80">Bespoke table styling and designer plating.</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">Safety</p>
                  <p className="text-sm opacity-80">HACCP-certified processes and protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white border-2 border-[#006837]/5 p-10 rounded-[3rem] shadow-2xl relative">
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-[#C1272D] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Sample Menu Preview
            </div>
            
            <div className="space-y-12 pt-4">
              {content.sampleMenu.map((section, i) => (
                <div key={i}>
                  <h4 className="text-center text-[#006837] font-serif italic text-2xl mb-6 border-b border-gray-100 pb-4">
                    {section.category}
                  </h4>
                  <ul className="space-y-4 text-center">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-gray-500 font-medium">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
               <button className="w-full py-4 bg-[#006837] text-white rounded-xl font-bold hover:bg-[#C1272D] transition-all uppercase tracking-widest text-xs">
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Brand footer for detail page */}
      <section className="py-24 bg-gray-50 text-center border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-[#006837] mb-6 italic">Our Promise</h3>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Every House of Curry event is managed with a dedicated project lead, ensuring that your specific vision is translated perfectly from concept to reality.
          </p>
          <div className="flex justify-center gap-12">
            <div>
              <p className="text-3xl font-bold text-[#C1272D]">12k+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Daily Meals</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-[#006837]">45+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Expert Chefs</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-[#C1272D]">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Compliance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
