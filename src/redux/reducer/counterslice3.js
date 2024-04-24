import { createSlice } from '@reduxjs/toolkit'

export const counterreduser3=createSlice({
    name:"count3",
    initialState:{
        value: 0,
    },
    reducers:{
        increment:(state)=>{
            state.value+=4500},
            decrement:(state)=>{
            state.value-=4500},
            
          
    },

});
export const {increment,decrement}=counterreduser3.actions;
export default counterreduser3.reducer