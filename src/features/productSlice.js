import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  name: "",
  nameDescription: "",
  ratingStar: 0,
  size: "",
  ratingNumber: "",
  reviewNumber: "",
  img: "",
  rpm: "",
  productWarranty: "",
  motorWarranty: "",
  star: 0,
  price: "",
  originalPrice: "",
  offer: "",
  date: "",
  hotDeal: "",
  cashback: " ",
  bankOffer: "",
};

export const productSlice = createSlice({
  name: "ProductDetail",
  initialState,
  reducers: {
    add: (state, action) => {
      state.number = action.payload.number;
      state.name = action.payload.name;
      state.nameDescription = action.payload.nameDescription;
      state.ratingStar = action.payload.ratingStar;
      state.size = action.payload.size;
      state.ratingNumber = action.payload.ratingNumber;
      state.reviewNumber = action.payload.reviewNumber;
      state.img = action.payload.img;
      state.rpm = action.payload.rpm;
      state.productWarranty = action.payload.productWarranty;
      state.motorWarranty = action.payload.motorWarranty;
      state.star = action.payload.star;
      state.price = action.payload.price;
      state.originalPrice = action.payload.originalPrice;
      state.offer = action.payload.offer;
      state.date = action.payload.date;
      state.hotDeal = action.payload.hotDeal;
      state.cashback = action.payload.cashback;
      state.bankOffer = action.payload.bankOffer;
    },
  },
});

export const { add } = productSlice.actions;
export default productSlice.reducer;
