
import type { FieldPosition } from './types';

export const FIELD_POSITIONS: Record<FieldPosition, { top: string; left: string }> = {
  circulo_central: { top: '48%', left: '48%' },
  area_defensiva_jogador_centro: { top: '80%', left: '48%' },
  area_defensiva_jogador_lateral: { top: '75%', left: '20%' },
  meio_campo_defensivo: { top: '65%', left: '60%' },
  meio_campo_lateral: { top: '50%', left: '25%' },
  meio_campo_ofensivo: { top: '35%', left: '40%' },
  area_de_ataque_adversario_lateral: { top: '25%', left: '75%' },
  area_de_ataque_adversario_centro: { top: '20%', left: '50%' },
  linha_de_fundo_adversaria: { top: '10%', left: '35%' },
  gol_adversario: { top: '2%', left: '48%' },
};
