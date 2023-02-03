/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const data = [
  { id: 876, title: "Макарун", price: 55, quantity: 0, newer: true },
  { id: 876, title: "Маун", price: 5, quantity: 0 },
  { id: 876, title: "Макар", price: 85, quantity: 0 },
  { id: 876, title: "Мкаун", price: 51, quantity: 0 },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: data,
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    getCartTotal: (state) => {
      const { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = totalAmount;
      state.totalCount = totalCount;
    },
  },
});
export const { getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
