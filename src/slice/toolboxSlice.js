import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS, COLORS } from "@/constants";

const initialState = {
  [MENU_ITEMS.PENCIL]: {
    color: COLORS.BLACK,
    size: 3,
  },
  [MENU_ITEMS.ERASER]: {
    color: COLORS.WHITE,
    size: 3,
  },
  [MENU_ITEMS.UNDO]: {},
  [MENU_ITEMS.REDO]: {},
  [MENU_ITEMS.DOWNLOAD]: {},
};

export const toolBoxSlice = createSlice({
  name: "toolBox",
  initialState,
  reducers: {
    //action contains payload
    //state = initialState = line 4 code
    changeColor: (state, action) => {
      state[action.payload.item].color = action.payload.color
    },
    changeBrushSize: (state, action) => {
        //
        state[action.payload.item].size = action.payload.size
      },
  },
});

export const { changeColor, changeBrushSize } = toolBoxSlice.actions;

export default toolBoxSlice.reducer;