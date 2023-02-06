/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }
    },
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
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToCart, getCartTotal, increase, decrease, remove } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
