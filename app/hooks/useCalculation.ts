// hooks/useCalculation.ts
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { calculateResults, calculationSuccess, calculationError } from '../store/slices/surveySlice';
import {
  calculateMeanDraft,
  calculateTrim,
  interpolateHydrostaticData,
  applyDensityCorrection,
} from '../utils/calculations';
import { CalculationResults } from '../types';

export const useCalculation = () => {
  const dispatch = useAppDispatch();
  const survey = useAppSelector((state) => state.survey);

  const performCalculation = useCallback(() => {
    dispatch(calculateResults());

    try {
      if (!survey.currentShip) {
        throw new Error('Данные судна не загружены');
      }

      const { initialMeasurements, finalMeasurements, waterDensity, initialResources, finalResources } = survey;

      // Расчет для начального состояния
      const initialMeanDraft = calculateMeanDraft(initialMeasurements);
      const initialTrim = calculateTrim(initialMeasurements.forward, initialMeasurements.aft);
      const initialHydrostatic = interpolateHydrostaticData(
        survey.currentShip.hydrostaticTable,
        initialMeanDraft
      );
      const initialDisplacement = applyDensityCorrection(
        initialHydrostatic.displacement,
        waterDensity
      );

      // Расчет для конечного состояния
      const finalMeanDraft = calculateMeanDraft(finalMeasurements);
      const finalTrim = calculateTrim(finalMeasurements.forward, finalMeasurements.aft);
      const finalHydrostatic = interpolateHydrostaticData(
        survey.currentShip.hydrostaticTable,
        finalMeanDraft
      );
      const finalDisplacement = applyDensityCorrection(
        finalHydrostatic.displacement,
        waterDensity
      );

      // Расчет изменения запасов
      const resourcesChange = Object.keys(finalResources).reduce((acc, key) => {
        const resourceKey = key as keyof typeof finalResources;
        return acc + (finalResources[resourceKey] - initialResources[resourceKey]);
      }, 0);

      // Расчет массы груза
      const cargoWeight = finalDisplacement - initialDisplacement - resourcesChange;

      const results: CalculationResults = {
        initialDisplacement,
        finalDisplacement,
        cargoWeight,
        intermediateCalculations: {
          meanDraft: finalMeanDraft,
          trim: finalTrim,
          correction: 0, // Можно добавить расчет поправки на дифферент
          correctedDraft: finalMeanDraft,
        },
      };

      dispatch(calculationSuccess(results));
    } catch (error) {
      dispatch(calculationError(error instanceof Error ? error.message : 'Ошибка расчета'));
    }
  }, [dispatch, survey]);

  return { performCalculation };
};
