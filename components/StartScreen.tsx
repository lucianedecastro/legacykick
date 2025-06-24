
import React, { useState, useEffect } from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [ballScale, setBallScale] = useState(1);
  const [pulseDirection, setPulseDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setBallScale(prevScale => {
        let newScale = prevScale + pulseDirection * 0.005;
        if (newScale >= 1.05) {
          newScale = 1.05;
          setPulseDirection(-1);
        } else if (newScale <= 0.95) {
          newScale = 0.95;
          setPulseDirection(1);
        }
        return newScale;
      });
    }, 50); // Adjust for pulse speed

    return () => clearInterval(interval);
  }, [pulseDirection]);

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 z-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Legacy Kick
      </h1>
      <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12 max-w-md sm:max-w-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
        Descubra a história invisibilizada do futebol feminino.
        Toque na bola para iniciar sua jornada.
      </p>
      
      <button
        onClick={onStart}
        className="bg-yellow-400 border-4 border-black text-black rounded-full w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center shadow-2xl focus:outline-none transition-transform duration-150 ease-in-out hover:bg-yellow-300"
        aria-label="Iniciar Jogo"
        style={{ transform: `scale(${ballScale})` }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 sm:w-20 sm:h-20">
          {/* Play icon */}
          <path d="M16.1421,5.2426 C15.8671,5.1306 15.5681,5.0806 15.2631,5.0996 L15.2631,5.0996 C14.9721,5.1186 14.6931,5.2106 14.4551,5.3666 L14.4551,5.3666 L9.6051,8.4896 C9.2101,8.7306 9.0001,9.1916 9.0001,9.6826 L9.0001,9.6826 L9.0001,14.3176 C9.0001,14.8086 9.2101,15.2696 9.6051,15.5106 L9.6051,15.5106 L14.4551,18.6336 C14.6931,18.7896 14.9721,18.8816 15.2631,18.9006 L15.2631,18.9006 C15.8451,18.9286 16.4021,18.6606 16.7451,18.2046 L16.7451,18.2046 L18.6651,15.7196 C18.8781,15.4416 19.0001,15.0996 19.0001,14.7416 L19.0001,14.7416 L19.0001,9.2586 C19.0001,8.9006 18.8781,8.5586 18.6651,8.2806 L18.6651,8.2806 L16.7451,5.7956 C16.5911,5.5946 16.3811,5.4386 16.1421,5.3416 L16.1421,5.2426 Z M11.0001,14.0536 L11.0001,9.9466 L14.1561,12.0006 L11.0001,14.0536 Z"/>
        </svg>

      </button>
      <p className="text-xs sm:text-sm text-yellow-300 mt-6 sm:mt-8 animate-pulse">Toque na bola</p>
    </div>
  );
};

export default StartScreen;
