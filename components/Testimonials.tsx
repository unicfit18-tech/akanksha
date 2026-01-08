
import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "Head of Operations",
    company: "Zentech Solutions",
    quote: "House of Curry transformed our annual corporate gala. The multi-cuisine spread was exceptional, but it was the authentic spice profiles that truly stole the show. Their staff is pure class.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Anjali Sharma",
    role: "Senior Event Planner",
    company: "Luxe Weddings & Co.",
    quote: "Working with House of Curry is a dream for any planner. Their attention to culinary detail and the way they present traditional flavors in a modern, elegant way is unmatched in the industry.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Director",
    company: "Global Logistics Group",
    quote: "We've used their cafeteria services for three years now. The consistency and hygiene standards are world-class. Our employees genuinely look forward to lunch every day.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background spice swirl */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-[0.02]">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 500 Q 300 100 500 500 T 850 500" fill="none" stroke="#C1272D" strokeWidth="2" />
          <path d="M150 550 Q 300 150 500 550 T 850 550" fill="none" stroke="#006837" strokeWidth="2" />
        </svg>
      </div>

      <div className="w-[90%] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#C1272D]"></span>
              <span className="text-[#C1272D] font-bold uppercase tracking-[0.3em] text-[11px]">
                Testimonials
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#006837] leading-tight mb-8">
              What Our <br/>
              <span className="italic relative inline-block">
                Clients
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="#006837" strokeWidth="3" fill="transparent" />
                </svg>
              </span> Say About Us.
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
              We take pride in our culinary legacy. From small executive meetings to massive corporate events, we treat every plate like a masterpiece.
            </p>

            <div className="flex gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full border border-[#006837]/20 flex items-center justify-center text-[#006837] hover:bg-[#006837] hover:text-white transition-all shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-[#006837] flex items-center justify-center text-white hover:bg-[#C1272D] transition-all shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          {/* Right Side: Large Quote Card */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-[#FEFAF6] p-10 md:p-16 rounded-[3rem] shadow-2xl relative border border-red-50">
              {/* Big Quote Icon */}
              <div className="absolute top-10 right-10 opacity-10 text-[#C1272D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C19.5694 16 20.0171 15.5523 20.0171 15V9C20.0171 8.44772 19.5694 8 19.0171 8H15.0171C14.4648 8 14.0171 7.55228 14.0171 7V5C14.0171 3.89543 14.9125 3 16.0171 3H19.0171C21.2262 3 23.0171 4.79086 23.0171 7V15C23.0171 18.3137 20.3308 21 17.0171 21H14.0171ZM1.01709 21L1.01709 18C1.01709 16.8954 1.91252 16 3.01709 16H6.01709C6.56937 16 7.01709 15.5523 7.01709 15V9C7.01709 8.44772 6.56937 8 6.01709 8H2.01709C1.4648 8 1.01709 7.55228 1.01709 7V5C1.01709 3.89543 1.91252 3 3.01709 3H6.01709C8.22623 3 10.0171 4.79086 10.0171 7V15C10.0171 18.3137 7.3308 21 4.01709 21H1.01709Z"/></svg>
              </div>

              <div className="flex items-center gap-1 mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#C1272D"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-serif text-[#006837] leading-snug mb-10 italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-5">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-16 h-16 rounded-full border-2 border-[#C1272D] object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm font-medium text-[#C1272D] uppercase tracking-wider">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Background Decorative Plate */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#006837]/5 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
