import React from 'react';
import { TrophyIcon, RestartIcon, DashboardIcon, HomeIcon } from './icons/Icons';
import type { Screen } from '../types';

interface EndScreenProps {
  onRestart: () => void;
  score: number;
  onNavigate: (screen: Screen) => void;
}

export const EndScreen: React.FC<EndScreenProps> = ({ onRestart, score, onNavigate }) => {

  return (
    <div className="flex flex-col items-center justify-center text-center text-white w-full animate-fade-in-8bit">
      <TrophyIcon className="w-20 h-20 text-amber-300 mb-4" />
      <h1 className="text-4xl md:text-5xl mb-2" style={{ textShadow: '4px 4px 0px #000' }}>Vitória!</h1>
      <div className="flex items-baseline justify-center gap-4 mb-4">
        <span className="text-lg text-gray-200 uppercase">Score:</span>
        <span className="text-3xl text-amber-300">{score}</span>
      </div>
      <p className="text-sm max-w-3xl mb-8 text-gray-300 leading-relaxed">
        Você percorreu a jornada de luta e resiliência do futebol feminino no Brasil. Seu legado foi registrado no Placar.
      </p>

      <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-md">
        <button
          onClick={onRestart}
          className="w-full bg-white text-black font-bold py-3 px-8 text-lg hover:bg-gray-300 rounded-none flex items-center justify-center gap-2"
          style={{ boxShadow: '4px 4px 0px #000' }}
        >
          <RestartIcon className="w-6 h-6" />
          Jogar Novamente
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-gray-700 text-white py-2 px-4 hover:bg-gray-600 rounded-none flex items-center gap-2 text-xs"
            style={{ boxShadow: '2px 2px 0px #000' }}
          >
            <DashboardIcon className="w-5 h-5" />
            Ver Placar
          </button>
          <button
            onClick={() => onNavigate('welcome')}
            className="bg-gray-700 text-white py-2 px-4 hover:bg-gray-600 rounded-none flex items-center gap-2 text-xs"
            style={{ boxShadow: '2px 2px 0px #000' }}
          >
            <HomeIcon className="w-5 h-5" />
            Início
          </button>
        </div>
      </div>
    </div>
  );
};