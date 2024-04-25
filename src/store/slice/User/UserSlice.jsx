import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: " user",
  initialState: {
    token: localStorage.getItem("token"),
    user: null,
  },
  reducers: {
    setTokekn: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setTokekn, setUser } = userSlice.actions;
export default userSlice.reducer;
