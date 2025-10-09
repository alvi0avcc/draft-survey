import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import surveyReducer from './slices/surveySlice';
// import shipsReducer from './slices/shipsSlice';
// import appReducer from './slices/appSlice';

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
    // ships: shipsReducer,
    // app: appReducer,
  },
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Создаем типизированные хуки
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;