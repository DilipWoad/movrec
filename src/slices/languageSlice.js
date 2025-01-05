import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:"lang",
    initialState:{
        selectedLanguage:"en"   
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.selectedLanguage = action.payload
        }
    }
})

export default languageSlice.reducer;
export const {changeLanguage} = languageSlice.actions;