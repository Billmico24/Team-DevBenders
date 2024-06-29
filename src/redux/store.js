import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});

setupListeners(store.dispatch);