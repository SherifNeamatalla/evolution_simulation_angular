import {Creature} from './creature';

export interface SingleAttributeStatistic {
  max?: Creature;
  min?: Creature;
  average?: number;
}

export interface PopulationStatistic {
  speedStatistic?: SingleAttributeStatistic;
  visionStatistic?: SingleAttributeStatistic;
  energyDecayStatistic?: SingleAttributeStatistic;
  foodCountStatistic: SingleAttributeStatistic;
  childrenCountStatistic: SingleAttributeStatistic;
}
