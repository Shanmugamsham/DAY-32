import { createSlice } from '@reduxjs/toolkit'

export const counterreduser=createSlice({
    name:"count",
    initialState:{
        value: 0,
    },
    reducers:{
        increment:(state)=>{
        state.value+=2500},
        decrement:(state)=>{
        state.value-=2500},
        
    },

});
export const {increment,decrement}=counterreduser.actions;
export default counterreduser.reducer