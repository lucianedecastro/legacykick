import React from 'react';
import type { Choice } from '../types';
import { HistoryIcon } from './icons/Icons';

interface FeedbackModalProps {
  choice: Choice;
  historicalFact: string;
  onContinue: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ choice, historicalFact, onContinue }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fade-in-8bit">
      <div className="bg-black pixel-border p-6 md:p-8 max-w-2xl w-full">
        <div className="text-left">
          <h3 className="text-base font-bold text-white mb-3 uppercase">Consequência:</h3>
          <p className="text-sm text-gray-300 mb-6 italic">"{choice.feedback}"</p>
        </div>
        
        <div className="bg-gray-800 p-4 border-2 border-gray-600 mb-6 rounded-none">
          <h4 className="flex items-center text-base font-bold text-amber-300 mb-3 uppercase">
            <HistoryIcon className="w-5 h-5 mr-2" />
            Fato Histórico
          </h4>
          <p className="text-xs text-gray-200 leading-relaxed">{historicalFact}</p>
        </div>
        
        <div className="text-center">
          <button
            onClick={onContinue}
            className="bg-white text-black py-2 px-8 text-sm hover:bg-gray-300 rounded-none"
            style={{ boxShadow: '2px 2px 0px #000' }}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};