
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'corporate',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. A House of Curry specialist will contact you shortly.');
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#C1272D]"></span>
              <span className="text-[#C1272D] font-bold uppercase tracking-[0.3em] text-xs">Get In Touch</span>
              <span className="w-12 h-[1px] bg-[#C1272D]"></span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#006837] mb-8 leading-tight">
            Let’s Create Your <br/> <span className="italic text-[#C1272D]">Signature</span> Event
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Whether it's a high-stakes board meeting or a grand wedding gala, our specialists are ready to curate your perfect menu.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#FEFAF6] p-10 rounded-[2.5rem] border border-red-50 text-center group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#C1272D] shadow-sm mb-6 mx-auto group-hover:bg-[#C1272D] group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="text-xl font-bold text-[#006837] mb-2">Our Headquarters</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              123 Culinary Drive, Sector 44<br/>Gurugram, HR 122003
            </p>
          </div>

          <div className="bg-[#FEFAF6] p-10 rounded-[2.5rem] border border-red-50 text-center group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#C1272D] shadow-sm mb-6 mx-auto group-hover:bg-[#C1272D] group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-[#006837] mb-2">Direct Line</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Main: +91 124 456 7890<br/>Catering: +91 98765 43210
            </p>
          </div>

          <div className="bg-[#FEFAF6] p-10 rounded-[2.5rem] border border-red-50 text-center group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#C1272D] shadow-sm mb-6 mx-auto group-hover:bg-[#C1272D] group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <h3 className="text-xl font-bold text-[#006837] mb-2">Email Inquiry</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              events@houseofcurry.com<br/>careers@houseofcurry.com
            </p>
          </div>
        </div>

        {/* Main Form Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="bg-white border-2 border-gray-50 rounded-[3rem] p-10 md:p-16 shadow-2xl relative">
            <h2 className="text-3xl font-serif text-[#006837] mb-8">Send an <span className="italic text-[#C1272D]">Inquiry</span></h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#C1272D] transition-all text-sm"
                    placeholder="John Doe"
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#C1272D] transition-all text-sm"
                    placeholder="john@example.com"
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#C1272D] transition-all text-sm"
                    placeholder="+91 00000 00000"
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Event Type</label>
                  <select 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#C1272D] transition-all text-sm appearance-none"
                    onChange={(e) => setFormState({...formState, eventType: e.target.value})}
                  >
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding Gala</option>
                    <option value="private">Private Dining</option>
                    <option value="industrial">Industrial Catering</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Estimated Guests</label>
                <input 
                  type="number" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#C1272D] transition-all text-sm"
                  placeholder="e.g. 150"
                  onChange={(e) => setFormState({...formState, guests: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Tell us about your event</label>
                <textarea 
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#C1272D] transition-all text-sm resize-none"
                  placeholder="Special requirements, themes, or favorite flavors..."
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#006837] text-white rounded-2xl font-bold hover:bg-[#C1272D] transition-all shadow-xl uppercase tracking-widest text-xs mt-4"
              >
                Request a Custom Quote
              </button>
            </form>
          </div>

          <div className="space-y-16 lg:pt-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-[#006837]"></span>
                <span className="text-[#006837] font-bold uppercase tracking-[0.3em] text-[10px]">Office Hours</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-400 font-medium">Monday — Friday</span>
                  <span className="text-[#006837] font-bold">09:00 AM — 07:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-400 font-medium">Saturday</span>
                  <span className="text-[#006837] font-bold">10:00 AM — 04:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Sunday</span>
                  <span className="text-[#C1272D] font-bold italic">By Appointment Only</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#006837]/60 to-transparent flex items-end p-10">
                <p className="text-white font-serif italic text-2xl">Visit our experience center to sample our seasonal menus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
