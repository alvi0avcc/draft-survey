import type { MethodOfObtaining } from './draftSurvey';

export interface Tank {
  tankName: string;
  volume: number;
  density: number;
  temperature: number;
  methodOfObtaining: MethodOfObtaining;
}

export interface Bunkers {
  fuelOil: Tank[];
  dieselOil: Tank[];
  lubeOil: Tank[];
}

export interface DeductibleWeights {
  bunkers: Bunkers;
  ballast: Tank[];
  freshWater: Tank[];
  sewage: Tank[];
  others: Tank[];
}
