import { GrocerGridCard } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GrocerOption(){

    return(
        <div className="w-[80%] mx-auto mt-20 overflow-x-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200">
            <h1 className="text-2xl font-bold">Shops Groceries on Instamart</h1>
              <div className=" mt-5 grid grid-rows-1 auto-cols-[10rem] grid-flow-col gap-4 w-max">
                {
                  GrocerGridCard.map((GroceryData) => (<GroceryCard key={GroceryData.id} GroceryData={GroceryData } /> ))
                }
              </div>
            </div>
    )
}