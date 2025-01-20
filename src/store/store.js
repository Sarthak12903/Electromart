import productReducer from "../features/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    ProductDetail: productReducer,
  },
});
