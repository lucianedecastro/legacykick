import React from 'react';
import type { Choice } from '../types';

interface ChoiceButtonsProps {
  choices: Choice[];
  onSelectChoice: (choice: Choice) => void;
}

export const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ choices, onSelectChoice }) => {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => onSelectChoice(choice)}
          className="group bg-gray-800 text-white p-4 text-left hover:bg-gray-700 rounded-none border-2 border-gray-600 focus:outline-none focus:border-amber-300"
        >
          <p className="text-xs md:text-sm flex items-start">
            <span className="opacity-0 group-hover:opacity-100 mr-2 font-mono">&gt;</span>
            <span>{choice.text}</span>
          </p>
        </button>
      ))}
    </div>
  );
};