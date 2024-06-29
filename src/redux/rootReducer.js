import { combineReducers } from '@reduxjs/toolkit';

import { loaderSlice } from './app/loader/loaderSlice';
import { authSlice } from './app/auth';
import { diaryReducer } from './app/diaryPerDay';
import { openModalSlice } from './app/openModal';

export const rootReducer = combineReducers({
  loader: loaderSlice.reducer,
  auth: authSlice.reducer,
  diary: diaryReducer,
  modal: openModalSlice.reducer,
});