import React, { useState, useCallback } from 'react';
import { DILEMMAS } from '../data/dilemmas';
import { FootballField } from './FootballField';
import { DilemmaDisplay } from './DilemmaDisplay';
import { ChoiceButtons } from './ChoiceButtons';
import { FeedbackModal } from './FeedbackModal';
import { GameClock } from './GameClock';
import type { Choice } from '../types';

interface GameScreenProps {
  onGameEnd: (score: number) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ onGameEnd }) => {
  const [currentDilemmaIndex, setCurrentDilemmaIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);

  const currentDilemma = DILEMMAS[currentDilemmaIndex];

  const handleSelectChoice = useCallback((choice: Choice) => {
    setSelectedChoice(choice);
    setShowFeedback(true);
  }, []);

  const handleContinue = useCallback(() => {
    if (!selectedChoice) return;

    const updatedScore = score + selectedChoice.points;
    
    setShowFeedback(false);
    setSelectedChoice(null);

    if (currentDilemmaIndex >= DILEMMAS.length - 1) {
      onGameEnd(updatedScore);
    } else {
      setScore(updatedScore);
      setCurrentDilemmaIndex(prevIndex => prevIndex + 1);
    }
  }, [score, selectedChoice, currentDilemmaIndex, onGameEnd]);

  return (
    <div className="w-full flex flex-col items-center animate-fade-in-8bit">
      <GameClock year={currentDilemma.year} score={score} />
      <FootballField 
        currentDilemma={currentDilemma}
      />
      <div className="mt-4 w-full">
        <DilemmaDisplay
          title={currentDilemma.title}
          situation={currentDilemma.situation}
          question={currentDilemma.question}
        />
        <ChoiceButtons
          choices={currentDilemma.choices}
          onSelectChoice={handleSelectChoice}
        />
      </div>
      {showFeedback && selectedChoice && (
        <FeedbackModal
          choice={selectedChoice}
          historicalFact={currentDilemma.historicalFact}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};