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


  constructor() {
    this.canvasHeight = SimulationConstants.DEFAULT_CANVAS_HEIGHT;
    this.canvasWidth = SimulationConstants.DEFAULT_CANVAS_WIDTH;
    this.creaturesCount = SimulationConstants.DEFAULT_CREATURES_COUNT;
    this.fps = SimulationConstants.DEFAULT_FPS_MS;
    this.foodPerRound = SimulationConstants.DEFAULT_FOOD_PER_ROUND;
    this.minimumSpeed = SimulationConstants.DEFAULT_MAXIMUM_SPEED;
    this.maximumSpeed = SimulationConstants.DEFAULT_MINIMUM_SPEED;
    this.minimumVisionRange = SimulationConstants.DEFAULT_MAXIMUM_VISION_RANGE;
    this.maximumVisionRange = SimulationConstants.DEFAULT_MINIMUM_VISION_RANGE;
  }
}
