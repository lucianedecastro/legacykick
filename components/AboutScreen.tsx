import React from 'react';
import { BackIcon, InfoIcon } from './icons/Icons';

interface AboutScreenProps {
  onBack: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center text-white w-full min-h-[80vh] animate-fade-in-8bit p-4">
      <h1 className="text-3xl md:text-4xl mb-8 flex items-center gap-4 uppercase" style={{ textShadow: '4px 4px 0px #000' }}>
        <InfoIcon className="w-10 h-10" />
        Sobre
      </h1>
      
      <div className="w-full max-w-3xl bg-black pixel-border p-6 md:p-8 space-y-6 text-left overflow-y-auto max-h-[60vh] text-xs leading-relaxed">
        <h2 className="text-lg text-amber-300 uppercase">O Jogo</h2>
        <p className="text-gray-200">
            "Legacy Kick" é uma narrativa interativa que tem como objetivo educar sobre a rica história do futebol feminino no Brasil.
        </p>
        <p className="text-gray-200 mt-4">
            O projeto é inspirado nas pesquisas e narrativas do livro "Futebol Feminista: Ensaios".
        </p>

        <h2 className="text-lg text-amber-300 uppercase mt-6">Registro INPI</h2>
        <p className="text-gray-200">
          Desenvolvido por Luciane de Castro — luciane.castro@gmail.com
        </p>
        <p className="text-gray-200">
          Registro de Programa de Computador no INPI:<br/>
          <strong>[Número a ser inserido]</strong>
        </p>
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
