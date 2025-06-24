
import React, { useState, useEffect, useCallback } from 'react';
import { Dilemma, Option, GamePhase, BallMovementEffectValue } from './types';
import StartScreen from './components/StartScreen';
import DilemmaDisplay from './components/DilemmaDisplay';
import FeedbackDisplay from './components/FeedbackDisplay';
import EndScreen from './components/EndScreen';
import SoccerFieldBackground from './components/SoccerFieldBackground';
import GameBall from './components/GameBall';

const INITIAL_BALL_POSITION = 5; // Center of the field (0-10 scale)
const MIN_BALL_POSITION = 0;
const MAX_BALL_POSITION = 10;
const BALL_ANIMATION_DURATION = 1000; // ms, should match GameBall's CSS transition

const App: React.FC = () => {
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.START_SCREEN);
  const [dilemmas, setDilemmas] = useState<Dilemma[]>([]);
  const [currentDilemmaIndex, setCurrentDilemmaIndex] = useState<number>(0);
  const [ballPosition, setBallPosition] = useState<number>(INITIAL_BALL_POSITION);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDilemmas = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('./dilemas.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Dilemma[] = await response.json();
      if (!data || data.length === 0) {
        throw new Error('Nenhum dilema encontrado ou formato inválido.');
      }
      setDilemmas(data);
    } catch (e: any) {
      console.error('Erro ao carregar dilemas:', e);
      setError(e.message || 'Falha ao carregar os dilemas do jogo.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDilemmas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateBallPosition = (effect: BallMovementEffectValue) => {
    setBallPosition(prevPosition => {
      let newPosition = prevPosition;
      switch (effect) {
        case 'positive_advance':
          newPosition += 2;
          break;
        case 'slight_advance':
          newPosition += 1;
          break;
        case 'neutral_static':
          // No change
          break;
        case 'slight_retreat':
          newPosition -= 1;
          break;
        case 'negative_retreat':
          newPosition -= 2;
          break;
      }
      return Math.max(MIN_BALL_POSITION, Math.min(MAX_BALL_POSITION, newPosition));
    });
  };

  const handleStartGame = () => {
    if (dilemmas.length > 0) {
      setCurrentDilemmaIndex(0);
      setBallPosition(INITIAL_BALL_POSITION);
      setGamePhase(GamePhase.DILEMMA_SCREEN);
    } else {
      setError("Dilemas não carregados. Tente recarregar a página.");
    }
  };

  const handleOptionSelect = (option: Option) => {
    const currentDilemma = getCurrentDilemma();
    if (currentDilemma) {
      updateBallPosition(currentDilemma.ballMovementEffect);
      setGamePhase(GamePhase.BALL_ANIMATING); // Transition to ball animating phase
      
      setTimeout(() => {
        setGamePhase(GamePhase.FEEDBACK_SCREEN); // After animation, show feedback
      }, BALL_ANIMATION_DURATION);
    }
  };

  const handleNextDilemma = () => {
    if (currentDilemmaIndex < dilemmas.length - 1) {
      setCurrentDilemmaIndex(prevIndex => prevIndex + 1);
      setGamePhase(GamePhase.DILEMMA_SCREEN);
    } else {
      setGamePhase(GamePhase.END_SCREEN);
    }
  };

  const handleRestartGame = () => {
    setCurrentDilemmaIndex(0);
    setBallPosition(INITIAL_BALL_POSITION);
    // Reset dilemmas if they were modified, or ensure they are re-fetched if necessary
    // For now, simply go back to start screen, assuming dilemmas are still loaded.
    setGamePhase(GamePhase.START_SCREEN); 
  };

  const getCurrentDilemma = (): Dilemma | null => {
    return dilemmas[currentDilemmaIndex] || null;
  };
  
  const renderContent = () => {
    if (isLoading) {
      return <p className="text-white text-xl animate-pulse">Carregando Jogo...</p>;
    }
    if (error) {
      return (
        <div className="text-center p-4 bg-red-700/80 text-white rounded-lg z-10">
          <p className="text-xl font-semibold">Erro!</p>
          <p className="mb-4 text-sm">{error}</p>
          <button 
            onClick={fetchDilemmas} 
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 text-sm"
          >
            Tentar Novamente
          </button>
        </div>
      );
    }

    const currentDilemma = getCurrentDilemma();

    switch (gamePhase) {
      case GamePhase.START_SCREEN:
        return <StartScreen onStart={handleStartGame} />;
      case GamePhase.DILEMMA_SCREEN:
        return currentDilemma ? (
          <DilemmaDisplay dilemma={currentDilemma} onOptionSelect={handleOptionSelect} />
        ) : <p className="text-white text-sm">Dilema não encontrado.</p>;
      case GamePhase.BALL_ANIMATING:
        return null; // Render nothing in the content panel while ball is animating
      case GamePhase.FEEDBACK_SCREEN:
        return currentDilemma ? (
          <FeedbackDisplay 
            dilemma={currentDilemma} 
            onNext={handleNextDilemma}
            isLastDilemma={currentDilemmaIndex === dilemmas.length - 1}
          />
        ) : <p className="text-white text-sm">Feedback não encontrado.</p>;
      case GamePhase.END_SCREEN:
        return <EndScreen onRestart={handleRestartGame} />;
      default:
        return <p className="text-white text-sm">Estado do jogo desconhecido.</p>;
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-green-800 overflow-hidden">
      <SoccerFieldBackground />
      <GameBall ballPosition={ballPosition} />
      {/* Content Area: Positioned in the top half of the screen */}
      <div 
        className="absolute inset-x-0 top-[5%] bottom-[50%] flex flex-col items-center justify-center p-2 sm:p-3 z-20 overflow-y-auto"
        aria-live="polite"
        role="main"
      >
         {renderContent()}
      </div>
    </div>
  );
};

export default App;