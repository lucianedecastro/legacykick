import React from 'react';
import { SoccerBallIcon, DashboardIcon, InfoIcon, CreditsIcon } from './icons/Icons';
import type { Screen } from '../types';

interface WelcomeScreenProps {
  onStart: () => void;
  onNavigate: (screen: Screen) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white h-[80vh] animate-fade-in-8bit" style={{ background: "linear-gradient(to bottom, #000000 60%, #2b1b00)" }}>
      <div className="mb-4">
        <SoccerBallIcon className="w-24 h-24" style={{ color: "#d4af37" }} />
      </div>
      <h1 className="text-4xl md:text-6xl mb-4" style={{ textShadow: '4px 4px 0px #000', color: "#d4af37" }}>Legacy Kick</h1>
      <p className="text-sm md:text-base max-w-2xl mb-8 text-gray-300 leading-relaxed" style={{ color: "#f5e9c5" }}>
        Vivencie os dilemas do futebol feminino brasileiro em um campo de futebol interativo.
      </p>
      <button
        onClick={onStart}
        className="bg-white text-black py-3 px-8 text-lg hover:bg-gray-300 rounded-none"
        style={{ boxShadow: '4px 4px 0px #000', border: "2px solid #d4af37" }}
      >
        Iniciar
      </button>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button
          onClick={() => onNavigate('dashboard')}
          className="bg-gray-700 text-white py-2 px-4 hover:bg-gray-600 flex items-center gap-2 text-xs rounded-none"
          style={{ boxShadow: '2px 2px 0px #000', border: "2px solid #d4af37" }}
        >
          <DashboardIcon className="w-5 h-5" style={{ color: "#d4af37" }} />
          Placar
        </button>
        <button
          onClick={() => onNavigate('about')}
          className="bg-gray-700 text-white py-2 px-4 hover:bg-gray-600 flex items-center gap-2 text-xs rounded-none"
          style={{ boxShadow: '2px 2px 0px #000', border: "2px solid #d4af37" }}
        >
          <InfoIcon className="w-5 h-5" style={{ color: "#d4af37" }} />
          Sobre
        </button>
        <button
          onClick={() => onNavigate('credits')}
          className="bg-gray-700 text-white py-2 px-4 hover:bg-gray-600 flex items-center gap-2 text-xs rounded-none"
          style={{ boxShadow: '2px 2px 0px #000', border: "2px solid #d4af37" }}
        >
          <CreditsIcon className="w-5 h-5" style={{ color: "#d4af37" }} />
          Ficha
        </button>
      </div>
    </div>
  );
};
