import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    errorMessage: null,
  },
  reducers: {
    AddErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export default errorSlice.reducer;
export const { AddErrorMessage } = errorSlice.actions;
