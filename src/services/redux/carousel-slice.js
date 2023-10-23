/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    images: [],
    loading: false,
    success: false,
  },
  reducers: {
    getImages: (state, action) => {
      state.images = [action.payload];
    },
  },
});
export const { getImages } = carouselSlice.actions;
export const carouselReducer = carouselSlice.reducer;
