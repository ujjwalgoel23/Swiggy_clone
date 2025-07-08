import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/HomePage/Header";
import FoodOption from "./Component/HomePage/FoodOption";
import GrocerOption from "./Component/HomePage/GroceryOption";
import DineOption from "./Component/HomePage/DineOption";
import Poster   from "./Component/HomePage/Poster";
import FoodDelivery from "./Component/HomePage/FoodDelivery";
import Home from "./Component/Restaurant/Home"

  function App(){

    return (
        <>
        <Header/>
        <FoodOption/>
        <GrocerOption/>
        <DineOption/>
        <Poster/>
        <FoodDelivery/>
        <Home/>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
