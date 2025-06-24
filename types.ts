
export type BallMovementEffectValue =
  | "positive_advance"
  | "slight_advance"
  | "neutral_static"
  | "slight_retreat"
  | "negative_retreat";

export interface Option {
  text: string;
  effect: string;
}

export interface Dilemma {
  id: string;
  situation: string;
  options: Option[];
  feedback: string;
  historicalFact: string;
  ballMovementEffect: BallMovementEffectValue;
  nextDilemaId: string | null;
}

export enum GamePhase {
  START_SCREEN,
  DILEMMA_SCREEN,
  BALL_ANIMATING, // New phase for ball movement visibility
  FEEDBACK_SCREEN,
  END_SCREEN,
}