import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    counter:0,
}

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        incrementCount : (state,action)=>{
            state.counter = state.counter +1;

        },
        decrementCount : (state,action)=>{
            state.counter = state.counter -1;

        },

    }
})

// Action
export const {incrementCount,decrementCount} = CounterSlice.actions