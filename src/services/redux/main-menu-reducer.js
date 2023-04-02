import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    mainMenuList: [],
  },
  reducers: {
    getMenu(state, action) {
      return { ...state, mainMenuList: action.payload };
    },
  },
});

export const { getMenu } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
