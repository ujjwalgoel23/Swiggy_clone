import {createSlice} from "@reduxjs/toolkit"

const cart= createSlice({
    name:'cartSlice',
    initialState: {
        items:[]
    },
    reducers: {
        addItems:(state,action)=>{

        },
        IncrementItems:(state,action)=>{

        },
        DecrementItems:(state,action)=>{
            
        },  

    }

})

export const {addItems,IncrementItems,DecrementItems}=cart.actions;
export default cart.reducer;