import { createSlice } from "@reduxjs/toolkit";

const movieInfoSlice = createSlice({
  name: "info",
  initialState: {
    credits: null,
    director: null,
    movieInfo: null,
    trailerVideo: null,
    similarMovies: null,
  },
  reducers: {
    addCreditsInfo: (state, action) => {
      state.credits = action.payload;
    },
    addMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
    addTrailerVid: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
    addDirector: (state, action) => {
      state.director = action.payload;
    },
    emptyMovieDetails: (state, action) => {
      state.credits =
        state.director =
        state.movieInfo =
        state.movieInfo =
        state.similarMovies =
        state.trailerVideo =
          null;
    },
  },
});

export default movieInfoSlice.reducer;

export const {
  addCreditsInfo,
  addMovieInfo,
  addSimilarMovies,
  addTrailerVid,
  addDirector,
  emptyMovieDetails,
} = movieInfoSlice.actions;
