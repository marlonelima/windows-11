import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startMenu: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleStartMenu: (state) => {
      state.startMenu = !state.startMenu;
    },
  },
});

export const { toggleStartMenu } = mainSlice.actions;

export default mainSlice.reducer;
