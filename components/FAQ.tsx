
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What geographical areas does House of Curry serve?",
    answer: "We primarily serve the entire National Capital Region (NCR) and surrounding areas. For large-scale destination events or corporate galas, we are equipped to provide catering services across North India with advanced logistics."
  },
  {
    question: "How far in advance should I book my event?",
    answer: "For corporate events and smaller gatherings, we recommend booking at least 2-4 weeks in advance. For large weddings or major galas, booking 3-6 months ahead ensures the best availability of our premium culinary teams and custom menu development."
  },
  {
    question: "Do you offer menu tasting sessions before finalization?",
    answer: "Yes, absolutely. We believe in culinary perfection. For confirmed bookings above a certain size, we offer comprehensive tasting sessions where you can meet our master chefs and refine spice levels, presentation, and portion sizes."
  },
  {
    question: "Can you accommodate specific dietary restrictions and allergies?",
    answer: "House of Curry specializes in inclusive dining. We can curate entirely vegan, gluten-free, nut-free, or Jain menus. Our kitchens follow rigorous separation protocols to ensure the safety and satisfaction of all your guests."
  },
  {
    question: "What is the minimum guest count for your catering services?",
    answer: "Our minimum requirements vary by service type. For office lunch deliveries, we generally require a minimum of 20 guests. For full-service on-site catering with live stations, the minimum is typically 50 guests."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FEFAF6] relative overflow-hidden border-t border-red-50">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
         <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="#C1272D" strokeWidth="0.5"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>
      </div>

      <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#C1272D]"></span>
              <span className="bg-white px-4 py-1.5 rounded-full text-[#C1272D] font-bold uppercase tracking-[0.3em] text-[10px] shadow-sm border border-red-100">
                Common Queries
              </span>
              <span className="w-12 h-[1px] bg-[#C1272D]"></span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#006837] mb-4">
            Frequently Asked <span className="italic text-[#C1272D]">Questions</span>
          </h2>
          <p className="text-gray-500 font-medium">Clear Answers To Your Catering Needs</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group border rounded-3xl transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-white border-red-100 shadow-xl shadow-red-900/5' 
                  : 'bg-white/50 border-gray-100 hover:border-red-100 hover:bg-white'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 outline-none"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${
                  openIndex === index ? 'text-[#006837]' : 'text-gray-700'
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-[#C1272D] text-white rotate-180' : 'bg-red-50 text-[#C1272D]'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-8 pt-2">
                  <div className="w-full h-[1px] bg-red-50 mb-6"></div>
                  <p className="text-gray-500 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Link */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Still have more questions?</p>
          <a 
            href="#" 
            className="inline-flex items-center gap-3 text-[#006837] font-bold uppercase tracking-widest text-sm hover:text-[#C1272D] transition-colors group"
          >
            Contact our catering specialists
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};
