
import React from 'react';

interface GameBallProps {
  ballPosition: number; // Position from 0 (left) to 10 (right)
}

const GameBall: React.FC<GameBallProps> = ({ ballPosition }) => {
  const leftPercentage = 10 + ballPosition * 8; // Ball moves between 10% and 90% of screen width

  return (
    <div
      className="absolute top-1/2 w-6 h-6 transition-all duration-1000 ease-in-out" // duration-1000 matches App.tsx BALL_ANIMATION_DURATION
      style={{
        left: `${leftPercentage}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 5,
      }}
      role="img"
      aria-label="Bola de Futebol"
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="white" stroke="black" strokeWidth="2"/>
        
        {/* Central Pentagon */}
        <polygon points="100,20 138,50 123,88 77,88 62,50" fill="black"/>
        
        {/* Hexagons around central pentagon */}
        <polygon points="138,50 176,80 161,118 123,88" fill="black"/> {/* Right Top */}
        <polygon points="123,88 161,118 138,150 100,135 77,150 62,118" fill="black" /> {/* Bottom (this needs to be split or rethought for 2D classic view) */}
        
        {/* Simplified bottom hexagons from central pentagon's bottom edges */}
        <polygon points="123,88 138,150 100,135" fill="black"/> {/* Right Bottom part of bottom hex */}
        <polygon points="77,88 62,150 100,135" fill="black"/>  {/* Left Bottom part of bottom hex */}

        <polygon points="62,50 24,80 39,118 77,88" fill="black"/>   {/* Left Top */}

        {/* Partial outer pentagons & hexagons to give impression of sphere */}
        {/* Top-left-most pentagon (partial) */}
        <polygon points="62,50 24,80 10,60 30,30" fill="black" opacity="0.85" />
         {/* Top-right-most pentagon (partial) */}
        <polygon points="138,50 176,80 190,60 170,30" fill="black" opacity="0.85" />

        {/* Bottom-left-most hexagon (partial) */}
        <polygon points="39,118 24,80 10,100 25,130 62,150 " fill="white" stroke="black" strokeWidth="1.5" opacity="0.9" />
        <polygon points="39,118 25,130 62,150" fill="black" opacity="0.75" />


        {/* Bottom-right-most hexagon (partial) */}
        <polygon points="161,118 176,80 190,100 175,130 138,150" fill="white" stroke="black" strokeWidth="1.5" opacity="0.9" />
        <polygon points="161,118 175,130 138,150" fill="black" opacity="0.75" />
        
        {/* Very top hexagon (partial) */}
        <polygon points="100,20 62,50 77,15 123,15" fill="black" />

      </svg>
    </div>
  );
};

export default GameBall;
