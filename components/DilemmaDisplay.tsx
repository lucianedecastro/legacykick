import React from 'react';

interface DilemmaDisplayProps {
  title: string;
  situation: string;
  question: string;
}

export const DilemmaDisplay: React.FC<DilemmaDisplayProps> = ({ title, situation, question }) => {
  return (
    <div className="text-left p-4 bg-black pixel-border max-w-4xl mx-auto mb-4">
      <h2 className="text-base md:text-lg mb-3 text-amber-300 uppercase">{title}</h2>
      <p className="text-xs md:text-sm text-gray-200 mb-4 leading-relaxed">{situation}</p>
      <p className="text-sm md:text-base font-bold text-white">{question}</p>
    </div>
  );
};