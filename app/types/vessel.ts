export interface Vessel {
  name?: string;
  imo?: string;
  LBP?: number;
  length?: number;
  breadth?: number;
  depth?: number;
  lightShip?: number;
  deadweight?: number;
  constantUsually?: number;
  flag?: string;
  type?: string;
  owner?: string;
  operator?: string;
}

export type PositionBylength = 'forward' | 'midship' | 'aft';

export type PositionByBreadth = 'port' | 'starboard';

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
