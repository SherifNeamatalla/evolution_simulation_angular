import {Position} from '../model/position';
import {XMovingDirection, YMovingDirection} from '../model/moving-direction';
import {SimulationConstants} from './simulation-constants';

export class SimulationUtil {

  public static getRandomFloat(min: number, max: number): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(3));
  }

  public static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public static chooseRandomInt(...nums: number[]): number {
    const randomIndex = SimulationUtil.getRandomInt(0, nums.length);
    return nums[randomIndex];
  }

  public static calculateDistance(position1: Position, position2: Position): number {
    const xSum = Math.pow(position1.x - position2.x, 2);
    const ySum = Math.pow(position1.y - position2.y, 2);
    return Math.sqrt(xSum + ySum);
  }

  public static reverseXMovingDirection(movingDirection: XMovingDirection): XMovingDirection {
    if (movingDirection === XMovingDirection.R) {
      return XMovingDirection.L;
    }
    return XMovingDirection.R;
  }

  public static reverseYMovingDirection(movingDirection: YMovingDirection): YMovingDirection {
    if (movingDirection === YMovingDirection.U) {
      return YMovingDirection.D;
    }
    return YMovingDirection.U;
  }

  // TODO : consider the radius of food and creature
  public static calculateXDirection(position1: Position, position2: Position): XMovingDirection {
    return position2.x > position1.x ? XMovingDirection.R : position2.x < position1.x ? XMovingDirection.L : XMovingDirection.N;
  }

  public static calculateYDirection(position1: Position, position2: Position): YMovingDirection {
    return position2.y > position1.y ? YMovingDirection.D : position2.y < position1.y ? YMovingDirection.U : YMovingDirection.N;

  }

  static isInRange(position1: Position, position2: Position): boolean {
    return Math.abs(position1.x - position2.x) <= SimulationConstants.CREATURE_SIZE_PX
      && Math.abs(position1.y - position2.y) <= SimulationConstants.CREATURE_SIZE_PX;

  }

  static calculateChance(chance: number): boolean {
    const randomNumber = SimulationUtil.getRandomFloat(0, 1);
    return randomNumber <= chance;
  }
}
