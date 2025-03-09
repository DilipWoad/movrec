import { createSlice } from "@reduxjs/toolkit";

const actorDetailSlice = createSlice({
  name: "actorDetails",
  initialState: {
    details: null,
    credits: null,
  },
  reducers: {
    addActorDetails: (state, action) => {
      state.details = action.payload;
    },
    addActorCredits: (state, action) => {
      state.credits = action.payload;
    },
    emptyActorDetails: (state, action) => {
      state.credits = null
      state.details = null
    },
  },
});

export default actorDetailSlice.reducer;
export const { addActorDetails, addActorCredits, emptyActorDetails } =
  actorDetailSlice.actions;
