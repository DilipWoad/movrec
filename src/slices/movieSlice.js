import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    playingNow: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.playingNow = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies } = movieSlice.actions;
