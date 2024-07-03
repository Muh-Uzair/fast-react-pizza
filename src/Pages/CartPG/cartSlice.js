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
    increaseQt(state, action) {
      const itemIndex = state.cart.findIndex(
        (val) => val.pizzaId === action.payload,
      );

      state.cart[itemIndex].quantity += 1;
      state.cart[itemIndex].totalPrice =
        state.cart[itemIndex].quantity * state.cart[itemIndex].unitPrice;
    },
    decreaseQt(state, action) {
      const itemIndex = state.cart.findIndex(
        (val) => val.pizzaId === action.payload,
      );

      state.cart[itemIndex].quantity -= 1;
      state.cart[itemIndex].totalPrice =
        state.cart[itemIndex].quantity * state.cart[itemIndex].unitPrice;

      if (state.cart[itemIndex].quantity === 0)
        cartSlice.caseReducers.deleteFromCart(state, action);
    },
  },
});

export const { addItem, clearCart, deleteFromCart, increaseQt, decreaseQt } =
  cartSlice.actions;
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
