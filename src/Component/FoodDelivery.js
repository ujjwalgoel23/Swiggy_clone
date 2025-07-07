import { FoodCities } from "../Utils/FoodCities";
import FoodCityList from "./FoodCityList";
import { useState } from "react";

export default function FoodDelivery() {

     const [showMore, setShowMore] = useState(false);

      let visibleCities;
       if (showMore) {
       visibleCities = FoodCities;
       } else {
       visibleCities = FoodCities.slice(0, 11);
       }      

  return (
    <>
      <h2 className="font-bold text-2xl mt-12 ml-65 mb-5">Cities with food delivery</h2>

      <div className="w-[80%] mx-auto flex flex-wrap justify-center gap-4  mb-10">
        {visibleCities.map((list, index) => (
          <FoodCityList key={index} list={list} />
        ))}
     
      {
      FoodCities.length > 11 &&  <button onClick={() => setShowMore(!showMore)} className="  bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition  block text-base font-semibold  w-60 h-18">{showMore ? "Show Less" : "Show More"} </button>
      }
       </div>
    </>
  );
}




