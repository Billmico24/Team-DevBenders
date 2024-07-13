import { authReducer } from './authorization/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { combineReducers } from '@reduxjs/toolkit';
import { productSearchReducer } from './diary/diarySlice';
import { caloriesReducer } from './dailyCalories/caloriesSlice';
import { themeReducer } from './theme/themeSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'refreshToken', 'sid'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  userData: persistedReducer,
  searchData: productSearchReducer,
  dailyCalories: caloriesReducer,
  theme: themeReducer,
});
