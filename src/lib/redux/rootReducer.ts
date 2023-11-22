import { cartSlice } from "./slices";

export const rootReducer = {
  cart: cartSlice.reducer,
};
