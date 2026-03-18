import memoize from 'memoizee';
import * as yup from 'yup';
import { WATER_EXPANSION_COEFFICIENT } from '~/const/water.const';
import { waterDensitySchema } from '~/validation/water-density.schema';

import type { ResponseWaterDensityReadings, WaterDensityReadings } from '../types/waterDensity';

export const recalculateWaterDensity = (
  data: WaterDensityReadings
): number | ResponseWaterDensityReadings => {
  const validate = validateWaterDensityData(data);

  if (!validate.isValid)
    return {
      measuredDensity: data.measuredDensity,
      measuredTemperature: data.measuredTemperature,
      calibratedTemperature: data.calibratedTemperature,
      message: validate.errors,
    };

  return calculateCorrectedDensity(
    data.measuredDensity!,
    data.measuredTemperature!,
    data.calibratedTemperature!
  );
};

export const validateWaterDensityData = (
  data: WaterDensityReadings
): {
  isValid: boolean;
  errors: string[];
} => {
  try {
    waterDensitySchema.validateSync(data, { abortEarly: false });
    return { isValid: true, errors: [] };
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return { isValid: false, errors: error.errors };
    }
    return { isValid: false, errors: ['Validation failed'] };
  }
};

export const calculateCorrectedDensity = (
  measuredDensity: number,
  measuredTemperature: number,
  calibratedTemperature: number
): number => {
  const tempDiff = measuredTemperature - calibratedTemperature;
  return measuredDensity * (1 - WATER_EXPANSION_COEFFICIENT * tempDiff);
};

export const memoizedRecalculateWaterDensity = memoize(recalculateWaterDensity, {
  length: 1,
  maxAge: Infinity,
  max: 100,
  normalizer: function (args) {
    return JSON.stringify(args[0]);
  },
});

export interface AverageWaterDensityResult {
  average: number;
  validCount: number;
  totalCount: number;
  errors: ResponseWaterDensityReadings[];
  individualResults: (number | ResponseWaterDensityReadings)[];
}

export const calculateAverageWaterDensity = (
  measurements: WaterDensityReadings[]
): AverageWaterDensityResult => {
  const individualResults = measurements.map((m) => memoizedRecalculateWaterDensity(m));

  const validResults: number[] = [];
  const errors: ResponseWaterDensityReadings[] = [];

  individualResults.forEach((result) => {
    if (typeof result === 'number') {
      validResults.push(result);
    } else {
      errors.push(result);
    }
  });

  const average =
    validResults.length > 0
      ? validResults.reduce((sum, val) => sum + val, 0) / validResults.length
      : 0;

  return {
    average,
    validCount: validResults.length,
    totalCount: measurements.length,
    errors,
    individualResults,
  };
};
