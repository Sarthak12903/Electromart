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
      state.item += 1;
      state.info.push(action.payload);
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
