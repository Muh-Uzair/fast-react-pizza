import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    clearCart(state) {
      state.cart = [];
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((val) => val.pizzaId !== action.payload);
    },
  },
});

export const { addItem, clearCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export function getCart(state) {
  return state.cart.cart;
}

export const getCartQuantity = (state) => {
  return state.cart.cart.reduce((acc, val) => acc + val.quantity, 0);
};

export const getTotalPrice = (state) => {
  return state.cart.cart.reduce((acc, val) => acc + val.totalPrice, 0);
};
