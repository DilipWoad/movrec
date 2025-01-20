import { createSlice } from "@reduxjs/toolkit";

const movieInfoSlice = createSlice({
    name:'info',
    initialState:{
        credits:null,
        movieInfo:null,
    },
    reducers:{
        addCreditsInfo:(state,action)=>{
            state.credits = action.payload;
        },
        addMovieInfo:(state,action)=>{
            state.movieInfo = action.payload;
        }
    }
})

export default movieInfoSlice.reducer;

export const{addCreditsInfo,addMovieInfo} = movieInfoSlice.actions;