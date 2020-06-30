import {Creature} from '../model/creature';
import {SimulationConfiguration} from '../model/simulation-configuration';
import {Food} from '../model/food';
import {SimulationUtil} from './simulation-util';
import {XMovingDirection, YMovingDirection} from '../model/moving-direction';

export class TickController {

  public static liveTick(creature: Creature, food: Food[], configuration: SimulationConfiguration): void {
    const nearbyFood = food.filter(f => {
      f.distance = SimulationUtil.calculateDistance(creature.position, f.position);
      return f.distance <= creature.pixelsVision;
    });
    let nearestFood;
    if (nearbyFood.length > 0) {
      nearestFood = TickController.directCreatureTowardsNearestFood(creature, nearbyFood);
    }
    const foodAte = TickController.doMoveCreatureAndEatIfCan(creature, nearestFood);

    if (creature.position.x > configuration.canvasWidth) {
      creature.position.x = configuration.canvasWidth;
    }
    if (creature.position.y > configuration.canvasHeight) {
      creature.position.y = configuration.canvasHeight;
    }
    food.forEach(f => f.distance = null);
    if (foodAte) {
      food.splice(food.indexOf(nearestFood), 1);
    }
  }

  private static directCreatureTowardsNearestFood(creature: Creature, nearbyFood: Food[]): Food {
    const nearestFood = nearbyFood.reduce((f1: Food, f2: Food) => {
      return f1.distance <= f2.distance ? f1 : f2;
    });
    creature.xMovingDirection = SimulationUtil.calculateXDirection(creature.position, nearestFood.position);
    creature.yMovingDirection = SimulationUtil.calculateYDirection(creature.position, nearestFood.position);

    return nearestFood;
  }

  private static doMoveCreatureAndEatIfCan(creature: Creature, nearestFood?: Food): boolean {
    const xDirectionNum = creature.xMovingDirection === XMovingDirection.R ? 1 : creature.xMovingDirection === XMovingDirection.L ? -1 : 0;
    const yDirectionNum = creature.yMovingDirection === YMovingDirection.D ? 1 : creature.yMovingDirection === YMovingDirection.U ? -1 : 0;

    creature.position.x = creature.position.x + (xDirectionNum * Math.sqrt(creature.pixelsPerTick));
    creature.position.y = creature.position.y + (yDirectionNum * Math.sqrt(creature.pixelsPerTick));

    if (nearestFood && SimulationUtil.isInRange(creature.position, nearestFood.position)) {
      console.log('Ate food!');
      return true;
    }
    return false;
  }
}
