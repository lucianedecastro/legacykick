
import React from 'react';

const SoccerFieldBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-green-700 pointer-events-none">
      {/* Center Line */}
      <div className="absolute top-0 left-1/2 w-1.5 h-full bg-white/50 transform -translate-x-1/2"></div>
      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 w-40 h-40 border-4 border-white/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Penalty Area Left */}
      <div className="absolute top-1/2 left-0 w-1/6 h-3/5 border-r-4 border-t-4 border-b-4 border-white/50 transform -translate-y-1/2 rounded-tr-xl rounded-br-xl"></div>
      
      {/* Goal Area Left */}
      <div className="absolute top-1/2 left-0 w-[8%] h-2/5 border-r-4 border-t-4 border-b-4 border-white/30 transform -translate-y-1/2 rounded-tr-lg rounded-br-lg"></div>

      {/* Penalty Area Right */}
      <div className="absolute top-1/2 right-0 w-1/6 h-3/5 border-l-4 border-t-4 border-b-4 border-white/50 transform -translate-y-1/2 rounded-tl-xl rounded-bl-xl"></div>

      {/* Goal Area Right */}
      <div className="absolute top-1/2 right-0 w-[8%] h-2/5 border-l-4 border-t-4 border-b-4 border-white/30 transform -translate-y-1/2 rounded-tl-lg rounded-bl-lg"></div>
    </div>
  );
};

export default SoccerFieldBackground;
