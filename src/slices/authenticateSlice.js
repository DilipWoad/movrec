import { createSlice } from "@reduxjs/toolkit";

const authenticateSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: null,
  },
  reducers: {
    changeAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export default authenticateSlice.reducer;
export const { changeAuth } = authenticateSlice.actions;
