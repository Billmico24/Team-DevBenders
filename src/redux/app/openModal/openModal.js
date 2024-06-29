import { createSlice } from '@reduxjs/toolkit';

export const openModalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false },
  reducers: {
    openModalAction: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { openModalAction } = openModalSlice.actions;
export const getIsModalOpen = state => state.modal.isOpen;
