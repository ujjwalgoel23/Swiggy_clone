import { useState } from "react";
import {addItems,IncrementItems,DecrementItems} from "../Redux/cartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({restData}){

    const dispatch=useDispatch();
    const items=useSelector(state=>state.cartSlice.items);

    const element =items.find(item=>item.id===restData.id);
    const count=element? element.quantity:0;

    function handleAddItems(){
      dispatch(addItems(restData));
    }

    function handleIncrementItems(){
        dispatch(IncrementItems(restData));
    }  

    function handleDecrementItems(){ 
        dispatch(DecrementItems(restData));
    }

    return(
        <>
        <div className="flex w-full justify-between mb-2 pb-2">
            <div className="w-[100%] mx-auto">
                <p className="text-red-600 ">{restData?.ribbon?.text ? `★${restData.ribbon.text}` : null}</p>

                <p className="text-xm  font-bold mb-1">{restData?.name}</p>
                <p className="text-xl"> {"₹"+( "defaultPrice" in restData? restData?.defaultPrice/100:restData?.price/100 )}</p>
                <span className="text-green-600 font-semibold">★{restData?.ratings?.aggregatedRating?.rating}</span>
                <span> {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"} </span>
                <p className="text-sm text-gray-500">
                    {restData?.description}
                </p>
            </div>

            <div className="w-[80%] relative h-40">
                
             <img className=" w-[70%]  h-35 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>
             {
               (count===0)?(<button className="absolute bottom-1  mx-auto text-base rounded-xl text-green-700 px-6 py-2  shadow-2xl  bg-white font-bold" onClick={()=>handleAddItems()}>ADD</button>):(
               <div className="absolute   font-bold rounded-xl bottom-1  text-base flex  gap-3   text-green-700 px-6 py-2  shadow-md border  bg-white">
                <button onClick={()=>handleDecrementItems()}>-</button>
                <span>{count}</span>
                <button onClick={()=>handleIncrementItems()}>+</button>
               </div>
               )
             }
               </div>

        </div>
        <hr className=" mb-3 mt-3"></hr>
        </>
    )
}