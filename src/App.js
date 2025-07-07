import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import FoodOption from "./Component/FoodOption";
import GrocerOption from "./Component/GroceryOption";
import DineOption from "./Component/DineOption";
import Poster   from "./Component/Poster";
import FoodDelivery from "./Component/FoodDelivery";

  function App(){

    return (
        <>
        <Header/>
        <FoodOption/>
        <GrocerOption/>
        <DineOption/>
        <Poster/>
        <FoodDelivery/>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
