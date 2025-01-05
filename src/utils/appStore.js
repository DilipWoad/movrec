import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import movieReducer from "../slices/movieSlice";
import errorReducer from "../slices/errorSlice";
import authReducer from "../slices/authenticateSlice";
import geminiReducer from "../slices/geminiSearchSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    error: errorReducer,
    auth : authReducer,
    gemini: geminiReducer
  },
});

export default appStore;
