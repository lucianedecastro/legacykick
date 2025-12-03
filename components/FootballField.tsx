import React from 'react';
import type { Dilemma } from '../types';
import { FIELD_POSITIONS } from '../constants';
import { SoccerBallIcon } from './icons/Icons';

interface FootballFieldProps {
  currentDilemma: Dilemma;
}

export const FootballField: React.FC<FootballFieldProps> = ({ currentDilemma }) => {
  const positionStyle = FIELD_POSITIONS[currentDilemma.position];

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] md:aspect-[2/1] my-4 bg-[#008000] border-4 border-white">
      <svg viewBox="0 0 1050 680" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full" shapeRendering="crispEdges">
        {/* Field Lines */}
        <rect x="25" y="25" width="1000" height="630" fill="none" stroke="white" strokeWidth="4" />
        <line x1="525" y1="25" x2="525" y2="655" stroke="white" strokeWidth="4" />
        <circle cx="525" cy="340" r="91.5" fill="none" stroke="white" strokeWidth="4" />
        <rect x="25" y="138.5" width="165" height="403" fill="none" stroke="white" strokeWidth="4" />
        <rect x="860" y="138.5" width="165" height="403" fill="none" stroke="white" strokeWidth="4" />
      </svg>
      
      {/* Current Ball Position */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        style={positionStyle}
        aria-label={`Posição atual: ${currentDilemma.title}`}
      >
        <SoccerBallIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
    </div>
  );
};