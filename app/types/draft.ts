export interface VesselParticulars {
  LBP?: number;
  breadth?: number;
  depth?: number;
}

export interface DraftReadings {
  Port?: number;
  Starboard?: number;
  markOffset?: number;
}

export interface DraftMarks {
  forward?: DraftReadings;
  midship?: DraftReadings;
  aft?: DraftReadings;
}

export interface WaterDensityReadings {
  measuredDensity?: number;
  measuredTemperature?: number;
  calibratedTemperature?: number;
}

export interface ResponseWaterDensityReadings {
  measuredDensity?: number;
  measuredTemperature?: number;
  calibratedTemperature?: number;
  message: string[];
}

export type WaterDensityMeasurements = WaterDensityReadings[];

// interface HydrostaticData {
//   displacement: number; // Водоизмещение (т)
//   tpc: number; // Tons per centimeter immersion (т/см)
//   lcf: number; // Longitudinal center of flotation (м)
//   mctc: number; // Moment to change trim one cm (т-м/см)
// }

// interface CalculationResults {
//   // Средние осадки
//   meanFwd: number;
//   meanMid: number;
//   meanAft: number;

//   // Средняя осадка по замерам
//   meanObserved: number;

//   // Дифферент и корректировки
//   trim: number;
//   correctionToPerpendiculars: number;
//   correctedDraft: number;

//   // Водоизмещение и поправки
//   displacementFromTables: number;
//   trimCorrection: number;
//   densityCorrection: number;
//   finalDisplacement: number;

//   // Итоговый вес груза
//   cargoQuantity: number;

//   // Дополнительные параметры
//   hoggingSagging: number;
//   quarterMean: number;
// }
