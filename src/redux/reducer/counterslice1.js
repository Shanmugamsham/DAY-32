import { createSlice } from '@reduxjs/toolkit'

export const counterreduser1=createSlice({
    name:"count1",
    initialState:{
        value: 0,
    },
    reducers:{
            incrementfirst:(state)=>{
            state.value+=3000},
            decrementfirst:(state)=>{
            state.value-=3000},
          
    },

});
export const {incrementfirst,decrementfirst}=counterreduser1.actions;
export default counterreduser1.reducer