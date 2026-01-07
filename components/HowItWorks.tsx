
import React from 'react';

interface WorkStep {
  number: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const steps: WorkStep[] = [
  {
    number: "01.",
    title: "Consultation & Custom Menu Planning",
    description: "We start with understanding your event goals, preferences, and guest needs — so every detail feels effortless and personal.",
    features: [
      "One-on-one consultation to discuss theme, size & special requests",
      "Explore our curated menus or create your own",
      "Finalize logistics, styling, and service format with ease"
    ],
    imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop"
  },
  {
    number: "02.",
    title: "Culinary Tasting & Refinement",
    description: "Experience the flavors firsthand. We refine every dish to meet your exact expectations before the big day.",
    features: [
      "Chef-led tasting session for key menu items",
      "Adjust seasoning, presentation, and portions",
      "Final ingredient sourcing from local organic partners"
    ],
    imageUrl: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop"
  },
  {
    number: "03.",
    title: "Seamless Logistics & On-site Setup",
    description: "Our professional crew handles everything from transportation to table setting, ensuring a stress-free environment.",
    features: [
      "Timely delivery with temperature-controlled logistics",
      "Full station setup including decor and equipment",
      "Rigorous hygiene and safety protocols during setup"
    ],
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
  },
  {
    number: "04.",
    title: "Execution & Premium Service",
    description: "Sit back and enjoy your event. Our world-class hospitality team manages the flow while you focus on your guests.",
    features: [
      "Live cooking and interactive food stations",
      "Attentive, professional staff for seamless service",
      "Complete post-event cleanup and feedback session"
    ],
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04322a11?q=80&w=800&auto=format&fit=crop"
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-[#006837] relative overflow-hidden">
      {/* Red Glow Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="w-[90%] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-red-400/50"></span>
              <span className="bg-[#C1272D]/20 text-red-200 px-5 py-2 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] backdrop-blur-md border border-red-400/20">
                How It Works
              </span>
              <span className="w-12 h-[1px] bg-red-400/50"></span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-4xl mx-auto">
            Smooth And Stress-Free <br/>
            <span className="text-[#C1272D] italic relative inline-block mx-2">
              Catering
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 10 Q 50 0 100 10" stroke="#FFF" strokeWidth="2" fill="transparent" />
              </svg>
            </span> Excellence.
          </h2>
        </div>

        {/* Steps Container */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group flex flex-col lg:flex-row bg-[#FEFAF6] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.01]"
            >
              {/* Text Side */}
              <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
                <div className="relative mb-8">
                  <span className="text-7xl md:text-8xl font-serif font-bold text-[#C1272D]/10 leading-none">
                    {step.number}
                  </span>
                  <div className="absolute top-1/2 left-0 w-16 h-[2px] bg-[#C1272D] transform -translate-y-1/2 ml-4"></div>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-[#006837] font-bold mb-6">
                  {step.title}
                </h3>
                
                <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
                  {step.description}
                </p>

                <div className="space-y-5">
                  {step.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 bg-[#006837] rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                      <span className="text-gray-700 font-bold text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:w-5/12 relative h-[400px] lg:h-auto overflow-hidden">
                <img 
                  src={step.imageUrl} 
                  alt={step.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#006837]/10 group-hover:bg-[#006837]/0 transition-colors duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-[#C1272D] text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#006837] transition-all shadow-xl hover:-translate-y-1 flex items-center gap-4 mx-auto group">
            Start Your Journey Now
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};
