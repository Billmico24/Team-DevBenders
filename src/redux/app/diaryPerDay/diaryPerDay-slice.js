import { createSlice } from '@reduxjs/toolkit';
import { diaryPerDayOperation } from './diaryPerDay-operation';

const currentDate = new Date().toLocaleDateString('ru-RU');

const initialState = {
  isLoading: false,
  isAddProductLoading: false,
  isDeleteProductLoading: false,
  isSuccess: false,
  isError: false,
  date: currentDate,
  products: null,
  message: '',
};

export const diaryPerDaySlice = createSlice({
  name: 'diaryPerDay',

  initialState,

  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload;
      state.products = null;
      state.message = null;
    },
  },

  extraReducers: {
    // get products

    [diaryPerDayOperation.actionGetProducts.pending](state) {
      state.isLoading = true;
      state.message = '';
      state.isError = false;
      state.isSuccess = false;
    },
    [diaryPerDayOperation.actionGetProducts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;

      if (typeof payload === 'string') {
        state.message = payload;
      } else {
        state.products = [...payload.result.products];
      }
    },
    [diaryPerDayOperation.actionGetProducts.rejected](state, action) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },

    // create list products
    [diaryPerDayOperation.actionCreateProductsList.pending](state) {
      state.isLoading = true;
    },
    [diaryPerDayOperation.actionCreateProductsList.fulfilled](state) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;

      state.products = [];
    },
    [diaryPerDayOperation.actionCreateProductsList.rejected](state, action) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },

    // update products list
    [diaryPerDayOperation.actionAddProduct.pending](state) {
      state.isLoading = true;
      state.isAddProductLoading = true;
    },
    [diaryPerDayOperation.actionAddProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.isAddProductLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.products = action.payload;
    },
    [diaryPerDayOperation.actionAddProduct.rejected](state, action) {
      state.isLoading = false;
      state.isAddProductLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },

    // delete product from list
    [diaryPerDayOperation.actionDeleteProduct.pending](state) {
      state.isLoading = true;
      state.isDeleteProductLoading = true;
    },
    [diaryPerDayOperation.actionDeleteProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.isDeleteProductLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.products = action.payload;
    },
    [diaryPerDayOperation.actionDeleteProduct.rejected](state, action) {
      state.isLoading = false;
      state.isDeleteProductLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export const {
  updateDate,
  getProducts,
  createProductsList,
  addProduct,
  deleteProduct,
} = diaryPerDaySlice.actions;

export const diaryReducer = diaryPerDaySlice.reducer;
