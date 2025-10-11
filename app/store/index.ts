import { configureStore } from '@reduxjs/toolkit';
import surveyReducer from './slices/surveySlice';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
// import shipsReducer from './slices/shipsSlice';
// import appReducer from './slices/appSlice';

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
    // ships: shipsReducer,
    // app: appReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
