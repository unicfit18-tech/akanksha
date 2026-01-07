
import React from 'react';
import { DesignVariant } from '../App';

interface SettingsPanelProps {
  activeVariant: DesignVariant;
  onSelectVariant: (variant: DesignVariant) => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ activeVariant, onSelectVariant }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-2 flex items-center gap-1">
      <div className="px-4 py-2 border-r border-gray-100 mr-2 hidden sm:block">
        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-widest">Redesign Mode</span>
      </div>
      
      <button 
        onClick={() => onSelectVariant('split')}
        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeVariant === 'split' ? 'bg-emerald-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        Modern Split
      </button>
      
      <button 
        onClick={() => onSelectVariant('editorial')}
        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeVariant === 'editorial' ? 'bg-emerald-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        Editorial Mosaic
      </button>
      
      <button 
        onClick={() => onSelectVariant('immersive')}
        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeVariant === 'immersive' ? 'bg-emerald-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        Bold Immersive
      </button>
    </div>
  );
};
