import {Creature} from '../../model/creature';
import {SimulationConfiguration} from '../../model/simulation-configuration';
import {Food} from '../../model/food';
import {MovementController} from './movement-controller';
import {ReproductionController} from './reproduction-controller';

export class TickController {

  public static liveTick(creature: Creature, population: Creature[], food: Food[], configuration: SimulationConfiguration): void {
    ReproductionController.doReproduceIfPossible(creature, population, configuration);
    MovementController.doMove(creature, food, configuration);
    TickController.decayEnergy(creature);
    TickController.killIfDead(creature);
    TickController.reduceMatingCoolDown(creature);
  }


  private static decayEnergy(creature: Creature): void {
    creature.energy -= creature.energyDecayPerTick;
  }

  private static killIfDead(creature: Creature): void {
    if (creature.energy === 0) {
      creature.isDead = true;
    }
  }

  private static reduceMatingCoolDown(creature: Creature): void {
    creature.matingCoolDown--;
  }
}
