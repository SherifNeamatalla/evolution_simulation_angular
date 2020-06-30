import {MovingDirection} from './moving-direction';

export interface Creature {
  x: number;
  y: number;

  pixelsPerTick: number;
  pixelsVision: number;
  movingDirection: MovingDirection;
}
