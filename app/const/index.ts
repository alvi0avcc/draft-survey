import type { SurveyState } from '@/types';

export const waterDensity = 1.025;

export const initialState: SurveyState = {
  currentShip: null,
  initialMeasurements: {
    forward: {
      portSide: 0,
      starBoardSide: 0,
      sameForBothSides: 'different',
    },
    mid: {
      portSide: null,
      starBoardSide: null,
      sameForBothSides: 'different',
    },
    aft: {
      portSide: null,
      starBoardSide: null,
      sameForBothSides: 'different',
    },
  },
  finalMeasurements: {
    forward: {
      portSide: 0,
      starBoardSide: 0,
      sameForBothSides: 'different',
    },
    mid: {
      portSide: null,
      starBoardSide: null,
      sameForBothSides: 'different',
    },
    aft: {
      portSide: null,
      starBoardSide: null,
      sameForBothSides: 'different',
    },
  },
  initialResources: { fuel: 0, diesel: 0, freshWater: 0, ballast: 0, other: 0 },
  finalResources: { fuel: 0, diesel: 0, freshWater: 0, ballast: 0, other: 0 },

  waterDensity: waterDensity,
  results: null,
  isLoading: false,
  error: null,
};
