import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import movieReducer from "../slices/movieSlice";
import errorReducer from "../slices/errorSlice";
import authReducer from "../slices/authenticateSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    error: errorReducer,
    auth : authReducer
  },
});

export default appStore;
