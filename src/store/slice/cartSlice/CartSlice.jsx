import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart.push(action.payload);
    },
    setCartItem: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setCart, setCartItem } = cartSlice.actions;
export default cartSlice.reducer;
