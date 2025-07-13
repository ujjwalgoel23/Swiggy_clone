import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlicer";

export const store=configureStore({
    reducer:{
        cartSlice: CartReducer,
    }
    
})