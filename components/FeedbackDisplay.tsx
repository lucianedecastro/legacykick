import React from 'react';
import { Dilemma } from '../types';

interface FeedbackDisplayProps {
  dilemma: Dilemma;
  onNext: () => void;
  isLastDilemma: boolean;
}

const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ dilemma, onNext, isLastDilemma }) => {
  return (
    <div className="bg-black/75 p-3 sm:p-4 rounded-xl shadow-2xl max-w-lg w-full mx-auto text-center z-10">
      <div className="mb-3 sm:mb-4 space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm text-white leading-normal sm:leading-snug">{dilemma.feedback}</p>
        <div className="border-t-2 border-yellow-400/50 my-2 sm:my-3"></div>
        <p className="text-2xs sm:text-xs text-yellow-300 italic leading-normal sm:leading-snug">
          <span className="font-semibold not-italic text-yellow-200">Fato Histórico:</span> {dilemma.historicalFact}
        </p>
      </div>
      <button
        onClick={onNext}
        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-xs sm:text-sm"
      >
        {isLastDilemma ? 'Ver Resultado Final' : 'Próximo Dilema'}
      </button>
    </div>
  );
};

export default FeedbackDisplay;