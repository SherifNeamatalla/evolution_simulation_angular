import {SimulationConstants} from '../simulationcontrollers/simulation-constants';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SimulationConfiguration {
  canvasWidth: number;
  canvasHeight: number;
  creaturesCount: number;
  fps: number;
  foodPerRound: number;
  minimumSpeed: number;
  maximumSpeed: number;
  minimumVisionRange: number;
  maximumVisionRange: number;
  maximumEnergyDecay: number;
  minimumEnergyDecay: number;
  maxMatingEnergyRange: number;
  minMatingEnergyRange: number;
  minimumMatingEnergyPercentage: number;
  matingCoolDown: number;
  maxFoodCount: number;
  foodReward: number;
  mutationRate: number;
  speedToDecayRatio: number;

  constructor() {
    this.canvasHeight = SimulationConstants.DEFAULT_CANVAS_HEIGHT;
    this.canvasWidth = SimulationConstants.DEFAULT_CANVAS_WIDTH;
    this.creaturesCount = SimulationConstants.DEFAULT_CREATURES_COUNT;
    this.fps = SimulationConstants.DEFAULT_FPS_MS;
    this.foodPerRound = SimulationConstants.DEFAULT_FOOD_PER_ROUND;
    this.minimumSpeed = SimulationConstants.DEFAULT_MAXIMUM_SPEED;
    this.maximumSpeed = SimulationConstants.DEFAULT_MINIMUM_SPEED;
    this.minimumVisionRange = SimulationConstants.DEFAULT_MINIMUM_VISION_RANGE;
    this.maximumVisionRange = SimulationConstants.DEFAULT_MAXIMUM_VISION_RANGE;
    this.maximumEnergyDecay = SimulationConstants.DEFAULT_MAXIMUM_ENERGY_DECAY;
    this.minimumEnergyDecay = SimulationConstants.DEFAULT_MINIMUM_ENERGY_DECAY;
    this.maxFoodCount = SimulationConstants.DEFAULT_MAX_FOOD_COUNT_PER_CREATURE;
    this.foodReward = SimulationConstants.DEFAULT_FOOD_REWARD;
    this.maxMatingEnergyRange = SimulationConstants.DEFAULT_MAX_MATING_ENERGY_RANGE;
    this.minMatingEnergyRange = SimulationConstants.DEFAULT_MIN_MATING_ENERGY_RANGE;
    this.minimumMatingEnergyPercentage = SimulationConstants.DEFAULT_MINIMUM_MATING_ENERGY_PERCENTAGE;
    this.matingCoolDown = SimulationConstants.DEFAULT_MATING_COOL_DOWN_TICKS;
    this.mutationRate = SimulationConstants.DEFAULT_MUTATION_RATE;
    this.speedToDecayRatio = SimulationConstants.DEFAULT_SPEED_TO_DECAY_RATIO;


  }
}
