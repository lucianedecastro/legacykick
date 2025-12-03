import React, { useState, useCallback, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { GameScreen } from './components/GameScreen';
import { EndScreen } from './components/EndScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { AboutScreen } from './components/AboutScreen';
import { CreditsScreen } from './components/CreditsScreen';
import type { Screen, GameResult } from './types';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [lastScore, setLastScore] = useState(0);
  const [results, setResults] = useState<GameResult[]>([]);

  useEffect(() => {
    try {
      const savedResults = localStorage.getItem('legacyKickResults');
      if (savedResults) {
        setResults(JSON.parse(savedResults));
      }
    } catch (error) {
      console.error("Failed to load results from localStorage:", error);
    }
  }, []);

  const handleGameEnd = useCallback((score: number) => {
    setLastScore(score);
    const newResult: GameResult = {
      score,
      timestamp: Date.now(),
    };
    const updatedResults = [newResult, ...results].slice(0, 50); // Keep last 50 results
    setResults(updatedResults);
    try {
      localStorage.setItem('legacyKickResults', JSON.stringify(updatedResults));
    } catch (error) {
      console.error("Failed to save results to localStorage:", error);
    }
    setScreen('end');
  }, [results]);

  const handleRestart = useCallback(() => {
    setScreen('game');
  }, []);

  const handleNavigate = useCallback((newScreen: Screen) => {
    setScreen(newScreen);
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case 'welcome':
        return <WelcomeScreen onStart={handleRestart} onNavigate={handleNavigate} />;
      case 'game':
        return <GameScreen onGameEnd={handleGameEnd} />;
      case 'end':
        return <EndScreen score={lastScore} onRestart={handleRestart} onNavigate={handleNavigate} />;
      case 'dashboard':
        return <DashboardScreen onBack={() => handleNavigate('welcome')} />;
      case 'about':
        return <AboutScreen onBack={() => handleNavigate('welcome')} />;
      case 'credits':
        return <CreditsScreen onBack={() => handleNavigate('welcome')} />;
      default:
        return <WelcomeScreen onStart={handleRestart} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-[#0d0d0d] min-h-screen font-mono overflow-x-hidden relative scanlines">
        <main className="relative w-full min-h-screen px-4 py-8 flex flex-col items-center justify-center">
          {renderScreen()}
        </main>
    </div>
  );
};

export default App;