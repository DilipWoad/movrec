import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import movieReducer from "../slices/movieSlice";
import errorReducer from "../slices/errorSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    error: errorReducer
  },
});

export default appStore;
