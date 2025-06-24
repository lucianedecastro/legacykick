import React from 'react';
import { Dilemma, Option } from '../types';

interface DilemmaDisplayProps {
  dilemma: Dilemma;
  onOptionSelect: (option: Option) => void;
}

const DilemmaDisplay: React.FC<DilemmaDisplayProps> = ({ dilemma, onOptionSelect }) => {
  return (
    <div className="bg-black/75 p-3 sm:p-4 rounded-xl shadow-2xl max-w-lg w-full mx-auto text-center z-10">
      <h2 className="text-sm sm:text-base font-medium text-white mb-3 sm:mb-4 leading-normal sm:leading-snug">
        {dilemma.situation}
      </h2>
      <div className="space-y-2 sm:space-y-3">
        {dilemma.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionSelect(option)}
            className="w-full bg-lime-400 hover:bg-lime-300 text-green-900 font-medium py-2 sm:py-2.5 px-2 sm:px-3 rounded-md shadow-md hover:shadow-lg transition-all duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
          >
            <p className="text-xs leading-normal">{option.text}</p>
            {option.effect && (
              <p className="text-2xs text-indigo-700 mt-0.5 italic leading-tight">{option.effect}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DilemmaDisplay;