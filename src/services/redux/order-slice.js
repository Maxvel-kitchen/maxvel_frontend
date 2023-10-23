/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    totalCount: 0,
    count: 0,
  },
  reducers: {
    fillOrder: (state, action) => {
      state.items.push(action.payload.itemsList);
      state.totalCount = action.payload.total;
    },
  },
});
export const { fillOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
