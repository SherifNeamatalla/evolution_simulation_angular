import {Creature} from '../model/creature';
import {SimulationConfiguration} from '../model/simulation-configuration';
import {Food} from '../model/food';

export class TickController {

  public static liveTick(creature: Creature, food: Food[], configuration: SimulationConfiguration): void {
    creature.x = creature.x + 25;
    creature.y = creature.y + 25;
    if (creature.x > configuration.canvasWidth) {
      creature.x = configuration.canvasWidth;
    }
    if (creature.y > configuration.canvasHeight) {
      creature.y = configuration.canvasHeight;
    }
  }
}
