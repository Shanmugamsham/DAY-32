import { createSlice } from '@reduxjs/toolkit'

export const counterreduser5=createSlice({
    name:"count5",
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
export const {increment,decrement}=counterreduser5.actions;
export default counterreduser5.reducer