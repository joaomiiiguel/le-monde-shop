import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ItemCart } from "../types";

interface CartProps {
  items: ItemCart[];
}

const initialState: CartProps = {
  items: [],
};

export const cartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addtoCart(state, action: PayloadAction<ItemCart>) {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removerToCart(state, { payload }) {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };
    },
  },
});

export const { addtoCart, removerToCart } = cartSlice.actions;

export const selectCart = (state: CartProps) => state;

export default cartSlice.reducer;
