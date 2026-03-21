import type { DeductibleWeights } from './deductibleWeights';
import type { DraftMarks, DraftMarksPoint } from './draftMarks';

interface DraftMarkCalculated {
  forwardMean: number;
  forwardCorrection: number;
  forwardCorrected: number;
}

export interface DraftMark extends DraftMarkCalculated, DraftMarksPoint {}

export interface DraftMarksCalculated {
  forward: DraftMark;
  midship: DraftMark;
  aft: DraftMark;
  means: {
    meanFwdAft: number;
    meanOfMeans: number;
    meanOfMeansCorrForHull: number;
    deflection: number;
  };
  sagHog: number;
  list: number;
}

export interface DraftResult {
  drafts: DraftMarks;
  waterDensity: number;
  deductibleWeights: DeductibleWeights;
}
