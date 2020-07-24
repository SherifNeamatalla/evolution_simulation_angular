import {Injectable} from '@angular/core';
import {SimulationConfiguration} from '../model/simulation-configuration';
import {BehaviorSubject} from 'rxjs';
import {Creature} from '../model/creature';
import {ResourcesFactory} from './resources-factory';
import {TickController} from './behaviorcontrollers/tick-controller';
import {Food} from '../model/food';
import {PopulationStatistic} from '../model/population-statistic';
import {StatisticUpdater} from './statistic-updater';

@Injectable({providedIn: 'root'})
export class SimulationControllerViewModelService {

  population = new BehaviorSubject<Creature[]>([]);
  chosenCreature = new BehaviorSubject<Creature>(null);
  food = new BehaviorSubject<Food[]>([]);
  statistic = new BehaviorSubject<PopulationStatistic>(null);

  isPaused = new BehaviorSubject<boolean>(false);

  loopSubscriptionID: number;

  currentTick = 0;

  constructor(public configuration: SimulationConfiguration) {
    this.initializeSimulation();
    this.initializeSubscriptions();
  }

  onCreatureSelected(creature: Creature): void {
    this.chosenCreature.next(creature);

  }

  onPauseClicked(): void {
    this.isPaused.next(!this.isPaused.value);
  }

  onRestartClicked(): void {
    this.initializeSimulation();
    this.initializeSubscriptions();
  }

  private initializeSimulation(): void {
    this.createInitialPopulation();
    this.generateFood();
    this.startLoop();
  }

  private startLoop(): void {
    this.loopSubscriptionID = setInterval(() => {
      this.population.value.forEach(creature => {
        TickController.liveTick(creature, this.population.value, this.food.value, this.configuration);
        if (creature.energy <= 0) {
          this.population.value.splice(this.population.value.indexOf(creature), 1);
        }
        this.currentTick++;
        if (this.currentTick >= 600 && this.food.value.length < this.configuration.maxFoodCount * this.population.value.length) {
          this.currentTick = 0;
          this.generateFood();
          this.updateStatistic();
        }
      });
    }, this.configuration.fps);
  }

  private createInitialPopulation(): void {
    const initialCreatures = [];
    for (let i = 0; i < this.configuration.creaturesCount; i++) {
      const newCreature = ResourcesFactory.createCreature(this.configuration);
      initialCreatures.push(newCreature);
    }
    this.population.next(initialCreatures);
  }

  private generateFood(): void {
    this.food.next(this.food.value.concat(ResourcesFactory.generateRoundFood(this.configuration, this.population.value.length)));
  }

  private initializeSubscriptions(): void {
    this.isPaused.subscribe(next => {
      if (next && this.loopSubscriptionID === undefined) {
        this.startLoop();
      } else {
        this.stopLoop();
      }
    });
  }

  private stopLoop(): void {
    clearInterval(this.loopSubscriptionID);
    this.loopSubscriptionID = undefined;
  }

  private updateStatistic(): void {
    this.statistic.next(StatisticUpdater.updateStatistic(this.population.value));

  }
}
