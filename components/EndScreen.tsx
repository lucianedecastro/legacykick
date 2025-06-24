
import React from 'react';

interface EndScreenProps {
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ onRestart }) => {
  return (
    <div className="bg-black/75 p-6 sm:p-8 rounded-xl shadow-2xl max-w-lg w-full mx-auto text-center z-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Fim da Jornada!</h2>
      <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8">
        Obrigado por jogar Legacy Kick e explorar a história do futebol feminino!
      </p>
      <button
        onClick={onRestart}
        className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50 text-sm sm:text-base"
      >
        Reiniciar Jogo
      </button>
    </div>
  );
};

export default EndScreen;