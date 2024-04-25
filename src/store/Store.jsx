import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slice/User/UserSlice";
import ProductsSlice from "./slice/Product/ProductSlice";
import CartSlice from "./slice/cartSlice/CartSlice";
import AuthSlice from "./slice/AuthSlice/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    products: ProductsSlice,
    cart: CartSlice,
  },
});
