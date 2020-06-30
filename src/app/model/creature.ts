import {Position} from './position';
import {XMovingDirection, YMovingDirection} from './moving-direction';

export interface Creature {
  position: Position;
  pixelsPerTick: number;
  pixelsVision: number;
  yMovingDirection: YMovingDirection;
  xMovingDirection: XMovingDirection;
}
