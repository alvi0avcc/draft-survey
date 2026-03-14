import type {
  DraftMarks,
  ResponseWaterDensityReadings,
  VesselParticulars,
  WaterDensityMeasurements,
  WaterDensityReadings,
} from '../types/draft';

import {
  calculateAverageWaterDensity,
  memoizedRecalculateWaterDensity,
} from './water-density.utils';

export class DraftSurveyCalculator {
  private vesselParticulars: VesselParticulars;
  private draftMarks: DraftMarks;
  private waterDensityMeasurements: WaterDensityMeasurements;

  constructor() {
    this.vesselParticulars = { breadth: undefined, depth: undefined, LBP: undefined };
    this.draftMarks = { forward: undefined, midship: undefined, aft: undefined };
    this.waterDensityMeasurements = [];
  }

  public get getWaterDensityMeasurements() {
    return this.waterDensityMeasurements;
  }

  public recalculateWaterDensity(
    data: WaterDensityReadings
  ): number | ResponseWaterDensityReadings {
    return memoizedRecalculateWaterDensity(data);
  }

  public get getWaterDensity() {
    return calculateAverageWaterDensity(this.waterDensityMeasurements);
  }
}

//   /**
//    * Расчет средних осадок по бортам
//    */
//   private calculateMeanDrafts(readings: DraftReadings): {
//     meanFwd: number;
//     meanMid: number;
//     meanAft: number;
//   } {
//     const meanFwd = (readings.forwardPort + readings.forwardStarboard) / 2;
//     const meanMid = (readings.midshipPort + readings.midshipStarboard) / 2;
//     const meanAft = (readings.aftPort + readings.aftStarboard) / 2;

//     return { meanFwd, meanMid, meanAft };
//   }

//   /**
//    * Расчет средней наблюдаемой осадки
//    */
//   private calculateMeanObserved(meanFwd: number, meanMid: number, meanAft: number): number {
//     return (meanFwd + meanMid * 2 + meanAft) / 4;
//   }

//   /**
//    * Расчет дифферента и коррекции на перпендикуляры
//    */
//   private calculateTrimAndCorrection(
//     meanFwd: number,
//     meanAft: number,
//     meanObserved: number,
//     lcf: number
//   ): { trim: number; correction: number } {
//     const trim = meanAft - meanFwd;
//     const correction = (trim * lcf * 100) / this.particulars.lengthBetweenPerpendiculars;

//     return { trim, correction };
//   }

//   /**
//    * Расчет четвертинной осадки (для определения прогиба/перегиба)
//    */
//   private calculateQuarterMean(meanFwd: number, meanMid: number, meanAft: number): number {
//     return (meanFwd + meanAft + meanMid * 6) / 8;
//   }

//   /**
//    * Расчет прогиба/перегиба (hogging/sagging)
//    */
//   private calculateHoggingSagging(meanObserved: number, quarterMean: number): number {
//     return meanObserved - quarterMean;
//   }

//   /**
//    * Коррекция на плотность воды
//    */
//   private applyDensityCorrection(displacement: number, densityData: DensityData): number {
//     return (displacement * densityData.densityAtLocation) / densityData.standardDensity;
//   }

//   /**
//    * Основной метод расчета драфт сюрвея
//    */
//   public calculateDraftSurvey(
//     initialReadings: DraftReadings, // Замеры до погрузки
//     finalReadings: DraftReadings, // Замеры после погрузки
//     initialHydrostatics: HydrostaticData,
//     finalHydrostatics: HydrostaticData,
//     densityData: DensityData,
//     ballastAndStores: {
//       initial: number; // Балласт и запасы до погрузки (т)
//       final: number; // Балласт и запасы после погрузки (т)
//     }
//   ): {
//     initial: CalculationResults;
//     final: CalculationResults;
//     cargoWeight: number;
//     details: {
//       displacementDifference: number;
//       ballastDifference: number;
//       netCargo: number;
//     };
//   } {
//     // Расчет для начального состояния
//     const initialResults = this.calculateSingleSurvey(
//       initialReadings,
//       initialHydrostatics,
//       densityData
//     );

//     // Расчет для конечного состояния
//     const finalResults = this.calculateSingleSurvey(finalReadings, finalHydrostatics, densityData);

//     // Разность водоизмещений
//     const displacementDifference =
//       finalResults.finalDisplacement - initialResults.finalDisplacement;

//     // Изменение балласта и запасов
//     const ballastDifference = ballastAndStores.final - ballastAndStores.initial;

//     // Чистый вес груза
//     const cargoWeight = displacementDifference - ballastDifference;

//     return {
//       initial: initialResults,
//       final: finalResults,
//       cargoWeight,
//       details: {
//         displacementDifference,
//         ballastDifference,
//         netCargo: cargoWeight,
//       },
//     };
//   }

//   /**
//    * Расчет одного замера
//    */
//   private calculateSingleSurvey(
//     readings: DraftReadings,
//     hydrostatics: HydrostaticData,
//     densityData: DensityData
//   ): CalculationResults {
//     // 1. Расчет средних осадок
//     const { meanFwd, meanMid, meanAft } = this.calculateMeanDrafts(readings);

//     // 2. Расчет средней наблюдаемой осадки
//     const meanObserved = this.calculateMeanObserved(meanFwd, meanMid, meanAft);

//     // 3. Расчет четвертинной осадки
//     const quarterMean = this.calculateQuarterMean(meanFwd, meanMid, meanAft);

//     // 4. Расчет прогиба/перегиба
//     const hoggingSagging = this.calculateHoggingSagging(meanObserved, quarterMean);

//     // 5. Расчет дифферента и коррекции
//     const { trim, correction } = this.calculateTrimAndCorrection(
//       meanFwd,
//       meanAft,
//       meanObserved,
//       hydrostatics.lcf
//     );

//     // 6. Скорректированная осадка
//     const correctedDraft = meanObserved + correction;

//     // 7. Водоизмещение (в реальных условиях берется из гидростатических таблиц)
//     // Здесь используется приближенное значение из входных данных
//     const displacementFromTables = hydrostatics.displacement;

//     // 8. Коррекция на дифферент (упрощенно)
//     const trimCorrection =
//       (trim * 100 * hydrostatics.tpc * hydrostatics.lcf) /
//       this.particulars.lengthBetweenPerpendiculars;

//     // 9. Коррекция на плотность
//     const densityCorrectedDisplacement = this.applyDensityCorrection(
//       displacementFromTables + trimCorrection,
//       densityData
//     );

//     // 10. Итоговое водоизмещение
//     const finalDisplacement = densityCorrectedDisplacement;

//     return {
//       meanFwd,
//       meanMid,
//       meanAft,
//       meanObserved,
//       trim,
//       correctionToPerpendiculars: correction,
//       correctedDraft,
//       displacementFromTables,
//       trimCorrection,
//       densityCorrection: densityCorrectedDisplacement - (displacementFromTables + trimCorrection),
//       finalDisplacement,
//       cargoQuantity: 0, // Заполняется в общем расчете
//       hoggingSagging,
//       quarterMean,
//     };
//   }

//   /**
//    * Форматирование результатов для вывода
//    */
//   public formatResults(results: {
//     initial: CalculationResults;
//     final: CalculationResults;
//     cargoWeight: number;
//     details: any;
//   }): string {
//     return `
// РЕЗУЛЬТАТЫ ДРАФТ СЮРВЕЯ
// ======================
// Начальное состояние:
// - Средняя осадка нос: ${results.initial.meanFwd.toFixed(3)} м
// - Средняя осадка мидель: ${results.initial.meanMid.toFixed(3)} м
// - Средняя осадка корма: ${results.initial.meanAft.toFixed(3)} м
// - Дифферент: ${results.initial.trim.toFixed(3)} м
// - Водоизмещение: ${results.initial.finalDisplacement.toFixed(3)} т

// Конечное состояние:
// - Средняя осадка нос: ${results.final.meanFwd.toFixed(3)} м
// - Средняя осадка мидель: ${results.final.meanMid.toFixed(3)} м
// - Средняя осадка корма: ${results.final.meanAft.toFixed(3)} м
// - Дифферент: ${results.final.trim.toFixed(3)} м
// - Водоизмещение: ${results.final.finalDisplacement.toFixed(3)} т

// ИТОГОВЫЙ РЕЗУЛЬТАТ:
// - Разность водоизмещений: ${results.details.displacementDifference.toFixed(3)} т
// - Изменение балласта/запасов: ${results.details.ballastDifference.toFixed(3)} т
// - ВЕС ГРУЗА: ${results.cargoWeight.toFixed(3)} т
//     `;
//   }
// }

// // Пример использования
// function example() {
//   // Характеристики судна
//   const vesselParticulars: VesselParticulars = {
//     lengthBetweenPerpendiculars: 150.0,
//     breadth: 25.0,
//     depth: 12.0,
//   };

//   // Замеры до погрузки
//   const initialReadings: DraftReadings = {
//     forwardPort: 4.5,
//     forwardStarboard: 4.52,
//     midshipPort: 5.8,
//     midshipStarboard: 5.82,
//     aftPort: 7.1,
//     aftStarboard: 7.12,
//   };

//   // Замеры после погрузки
//   const finalReadings: DraftReadings = {
//     forwardPort: 6.5,
//     forwardStarboard: 6.52,
//     midshipPort: 7.8,
//     midshipStarboard: 7.82,
//     aftPort: 9.1,
//     aftStarboard: 9.12,
//   };

//   // Гидростатические данные
//   const initialHydrostatics: HydrostaticData = {
//     displacement: 15000,
//     tpc: 25.5,
//     lcf: -2.5,
//     mctc: 180,
//   };

//   const finalHydrostatics: HydrostaticData = {
//     displacement: 25000,
//     tpc: 26.5,
//     lcf: -1.5,
//     mctc: 190,
//   };

//   // Плотность воды
//   const densityData: DensityData = {
//     densityAtLocation: 1.02,
//     standardDensity: 1.025,
//   };

//   // Балласт и запасы
//   const ballastAndStores = {
//     initial: 500,
//     final: 600,
//   };

//   // Создание экземпляра калькулятора и расчет
//   const calculator = new DraftSurveyCalculator(vesselParticulars);

//   const results = calculator.calculateDraftSurvey(
//     initialReadings,
//     finalReadings,
//     initialHydrostatics,
//     finalHydrostatics,
//     densityData,
//     ballastAndStores
//   );

//   // Вывод результатов
//   console.log(calculator.formatResults(results));
// }
