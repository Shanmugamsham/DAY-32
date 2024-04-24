import { createSlice } from '@reduxjs/toolkit'

export const counterreduser2=createSlice({
    name:"count2",
    initialState:{
        value: 0,
    },
    reducers:{
            increment:(state)=>{
            state.value+=4000},
            decrement:(state)=>{
            state.value-=4000},
          
    },

});
export const {increment,decrement}=counterreduser2.actions;
export default counterreduser2.reducer