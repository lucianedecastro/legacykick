import React from 'react';

interface GameClockProps {
  year: number;
  score: number;
}

export const GameClock: React.FC<GameClockProps> = ({ year, score }) => {
  return (
    <div className="absolute top-4 left-4 bg-black text-white py-2 px-4 text-sm md:text-base z-10 border-2 border-white rounded-none flex flex-col md:flex-row gap-x-4">
      <span>Ano: <span className="text-amber-300">{year}</span></span>
      <span>Score: <span className="text-amber-300">{score}</span></span>
    </div>
  );
};