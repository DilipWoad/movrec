import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    playingNow: null,
    trailerVideo : null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.playingNow = action.payload;
    },
    addMovieTrailer :(state,action)=>{
      state.trailerVideo = action.payload
    }
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies, addMovieTrailer } = movieSlice.actions;
