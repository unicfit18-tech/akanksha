
import React, { useState } from 'react';
import { LayoutOne } from './components/LayoutOne';
import { LayoutTwo } from './components/LayoutTwo';
import { LayoutThree } from './components/LayoutThree';
import { Header } from './components/Header';
import { SettingsPanel } from './components/SettingsPanel';
import { WhoWeAre } from './components/WhoWeAre';
import { WhatWeDo } from './components/WhatWeDo';
import { HowItWorks } from './components/HowItWorks';
import { WhyChoiceUs } from './components/WhyChoiceUs';

export type DesignVariant = 'split' | 'editorial' | 'immersive';

const App: React.FC = () => {
  const [activeVariant, setActiveVariant] = useState<DesignVariant>('split');

  const renderActiveVariant = () => {
    switch (activeVariant) {
      case 'split':
        return <LayoutOne />;
      case 'editorial':
        return <LayoutTwo />;
      case 'immersive':
        return <LayoutThree />;
      default:
        return <LayoutOne />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />
      
      <main className="relative">
        {renderActiveVariant()}
        
        {/* Who We Are Section */}
        <WhoWeAre />

        {/* What We Do Section */}
        <WhatWeDo />

        {/* Why Choice Us Section */}
        <WhyChoiceUs />

        {/* How It Works Section */}
        <HowItWorks />
      </main>

      {/* Floating Control for User Interaction */}
      <SettingsPanel 
        activeVariant={activeVariant} 
        onSelectVariant={setActiveVariant} 
      />

      {/* Custom Chat Bubble Redesign with Brand Colors */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#006837] hover:bg-[#C1272D] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group border-2 border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 whitespace-nowrap text-sm font-bold uppercase tracking-widest">Connect With Us</span>
        </button>
      </div>
    </div>
  );
};

export default App;
