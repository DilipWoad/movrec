import { createSlice } from "@reduxjs/toolkit";

const geminiSearch = createSlice({
    name:'gemini',
    initialState:{
        GeminiStatus:false
    },
    reducers:{
        changeGeminiState:(state,action)=>{
            state.GeminiStatus=!state.GeminiStatus;
        }
    }
})

export default geminiSearch.reducer;
export const {changeGeminiState} = geminiSearch.actions;