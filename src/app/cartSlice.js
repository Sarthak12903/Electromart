import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: 0,
  info: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const exists = state.info.find((item) => item.id === action.payload.id);

      if (!exists) {
        state.item += 1;
        state.info.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.item -= 1;
      state.info = state.info.filter(
        (value) => value.nameDescription !== action.payload
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
