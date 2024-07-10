import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
 import {DailyApi} from '../../services/api.js'

export const dailyCaloriesRequest =createAsyncThunk(
    'dailyCalories/dailyCaloriesRequest',
    async (userInfo, { rejectWithValue }) => {
        try {
            userInfo.bloodType = Number(userInfo.bloodType);
            const response = await DailyApi.getDailyRateInfo(userInfo);
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


    export const dailyCaloriesAuth =createAsyncThunk(
    'dailyCalories/dailyCaloriesAuth',
    async (userInfo, { rejectWithValue }) => {
        try {
            userInfo.bloodType = Number(userInfo.bloodType);
            const response = await DailyApi.getDailyRateInfoBasedOnId(userInfo);
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

    const initialState = {
  user: null,
  status: 'idle', // 'idle' | 'pending' | 'resolved' | 'rejected'
  userId: null,
    error: null,
};

const userCaloriesSlice = createSlice({
    name: 'dailyCalories',
    initialState,
    reducers: {},
    extraReducers:  builder =>
        builder
    .addCase(dailyCaloriesRequest.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(dailyCaloriesRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(dailyCaloriesRequest.rejected, (state, action) => {
          state.status = 'rejected';
           state.error = action.payload;
      })
    .addCase(dailyCaloriesAuth.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(dailyCaloriesAuth.fulfilled, (state, action) => {
        state.status = 'resolved';
          state.user = action.payload;
          state.userId = action.payload.id;
        state.error = null;
      })
      .addCase(dailyCaloriesAuth.rejected, (state, action) => {
          state.status = 'rejected';
           state.error = action.payload;
      })
})

export const caloriesReducer = userCaloriesSlice.reducer;