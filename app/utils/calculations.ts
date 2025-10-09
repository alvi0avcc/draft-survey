// utils/calculations.ts
import { DraftMeasurements, HydrostaticData } from '../types';

export const calculateMeanDraft = (measurements: DraftMeasurements): number => {
  const { forward, aft, midPort, midStarboard } = measurements;
  const midMean = (midPort + midStarboard) / 2;
  return (forward + aft + 6 * midMean) / 8;
};

export const calculateTrim = (forward: number, aft: number): number => {
  return forward - aft;
};

export const interpolateHydrostaticData = (
  table: HydrostaticData[],
  draft: number
): HydrostaticData => {
  // Сортируем таблицу по осадке
  const sortedTable = [...table].sort((a, b) => a.draft - b.draft);

  // Находим ближайшие значения для интерполяции
  const lower = sortedTable.findLast(item => item.draft <= draft);
  const upper = sortedTable.find(item => item.draft >= draft);

  if (!lower || !upper || lower.draft === upper.draft) {
    return lower || upper || table[0];
  }

  // Линейная интерполяция
  const ratio = (draft - lower.draft) / (upper.draft - lower.draft);

  return {
    draft,
    displacement: lower.displacement + (upper.displacement - lower.displacement) * ratio,
    tpc: lower.tpc + (upper.tpc - lower.tpc) * ratio,
    lcf: lower.lcf + (upper.lcf - lower.lcf) * ratio,
    mtc: lower.mtc + (upper.mtc - lower.mtc) * ratio,
  };
};

export const applyDensityCorrection = (
  displacement: number,
  actualDensity: number,
  standardDensity: number = 1.025
): number => {
  return displacement * (actualDensity / standardDensity);
};
