
import React, { useState, useEffect } from 'react';
import { LayoutOne } from './components/LayoutOne';
import { LayoutTwo } from './components/LayoutTwo';
import { LayoutThree } from './components/LayoutThree';
import { Header } from './components/Header';
import { SettingsPanel } from './components/SettingsPanel';
import { WhoWeAre } from './components/WhoWeAre';
import { WhatWeDo } from './components/WhatWeDo';
import { HowItWorks } from './components/HowItWorks';
import { WhyChoiceUs } from './components/WhyChoiceUs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { BlogPosts } from './components/BlogPosts';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { SignatureGalleryCarousel } from './components/SignatureGalleryCarousel';

export type DesignVariant = 'split' | 'editorial' | 'immersive';
export type PageView = 'home' | 'about' | 'services' | 'service-detail' | 'blog' | 'contact';

const App: React.FC = () => {
  const [activeVariant, setActiveVariant] = useState<DesignVariant>('split');
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedServiceId]);

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView('service-detail');
  };

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

  const renderContent = () => {
    if (currentView === 'about') {
      return <AboutUs />;
    }

    if (currentView === 'services') {
      return <Services onServiceSelect={handleServiceClick} />;
    }

    if (currentView === 'service-detail' && selectedServiceId) {
      return <ServiceDetail serviceId={selectedServiceId} onBack={() => setCurrentView('services')} />;
    }

    if (currentView === 'blog') {
      return <Blog />;
    }

    if (currentView === 'contact') {
      return <Contact />;
    }

    return (
      <>
        {renderActiveVariant()}
        
        {/* Who We Are Section */}
        <WhoWeAre />

        {/* What We Do Section */}
        <WhatWeDo />

        {/* Why Choice Us Section */}
        <WhyChoiceUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* How It Works Section */}
        <HowItWorks />

        {/* FAQ Section */}
        <FAQ />

        {/* Blog/Post Content Section */}
        <BlogPosts />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden flex flex-col">
      <Header 
        onViewChange={(view) => {
          setCurrentView(view);
          if (view !== 'service-detail') setSelectedServiceId(null);
        }} 
        currentView={currentView}
        onServiceSelect={handleServiceClick}
      />
      
      <main className="relative flex-1">
        {renderContent()}
        
        {/* Global Carousel Section on All Pages */}
        <SignatureGalleryCarousel />
      </main>

      {/* Settings Panel only on home to showcase banner variants */}
      {currentView === 'home' && (
        <SettingsPanel 
          activeVariant={activeVariant} 
          onSelectVariant={setActiveVariant} 
        />
      )}

      {/* Custom Chat Bubble Redesign with Brand Colors */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#006837] hover:bg-[#C1272D] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group border-2 border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 whitespace-nowrap text-sm font-bold uppercase tracking-widest">Connect With Us</span>
        </button>
      </div>

      <footer className="py-12 bg-gray-50 border-t border-gray-100 text-center">
        <div className="mb-6 flex justify-center gap-8">
           <button onClick={() => setCurrentView('home')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#006837]">Home</button>
           <button onClick={() => setCurrentView('about')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#006837]">About</button>
           <button onClick={() => setCurrentView('services')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#006837]">Services</button>
           <button onClick={() => setCurrentView('blog')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#006837]">Blog</button>
           <button onClick={() => setCurrentView('contact')} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#006837]">Contact</button>
        </div>
        <div className="flex justify-center items-center gap-2 mb-4">
           <div className="w-8 h-8 bg-[#C1272D] rounded-lg flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/></svg>
           </div>
           <span className="text-xs font-bold uppercase tracking-tighter text-[#006837]">House of Curry</span>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">House of Curry &copy; 2024 — Excellence in Hospitality</p>
      </footer>
    </div>
  );
};

export default App;
