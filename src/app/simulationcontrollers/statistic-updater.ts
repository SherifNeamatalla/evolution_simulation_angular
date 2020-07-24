import {PopulationStatistic, SingleAttributeStatistic} from '../model/population-statistic';
import {Creature} from '../model/creature';

export class StatisticUpdater {
  public static updateStatistic(population: Creature[]): PopulationStatistic {

    const newStatistic = {} as PopulationStatistic;

    StatisticUpdater.enrichSingleStatisticAttribute(newStatistic, population, 'pixelsPerTick', 'speedStatistic');
    StatisticUpdater.enrichSingleStatisticAttribute(newStatistic, population, 'pixelsVision', 'visionStatistic');
    StatisticUpdater.enrichSingleStatisticAttribute(newStatistic, population, 'energyDecayPerTick', 'energyDecayStatistic');
    StatisticUpdater.enrichSingleStatisticAttribute(newStatistic, population, 'foodCount', 'foodCountStatistic');
    StatisticUpdater.enrichSingleStatisticAttribute(newStatistic, population, 'childrenCount', 'childrenCountStatistic');

    return newStatistic;
  }

  private static enrichSingleStatisticAttribute(newStatistic: PopulationStatistic, population: Creature[],
                                                creatureAttribute: string, statisticName: string): void {
    if (population.length === 0) {
      return;
    }
    const sortedPopulation = population.sort((c1, c2) => {
      return c1[creatureAttribute] > c2[creatureAttribute] ? -1 : 1;
    });

    const newAttributeStatistic = {} as SingleAttributeStatistic;
    newAttributeStatistic.max = sortedPopulation[0];
    newAttributeStatistic.min = sortedPopulation[sortedPopulation.length - 1];
    const sum = sortedPopulation.reduce((total, c2) => total + c2[creatureAttribute], 0);
    newAttributeStatistic.average = sum / sortedPopulation.length;

    newStatistic[statisticName] = newAttributeStatistic;
  }
}
