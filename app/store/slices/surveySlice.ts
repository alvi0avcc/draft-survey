import { initialState } from '@/const';
import type {
  CalculationResults,
  DraftMeasurements,
  ShipData,
  ShipResources,
  SurveyState,
} from '@/types';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setCurrentShip: (state, action: PayloadAction<ShipData>) => {
      state.currentShip = action.payload;
    },
    setInitialMeasurements: (
      state,
      action: PayloadAction<DraftMeasurements>
    ) => {
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
    calculateResults: state => {
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
    resetSurvey: state => {
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
