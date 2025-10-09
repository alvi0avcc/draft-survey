import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SurveyState, DraftMeasurements, ShipResources, ShipData, CalculationResults } from '../../types';

const initialState: SurveyState = {
  currentShip: null,
  initialMeasurements: { forward: 0, aft: 0, midPort: 0, midStarboard: 0 },
  finalMeasurements: { forward: 0, aft: 0, midPort: 0, midStarboard: 0 },
  initialResources: { fuel: 0, diesel: 0, freshWater: 0, ballast: 0, other: 0 },
  finalResources: { fuel: 0, diesel: 0, freshWater: 0, ballast: 0, other: 0 },
  waterDensity: 1.025,
  results: null,
  isLoading: false,
  error: null,
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setCurrentShip: (state, action: PayloadAction<ShipData>) => {
      state.currentShip = action.payload;
    },
    setInitialMeasurements: (state, action: PayloadAction<DraftMeasurements>) => {
      state.initialMeasurements = action.payload;
    },
    setFinalMeasurements: (state, action: PayloadAction<DraftMeasurements>) => {
      state.finalMeasurements = action.payload;
    },
    setWaterDensity: (state, action: PayloadAction<number>) => {
      state.waterDensity = action.payload;
    },
    setInitialResources: (state, action: PayloadAction<ShipResources>) => {
      state.initialResources = action.payload;
    },
    setFinalResources: (state, action: PayloadAction<ShipResources>) => {
      state.finalResources = action.payload;
    },
    calculateResults: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    calculationSuccess: (state, action: PayloadAction<CalculationResults>) => {
      state.results = action.payload;
      state.isLoading = false;
    },
    calculationError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    resetSurvey: (state) => {
      return initialState;
    },
  },
});

export const {
  setCurrentShip,
  setInitialMeasurements,
  setFinalMeasurements,
  setWaterDensity,
  setInitialResources,
  setFinalResources,
  calculateResults,
  calculationSuccess,
  calculationError,
  resetSurvey,
} = surveySlice.actions;

export default surveySlice.reducer;
