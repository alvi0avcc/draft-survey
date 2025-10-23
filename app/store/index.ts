import { configureStore } from '@reduxjs/toolkit';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
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

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
