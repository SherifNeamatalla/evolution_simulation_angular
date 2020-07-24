import {Creature} from '../../model/creature';
import {SimulationConfiguration} from '../../model/simulation-configuration';
import {ResourcesFactory} from '../resources-factory';
import {SimulationUtil} from '../simulation-util';

export class ReproductionController {

  static doReproduceIfPossible(creature: Creature, population: Creature[], configuration: SimulationConfiguration): void {
    ReproductionController.checkNearbyForSuitableMate(creature, population, configuration);
  }


  private static checkNearbyForSuitableMate(creature: Creature, population: Creature[], configuration: SimulationConfiguration): void {
    if (creature.energy < configuration.minimumMatingEnergyPercentage * creature.maxEnergy || creature.matingCoolDown > 0) {
      return;
    }
    const nearbyPopulation = population.filter(c => {
      const distance = SimulationUtil.calculateDistance(creature.position, c.position);
      return distance <= creature.pixelsVision;
    });
    for (const possibleMate of nearbyPopulation) {
      if (possibleMate === creature || possibleMate.matingCoolDown > 0) {
        return;
      }
      if (ReproductionController.isSuitableForMating(possibleMate, creature)) {
        const agreed = ReproductionController.askForMating(creature, possibleMate, configuration);

        if (agreed) {
          const newCreature = ReproductionController.doMating(creature, possibleMate, configuration);
          population.push(newCreature);
          break;
        }
      }
    }

  }

  private static askForMating(possibleMate: Creature, creature: Creature, configuration: SimulationConfiguration): boolean {
    if (creature.energy < configuration.minimumMatingEnergyPercentage * creature.maxEnergy) {
      return false;
    }

    return ReproductionController.isSuitableForMating(creature, possibleMate);
  }

  private static isSuitableForMating(creature: Creature, possibleMate: Creature): boolean {
    return possibleMate.energy > creature.energy || creature.energy - possibleMate.energy <= creature.acceptedMatingEnergy
      && creature.foodCount - possibleMate.foodCount <= creature.acceptedMatingEnergy || possibleMate.foodCount >= creature.foodCount;
  }

  private static doMating(c1: Creature, c2: Creature, configuration: SimulationConfiguration): Creature {

    c1.matingCoolDown = configuration.matingCoolDown;
    c2.matingCoolDown = configuration.matingCoolDown;

    c1.childrenCount++;
    c2.childrenCount++;

    c1.energy -= c1.energyDecayPerTick * 2;
    c2.energy -= c2.energyDecayPerTick * 2;

    return ResourcesFactory.createCreatureFromParents(c1, c2, configuration);
  }
}
