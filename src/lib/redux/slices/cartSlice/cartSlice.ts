import { TCart } from "@/types/Cart";
import { TProduct } from "@/types/Product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TCartSliceState = TCart;

const initialState: TCartSliceState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state: TCartSliceState,
      action: PayloadAction<{ count: number; product: TProduct }>
    ) => {
      const { count, product } = action.payload;
      if (product.id in state) {
        state[product.id].count += count;
      } else {
        state[product.id] = { count, product };
      }
    },
    subItem: (
      state: TCartSliceState,
      action: PayloadAction<TProduct["id"]>
    ) => {
      const productId = action.payload;
      if (productId in state && state[productId].count == 2) {
        delete state[productId];
      } else if (productId in state) {
        state[productId].count -= 1;
      }
    },
    deleteItem: (
      state: TCartSliceState,
      action: PayloadAction<TProduct["id"]>
    ) => {
      const productId = action.payload;
      if (productId in state) {
        delete state[productId];
      }
    },
  },
});

export const { addItem, subItem, deleteItem } = cartSlice.actions;
