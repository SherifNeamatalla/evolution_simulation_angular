import {Creature} from '../../model/creature';
import {Food} from '../../model/food';
import {SimulationUtil} from '../simulation-util';
import {SimulationConfiguration} from '../../model/simulation-configuration';
import {XMovingDirection, YMovingDirection} from '../../model/moving-direction';

export class MovementController {
  public static doMove(creature: Creature, food: Food[], configuration: SimulationConfiguration): void {
    const nearbyFood = food.filter(f => {
      f.distance = SimulationUtil.calculateDistance(creature.position, f.position);
      return f.distance <= creature.pixelsVision;
    });
    let nearestFood;
    if (nearbyFood.length > 0) {
      nearestFood = MovementController.directCreatureTowardsNearestFood(creature, nearbyFood);
    }
    const foodAte = MovementController.doMoveCreatureAndEatIfCan(creature, configuration, nearestFood);
    if (foodAte) {
      food.splice(food.indexOf(nearestFood), 1);
      creature.energy += configuration.foodReward;
      if (creature.energy >= creature.maxEnergy) {
        creature.energy = creature.maxEnergy;
      }
      creature.foodCount++;
    }
    MovementController.resetFoodDistance(food);

  }

  private static directCreatureTowardsNearestFood(creature: Creature, nearbyFood: Food[]): Food {
    const nearestFood = nearbyFood.reduce((f1: Food, f2: Food) => {
      return f1.distance <= f2.distance ? f1 : f2;
    });
    creature.xMovingDirection = SimulationUtil.calculateXDirection(creature.position, nearestFood.position);
    creature.yMovingDirection = SimulationUtil.calculateYDirection(creature.position, nearestFood.position);

    return nearestFood;
  }

  private static doMoveCreatureAndEatIfCan(creature: Creature, configuration: SimulationConfiguration, nearestFood?: Food): boolean {

    if (MovementController.isInCorner(creature, configuration)) {
      creature.xMovingDirection = SimulationUtil.reverseXMovingDirection(creature.xMovingDirection);
      creature.yMovingDirection = SimulationUtil.reverseYMovingDirection(creature.yMovingDirection);

    }
    const xDirectionNum = creature.xMovingDirection === XMovingDirection.R ? 1 : creature.xMovingDirection === XMovingDirection.L ? -1 : 0;
    const yDirectionNum = creature.yMovingDirection === YMovingDirection.D ? 1 : creature.yMovingDirection === YMovingDirection.U ? -1 : 0;


    let newX = creature.position.x + (xDirectionNum * Math.sqrt(creature.pixelsPerTick));
    let newY = creature.position.y + (yDirectionNum * Math.sqrt(creature.pixelsPerTick));

    newX = Math.max(newX, 0);
    newX = Math.min(newX, configuration.canvasWidth);

    newY = Math.max(newY, 0);
    newY = Math.min(newY, configuration.canvasHeight);


    creature.position.x = newX;

    creature.position.y = newY;

    return nearestFood && SimulationUtil.isInRange(creature.position, nearestFood.position);

  }

  private static resetFoodDistance(food: Food[]): void {
    food.forEach(f => f.distance = null);
  }

  private static isInCorner(creature: Creature, configuration: SimulationConfiguration): boolean {
    return (creature.position.x === 0 || creature.position.x === configuration.canvasWidth)
      && (creature.position.y === 0 || creature.position.y === configuration.canvasHeight);
  }
}
