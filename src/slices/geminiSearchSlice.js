import { createSlice } from "@reduxjs/toolkit";

const geminiSearch = createSlice({
    name:'gemini',
    initialState:{
        GeminiStatus:false,
        geminiSearchedMovieResults :null,
        geminiSearchedMovieNames : null
    },
    reducers:{
        changeGeminiState:(state,action)=>{
            state.GeminiStatus=!state.GeminiStatus;
        },
        addGeminiMovies:(state,action)=>{
            const {movieNames,movieResults}= action.payload;
            state.geminiSearchedMovieNames = movieNames;
            state.geminiSearchedMovieResults = movieResults;
        }
    }
})

export default geminiSearch.reducer;
export const {changeGeminiState,addGeminiMovies} = geminiSearch.actions;