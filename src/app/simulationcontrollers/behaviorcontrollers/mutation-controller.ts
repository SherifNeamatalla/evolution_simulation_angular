import {Creature} from '../../model/creature';
import {SimulationConfiguration} from '../../model/simulation-configuration';
import {SimulationUtil} from '../simulation-util';

export class MutationController {
  public static mutateCreature(creature: Creature, configuration: SimulationConfiguration): void {

    MutationController.tryMutation(creature, 'pixelsPerTick', configuration, configuration.maximumSpeed, configuration.minimumSpeed);
    MutationController.tryMutation(creature, 'energyDecayPerTick', configuration, configuration.maximumEnergyDecay, configuration.minimumEnergyDecay);
    MutationController.tryMutation(creature, 'pixelsVision', configuration, configuration.maximumVisionRange, configuration.minimumVisionRange);


  }

  private static tryMutation(creature: Creature, attributeName: string, configuration: SimulationConfiguration, max: number, min: number): void {
    if (SimulationUtil.calculateChance(configuration.mutationRate)) {
      creature[attributeName] = SimulationUtil.calculateChance(0.5) ? creature[attributeName] + 3 : creature[attributeName] - 3;
      creature[attributeName] = Math.min(Math.max(creature[attributeName], min), max);
    }
  }
}
