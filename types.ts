// Fix: Provide full implementation for the types file.
export type FieldPosition =
  | 'circulo_central'
  | 'area_defensiva_jogador_centro'
  | 'area_defensiva_jogador_lateral'
  | 'meio_campo_defensivo'
  | 'meio_campo_lateral'
  | 'meio_campo_ofensivo'
  | 'area_de_ataque_adversario_lateral'
  | 'area_de_ataque_adversario_centro'
  | 'linha_de_fundo_adversaria'
  | 'gol_adversario';

export interface Choice {
  id: string;
  text: string;
  feedback: string;
  points: number;
}

export interface Dilemma {
  id: number;
  year: number;
  position: FieldPosition;
  title: string;
  situation: string;
  question: string;
  choices: Choice[];
  historicalFact: string;
}

export type Screen = 'welcome' | 'game' | 'end' | 'dashboard' | 'about' | 'credits';

export interface GameResult {
  score: number;
  timestamp: number;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}