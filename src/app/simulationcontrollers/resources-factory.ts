import {SimulationUtil} from './simulation-util';
import {Creature} from '../model/creature';
import {SimulationConfiguration} from '../model/simulation-configuration';
import {Food} from '../model/food';
import {Position} from '../model/position';
import {XMovingDirection, YMovingDirection} from '../model/moving-direction';
import {MutationController} from './behaviorcontrollers/mutation-controller';

export class ResourcesFactory {

  public static createCreature(configuration: SimulationConfiguration): Creature {
    const x = SimulationUtil.getRandomFloat(0, configuration.canvasWidth);
    const y = SimulationUtil.getRandomFloat(0, configuration.canvasHeight);
    const position = {x, y} as Position;

    const pixelsPerTick = SimulationUtil.getRandomFloat(configuration.minimumSpeed, configuration.maximumSpeed);
    const pixelsVision = SimulationUtil.getRandomFloat(configuration.minimumVisionRange, configuration.maximumVisionRange);
    // const energyDecayPerTick = SimulationUtil.getRandomFloat(configuration.minimumEnergyDecay, configuration.maximumEnergyDecay);
    const energyDecayPerTick = pixelsPerTick * configuration.speedToDecayRatio;
    const acceptedMatingEnergy = SimulationUtil.getRandomFloat(configuration.minMatingEnergyRange, configuration.maxMatingEnergyRange);

    const xMovingDirection = XMovingDirection.R;
    const yMovingDirection = YMovingDirection.D;

    const isDead = false;

    const energy = 100;

    const matingCoolDown = configuration.matingCoolDown;


    const maxEnergy = energy;

    const childrenCount = 0;


    const foodCount = 0;
    return {
      position,
      pixelsPerTick,
      pixelsVision,
      xMovingDirection,
      yMovingDirection,
      isDead,
      energy,
      energyDecayPerTick,
      maxEnergy,
      foodCount,
      acceptedMatingEnergy,
      matingCoolDown,
      childrenCount
    } as Creature;
  }

  public static createCreatureFromParents(c1: Creature, c2: Creature, configuration: SimulationConfiguration): Creature {
    const x = c1.position.x;
    const y = c1.position.y;
    const position = {x, y} as Position;
    const isDead = false;
    const maxEnergy = 100;
    const energy = (c1.energy / 2 + c2.energy / 2) <= maxEnergy ? (c1.energy / 2 + c2.energy / 2) : maxEnergy;
    const foodCount = 0;
    const xMovingDirection = XMovingDirection.R;
    const yMovingDirection = YMovingDirection.D;

    const pixelsPerTick = SimulationUtil.chooseRandomInt(c1.pixelsPerTick, c2.pixelsPerTick);
    const pixelsVision = SimulationUtil.chooseRandomInt(c1.pixelsVision, c2.pixelsVision);
    // const energyDecayPerTick = SimulationUtil.chooseRandomInt(c1.energyDecayPerTick, c2.energyDecayPerTick);
    const energyDecayPerTick = pixelsPerTick * configuration.speedToDecayRatio;
    const acceptedMatingEnergy = SimulationUtil.chooseRandomInt(c1.acceptedMatingEnergy, c2.acceptedMatingEnergy);

    const matingCoolDown = configuration.matingCoolDown;

    const childrenCount = 0;


    const creature = {
      position,
      pixelsPerTick,
      pixelsVision,
      xMovingDirection,
      yMovingDirection,
      isDead,
      energy,
      energyDecayPerTick,
      maxEnergy,
      foodCount,
      acceptedMatingEnergy,
      matingCoolDown,
      childrenCount
    } as Creature;

    MutationController.mutateCreature(creature, configuration);
    return creature;
  }

  public static generateSingleFood(configuration: SimulationConfiguration): Food {
    const x = SimulationUtil.getRandomFloat(0, configuration.canvasWidth);
    const y = SimulationUtil.getRandomFloat(0, configuration.canvasHeight);
    const position = {x, y} as Position;
    return {
      position
    } as Food;
  }

  public static generateRoundFood(configuration: SimulationConfiguration, populationCount: number): Food[] {
    const generatedList = [];

    const foodCount = Math.ceil(configuration.maxFoodCount * populationCount);
    for (let i = 0; i < configuration.foodPerRound; i++) {
      const newFood = ResourcesFactory.generateSingleFood(configuration);
      generatedList.push(newFood);
    }
    return generatedList;
  }

}
