import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constants";
import { defaultConfig } from "next/dist/server/config-shared";
const initialState = {
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItem: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    //action contains payload
    menuItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
    actionItemClick: (state, action) => {
      state.actionMenuItem = action.payload;
    },
  },
});

export const { menuItemClick,actionItemClick } = menuSlice.actions;

export default menuSlice.reducer;
