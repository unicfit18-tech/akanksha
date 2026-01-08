
import React from 'react';
import { AboutHeroCarousel } from '../components/AboutHeroCarousel';
import { WhoWeAre } from '../components/WhoWeAre';
import { Testimonials } from '../components/Testimonials';
import { MissionValuesVision } from '../components/MissionValuesVision';
import { OurTeam } from '../components/OurTeam';

export const AboutUs: React.FC = () => {
  return (
    <div className="pt-0">
      <AboutHeroCarousel />
      
      {/* Brand Heritage Section */}
      <div className="bg-white">
        <WhoWeAre />
      </div>

      {/* Mission, Values & Vision Section */}
      <MissionValuesVision />

      {/* Team Section */}
      <OurTeam />

      {/* Additional Editorial Branding Stats */}
      <section className="py-20 bg-[#FEFAF6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-4xl font-serif text-[#006837] mb-2">12+</h3>
            <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Years of Excellence</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-serif text-[#C1272D] mb-2">500+</h3>
            <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Corporate Galas</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-serif text-[#006837] mb-2">50k+</h3>
            <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Happy Diners</p>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};
