/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalCount: 0,
    count: 0,
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
      const { totalAmount, totalCount, count } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          cartTotal.count += 1;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0, count: 0 }
      );
      state.totalAmount = totalAmount;
      state.totalCount = totalCount;
      state.count = count;
    },
    type: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload[0]) {
          return {
            ...item,
            amount: action.payload[1] === 0 ? "" : action.payload[1],
          };
        }
        return item;
      });
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
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    },
    removeItem: (state) => {
      state.items = state.items.filter((item) => item.amount !== 0);
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeAll: (state) => {
      state.items = [];
    },
    returnItem: (state) => {
      state.items = state.items.map((item) => {
        if (item.amount === 0) {
          item.amount += 1;
        }
        if (item.amount === (null || undefined || "")) {
          item.amount = 1;
        }
        return item;
      });
    },
  },
});
export const {
  addToCart,
  getCartTotal,
  type,
  increase,
  decrease,
  remove,
  removeAll,
  removeItem,
  returnItem,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
