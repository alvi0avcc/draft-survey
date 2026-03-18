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
