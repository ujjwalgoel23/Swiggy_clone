import {dineOutRestaurants} from "../../Utils/DineData"

import DineCard from "./DineCard";



export default function DineOption() {
  return (
   <div className="w-[80%] mx-auto mt-20 mb-20">
     <p className="text-2xl font-bold">Discover best restaurants on Dineout</p>
     <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 ">
        {
            dineOutRestaurants.map((dineDetail)=><DineCard key={dineDetail?.info?.id} dineDetail={dineDetail}/>)
        }

     </div>
   </div>
  );
}
