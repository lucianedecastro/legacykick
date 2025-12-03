import React, { useState, useEffect } from 'react';
import type { GameResult } from '../types';
import { BackIcon, TrophyIcon } from './icons/Icons';

interface DashboardScreenProps {
  onBack: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onBack }) => {
  const [results, setResults] = useState<GameResult[]>([]);

  useEffect(() => {
    try {
      const savedResults = localStorage.getItem('legacyKickResults');
      if (savedResults) {
        setResults(JSON.parse(savedResults));
      }
    } catch (error) {
      console.error("Failed to load results from localStorage:", error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-white w-full min-h-[80vh] animate-fade-in-8bit p-4">
      <h1 className="text-3xl md:text-4xl mb-6 flex items-center gap-4 uppercase" style={{ textShadow: '4px 4px 0px #000' }}>
        <TrophyIcon className="w-10 h-10 text-amber-300" />
        Placar de Legados
      </h1>
      
      <div className="w-full max-w-4xl bg-black pixel-border p-6">
        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-[60vh] overflow-y-auto pr-2">
            {results.map((result) => (
              <div key={result.timestamp} className="bg-gray-800 border-2 border-gray-600 rounded-none p-4 flex flex-col items-center justify-center aspect-square text-center">
                 <TrophyIcon className="w-12 h-12 md:w-16 md:h-16 text-amber-300 mb-2" />
                 <p className="font-bold text-lg md:text-xl text-amber-300">Score: {result.score}</p>
                 <p className="text-xs text-gray-400 mt-2">{new Date(result.timestamp).toLocaleDateString('pt-BR')}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 py-10 text-sm leading-relaxed">
            Nenhum legado registrado. Jogue uma partida para salvar sua pontuação aqui!
          </p>
        )}
      </div>

      <button
        onClick={onBack}
        className="mt-8 bg-gray-700 text-white py-2 px-6 text-sm hover:bg-gray-600 rounded-none flex items-center gap-2"
        style={{ boxShadow: '2px 2px 0px #000' }}
      >
        <BackIcon className="w-6 h-6" />
        Voltar
      </button>
    </div>
  );
};