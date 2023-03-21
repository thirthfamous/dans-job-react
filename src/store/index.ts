// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './job';

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
