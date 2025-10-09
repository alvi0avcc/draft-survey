export interface DraftMeasurements {
  forward: number;
  aft: number;
  midPort: number;
  midStarboard: number;
}

export interface WaterProperties {
  density: number; // кг/м³
  temperature?: number;
}

export interface ShipResources {
  fuel: number;
  diesel: number;
  freshWater: number;
  ballast: number;
  other: number;
}

export interface HydrostaticData {
  draft: number;
  displacement: number;
  tpc: number;
  lcf: number;
  mtc: number;
}

export interface ShipData {
  id: string;
  name: string;
  imo: string;
  lbp: number; // Length Between Perpendiculars
  hydrostaticTable: HydrostaticData[];
}

export interface SurveyState {
  currentShip: ShipData | null;
  initialMeasurements: DraftMeasurements;
  finalMeasurements: DraftMeasurements;
  initialResources: ShipResources;
  finalResources: ShipResources;
  waterDensity: number;
  results: CalculationResults | null;
  isLoading: boolean;
  error: string | null;
}

export interface CalculationResults {
  initialDisplacement: number;
  finalDisplacement: number;
  cargoWeight: number;
  intermediateCalculations: {
    meanDraft: number;
    trim: number;
    correction: number;
    correctedDraft: number;
  };
}
