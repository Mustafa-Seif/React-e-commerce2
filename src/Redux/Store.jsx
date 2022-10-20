import { configureStore } from "@reduxjs/toolkit";
import  {CounterSlice}  from "./CounterSlice";
import { CartSlice } from "./CartSlice";
export const Store = configureStore({
    reducer:{
        counterStore:CounterSlice.reducer,
        productsStore:CartSlice.reducer
    }


})