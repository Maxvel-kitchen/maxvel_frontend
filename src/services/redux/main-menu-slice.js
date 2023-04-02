import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    mainMenuList: [],
    title: "Новинки",
  },
  reducers: {
    getMenu(state, action) {
      return { ...state, mainMenuList: action.payload };
    },
    setTitle(state, action) {
      return { ...state, title: action.payload };
    },
  },
});

export const { getMenu, setTitle } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
