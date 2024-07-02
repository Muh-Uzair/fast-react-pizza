import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../fast-react-pizza/src/Pages/UserPG/userSlice";
import cartSlice from "./src/Pages/CartPG/cartSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});

export default store;
