import { createSlice } from '@reduxjs/toolkit';
import {
  addProductOper,
  deleteProductOper,
  getInfoOper,
  getUserInfo,
  productSearchOper,
} from './diaryOperation';
import moment from 'moment';
// Slice для пошуку продуктів
export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState: {
    productsData: [],
    status: 'idle',
    error: null,
    dayData: null,
    date: moment(new Date()).format('YYYY-MM-DD'),
    userInfo: null,
    eatenProducts: [],
    dayId: null,
    itemId: '',
    summary: null,
  },

  extraReducers: builder =>
    builder
      .addCase(productSearchOper.pending, state => {
        state.status = 'idle';
      })
      .addCase(productSearchOper.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.productsData = action.payload;
      })
      .addCase(productSearchOper.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(addProductOper.pending, state => {
        state.status = 'pending';
      })
      .addCase(addProductOper.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.eatenProducts = [
          ...state.eatenProducts,
          action.payload.eatenProduct,
        ];
        state.dayId = action.payload.day.id;
        state.itemId = action.payload.eatenProduct.id;
        state.summary = action.payload.daySummary;

        // state.dayData = {...state.dayData, eatenProducts:
        //    [action.payload.eatenProduct,...state.dayData.eatenProducts]};
        // console.log(action.payload)
        // state.eatenProducts = action.payload.day.eatenProducts;
      })
      .addCase(addProductOper.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(deleteProductOper.pending, state => {
        state.status = 'pending';
      })
      .addCase(deleteProductOper.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.eatenProducts = state.eatenProducts.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(deleteProductOper.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(getInfoOper.pending, state => {
        state.status = 'pending';
      })
      .addCase(getInfoOper.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.eatenProducts = action.payload.eatenProducts || [];
        state.summary = action.payload.daySummary || action.payload;
        state.dayId = action.payload.id;
      })
      .addCase(getInfoOper.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(getUserInfo.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.dayData = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.status = 'rejected';
      }),
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    deleteUserInfro(state, action) {
      state.eatenProducts = [];
      state.summary = null;
    }  
  },
});

export const productSearchReducer = productSearchSlice.reducer;
export const { setDate, deleteUserInfro } = productSearchSlice.actions;
