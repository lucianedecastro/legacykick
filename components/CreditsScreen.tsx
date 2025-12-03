import React from 'react';
import { BackIcon, CreditsIcon } from './icons/Icons';

interface CreditsScreenProps {
  onBack: () => void;
}

export const CreditsScreen: React.FC<CreditsScreenProps> = ({ onBack }) => {
  const creditItem = (title: string, name: string) => (
    <div>
      <h2 className="text-base text-amber-300 uppercase">{title}</h2>
      <p className="text-gray-200">{name}</p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center text-white w-full min-h-[80vh] animate-fade-in-8bit p-4">
      <h1 className="text-3xl md:text-4xl mb-8 flex items-center gap-4 uppercase" style={{ textShadow: '4px 4px 0px #000' }}>
        <CreditsIcon className="w-10 h-10" />
        Ficha Técnica
      </h1>
      
      <div className="w-full max-w-3xl bg-black pixel-border p-6 md:p-8 space-y-4 text-left overflow-y-auto max-h-[60vh] text-xs leading-relaxed">
        {creditItem("Pesquisa e Curadoria", "Luciane de Castro")}
        {creditItem("Gerenciamento do Projeto", "Luciane de Castro")}
        {creditItem("Produção Executiva", "")}
        {creditItem("Desenvolvedora", "Luciane de Castro")}
        {creditItem("Comunicação", "")}
        {creditItem("Acessibilidade", "")}
        
        <div>
          <h2 className="text-base text-amber-300 uppercase">Bibliografia</h2>
          <p className="text-gray-200 italic">
              CASTRO, Luciane de; RICCA, Darcio. "Futebol Feminista: Ensaios".
          </p>
        </div>
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