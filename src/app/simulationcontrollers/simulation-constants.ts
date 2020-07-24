export class SimulationConstants {
  static DEFAULT_CANVAS_WIDTH = 1870;
  static DEFAULT_CANVAS_HEIGHT = 768;
  static DEFAULT_CREATURES_COUNT = 100;
  static DEFAULT_FPS_MS = 1000 / 60;
  static DEFAULT_FOOD_PER_ROUND = 20;
  static DEFAULT_MAXIMUM_SPEED = 5;
  static DEFAULT_MINIMUM_SPEED = 50;
  static DEFAULT_MINIMUM_VISION_RANGE = 25;
  static DEFAULT_MAXIMUM_VISION_RANGE = 100;
  static CREATURE_SIZE_PX = 20;
  static DEFAULT_MINIMUM_ENERGY_DECAY = 2 / 6;
  static DEFAULT_MAXIMUM_ENERGY_DECAY = 25 / 6;
  static DEFAULT_MAX_FOOD_COUNT_PER_CREATURE = 0.6;
  static DEFAULT_FOOD_REWARD = 25;
  static DEFAULT_MAX_MATING_ENERGY_RANGE = 20;
  static DEFAULT_MIN_MATING_ENERGY_RANGE = 0;
  static DEFAULT_MINIMUM_MATING_ENERGY_PERCENTAGE = 0.5;
  static DEFAULT_MATING_COOL_DOWN_TICKS = SimulationConstants.DEFAULT_FPS_MS * 10;
  static DEFAULT_MUTATION_RATE = 0.4;
  static DEFAULT_SPEED_TO_DECAY_RATIO = 0.03;
}
