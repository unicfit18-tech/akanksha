
import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Arjun Khanna",
    role: "Executive Master Chef",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800&auto=format&fit=crop",
    bio: "With over 20 years of experience in Michelin-starred kitchens, Arjun brings a deep understanding of regional Indian spices and modern techniques."
  },
  {
    name: "Sarah D'Souza",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Sarah ensures that every House of Curry event runs with precision, managing logistics for thousands of meals daily with an eye for absolute quality."
  },
  {
    name: "Vikram Sethi",
    role: "Head of Creative Menus",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    bio: "A visionary in culinary fusion, Vikram crafts bespoke menus that tell a unique story for every corporate gala and private celebration."
  },
  {
    name: "Priya Menon",
    role: "Quality & Hygiene Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    bio: "Ensuring the highest global standards of food safety, Priya's rigorous protocols are the backbone of our trusted reputation in industrial catering."
  }
];

export const OurTeam: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-[90%] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#C1272D]"></span>
              <span className="text-[#C1272D] font-bold uppercase tracking-[0.3em] text-[10px]">
                The Artisans
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#006837] leading-tight">
              Meet The <span className="italic text-[#C1272D]">Visionaries</span> <br/>
              Behind Every Plate.
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm mb-2 text-sm leading-relaxed">
            Our team is a collective of culinary masters, logistics experts, and hospitality professionals dedicated to the art of catering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden mb-6 shadow-xl border-4 border-white transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#006837]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Social Floating Icons (Visual only) */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#006837] hover:bg-[#C1272D] hover:text-white cursor-pointer shadow-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#006837] hover:bg-[#C1272D] hover:text-white cursor-pointer shadow-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#006837] mb-1 group-hover:text-[#C1272D] transition-colors">{member.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C1272D] mb-4">{member.role}</p>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 px-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-64 bg-[#006837]/5 rounded-r-full -z-10"></div>
    </section>
  );
};
