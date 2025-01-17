import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../slices/userSlice";
import movieReducer from "../../slices/movieSlice";
import errorReducer from "../../slices/errorSlice";
import authReducer from "../../slices/authenticateSlice";
import geminiReducer from "../../slices/geminiSearchSlice";
import languageReducer from "../../slices/languageSlice";
import movieInfoReducer from "../../slices/movieInfoSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    error: errorReducer,
    auth : authReducer,
    gemini: geminiReducer,
    lang : languageReducer,
    movieInfo : movieInfoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default appStore;
