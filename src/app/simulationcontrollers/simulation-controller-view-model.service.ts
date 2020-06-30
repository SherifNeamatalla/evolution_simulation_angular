import {Injectable} from '@angular/core';
import {SimulationConfiguration} from '../model/simulation-configuration';
import {BehaviorSubject} from 'rxjs';
import {Creature} from '../model/creature';
import {ResourcesFactory} from './resources-factory';
import {TickController} from './tick-controller';
import {Food} from '../model/food';

@Injectable({providedIn: 'root'})
export class SimulationControllerViewModelService {

  creatures = new BehaviorSubject<Creature[]>([]);
  food = new BehaviorSubject<Food[]>([]);

  constructor(public configuration: SimulationConfiguration) {
    this.initializeSimulation();
  }

  private initializeSimulation(): void {
    this.createInitialPopulation();
    this.generateFood();
    this.startLoop();
  }

  private startLoop(): void {
    setInterval(() => {
      this.creatures.value.forEach(creature => TickController.liveTick(creature, this.food.value, this.configuration));
    }, this.configuration.creaturesCount);
  }

  private createInitialPopulation(): void {
    const initialCreatures = [];
    for (let i = 0; i < this.configuration.creaturesCount; i++) {
      const newCreature = ResourcesFactory.createCreature(this.configuration);
      initialCreatures.push(newCreature);
    }
    this.creatures.next(initialCreatures);
  }

  private generateFood(): void {
    this.food.next(this.food.value.concat(ResourcesFactory.generateRoundFood(this.configuration)));

  }
}
