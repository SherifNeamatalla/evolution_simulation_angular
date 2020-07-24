import {Position} from './position';
import {XMovingDirection, YMovingDirection} from './moving-direction';

export class Creature {
  isDead: boolean;
  position: Position;
  yMovingDirection: YMovingDirection;
  xMovingDirection: XMovingDirection;
  // Stats
  pixelsPerTick: number;
  pixelsVision: number;

  energy: number;
  maxEnergy: number;
  size: number;
  energyDecayPerTick: number;
  acceptedMatingEnergy: number;

  foodCount: number;

  matingCoolDown: number;

  childrenCount = 0;
}
