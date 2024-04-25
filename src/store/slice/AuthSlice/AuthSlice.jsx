import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
      if (action.payload === false) {
        localStorage.clear("token");
      }
    },
  },
});

export const { setAuthentication } = authSlice.actions;
export default authSlice.reducer;
