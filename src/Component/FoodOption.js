import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
  return (
    <div className="w-[80%] mx-auto mt-10 overflow-x-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200  ">
      <div className="grid grid-rows-2 auto-cols-[10rem] grid-flow-col gap-4 w-max">
        {
          imageGridCards.map((foodData) => (<FoodCard key={foodData.id} foodData={foodData} /> ))
        }
      </div>
    </div>
  );
}
