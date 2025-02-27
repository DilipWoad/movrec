import { createSlice } from "@reduxjs/toolkit";

const actorDetailSlice = createSlice({
    name:'actorDetails',
    initialState:null,
    reducers:{
        addActorDetails:(state,action)=>{
            return action.payload
        },
        emptyActorDetails:(state,action)=>{
            return null
        }
    }
})

export default actorDetailSlice.reducer;
export const {addActorDetails,emptyActorDetails} = actorDetailSlice.actions;