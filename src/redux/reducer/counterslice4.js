import { createSlice } from '@reduxjs/toolkit'

export const counterreduser4=createSlice({
    name:"count4",
    initialState:{
        value: 0,
    },
    reducers:{
        increment:(state)=>{
            state.value+=1500},
            decrement:(state)=>{
            state.value-=1500},
            
          
    },

});
export const {increment,decrement}=counterreduser4.actions;
export default counterreduser4.reducer