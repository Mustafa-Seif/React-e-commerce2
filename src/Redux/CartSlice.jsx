import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    productsArr:[],
}

export const CartSlice = createSlice({
    name:"productsArr",
    initialState,
    reducers:{
        addProduct : (state,action)=>{
             state.productsArr.push(action.payload);
        },
        deleteProduct:(state,action)=>{
            let index =action.payload.id;
            state.productsArr.map((e,i)=>{
                if (e.id == index) {
                    state.productsArr.splice(i,1)
                    
                }
            })
            
        }
    }
})

// Action
export const {addProduct,deleteProduct} = CartSlice.actions