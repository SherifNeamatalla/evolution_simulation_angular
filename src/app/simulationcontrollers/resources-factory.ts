import {SimulationUtil} from './simulation-util';
import {Creature} from '../model/creature';
import {SimulationConfiguration} from '../model/simulation-configuration';
import {Food} from '../model/food';
import {Position} from '../model/position';
import {XMovingDirection, YMovingDirection} from '../model/moving-direction';

export class ResourcesFactory {

  public static createCreature(configuration: SimulationConfiguration): Creature {
    const x = SimulationUtil.getRandomInt(0, configuration.canvasWidth);
    const y = SimulationUtil.getRandomInt(0, configuration.canvasHeight);
    const position = {x, y} as Position;

    const pixelsPerTick = SimulationUtil.getRandomInt(configuration.minimumSpeed, configuration.maximumSpeed);
    const pixelsVision = SimulationUtil.getRandomInt(configuration.minimumVisionRange, configuration.maximumVisionRange);
    const xMovingDirection = XMovingDirection.R;
    const yMovingDirection = YMovingDirection.D;

    return {
      position, pixelsPerTick, pixelsVision, xMovingDirection, yMovingDirection
    } as Creature;
  }

  public static generateSingleFood(configuration: SimulationConfiguration): Food {
    const x = SimulationUtil.getRandomInt(0, configuration.canvasWidth);
    const y = SimulationUtil.getRandomInt(0, configuration.canvasHeight);
    const position = {x, y} as Position;
    return {
      position
    } as Food;
  }

  public static generateRoundFood(configuration: SimulationConfiguration): Food[] {
    const generatedList = [];
    for (let i = 0; i < configuration.foodPerRound; i++) {
      const newFood = ResourcesFactory.generateSingleFood(configuration);
      generatedList.push(newFood);
    }
    return generatedList;
  }

}
