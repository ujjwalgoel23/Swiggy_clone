import { useState } from "react"
import RestInfo from "./RestInfo";

export default function MenuCard({menuItems,foodselected}){

    const [isOpen , setIsOpen]=useState(true);
    

       if("categories" in menuItems){   
        return(
            <div className="w-[80%] mx-auto mt-4">
              <p className="text-base font-bold mt-4">{menuItems.title}</p>
              <div>
                {
                    menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items} foodselected={foodselected}/>)
                }
              </div>
            </div>
        )
       }
      
       if(!isOpen){
        return(
        <div className="w-[80%] mx-auto">
            <div className="flex justify-between w-full">
            <p className="text-base font-bold mb-4">{menuItems.title}  </p>
            <button className=" text-xl font-semibold mr-3" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'} </button>
        </div>
        <div className="h-1 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
       }

       if(foodselected==='veg'){
        return(
              <div className="w-[80%] mx-auto">
             <div className="flex justify-between w-full">
            <p className="text-base font-bold mb-4">{menuItems.title}  </p>
            <button className=" text-xl font-semibold mr-3" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'} </button>
        </div>
            <div>
                { menuItems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info  ).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}/>) }
            </div>
         <div className="h-1 bg-gray-200 mt-2 mb-2">
         </div>
        </div>
        )
       }
     
       if(foodselected==='nonveg'){
        return(
             <div className="w-[80%] mx-auto">
             <div className="flex justify-between w-full">
            <p className="text-base font-bold mb-4">{menuItems.title}  </p>
            <button className=" text-xl font-semibold mr-3" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'} </button>
        </div>
            <div>
                { menuItems?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info ) ).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}/>) }
            </div>
         <div className="h-1 bg-gray-200 mt-2 mb-2">
         </div>
        </div>
        )
       }

      if(foodselected ==='bestseller'){
        return(
             <div className="w-[80%] mx-auto">
             <div className="flex justify-between w-full">
            <p className="text-base font-bold mb-4">{menuItems.title}  </p>
            <button className=" text-xl font-semibold mr-3" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'} </button>
        </div>
            <div>
                { menuItems?.itemCards?.filter((food)=>"isBestseller" in food?.card?.info   ).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}/>) }
            </div>
         <div className="h-1 bg-gray-200 mt-2 mb-2">
         </div>
        </div>
        )
       }

    return(
       
        <div className="w-[80%] mx-auto">
            
             <div className="flex justify-between w-full">
            <p className="text-base font-bold mb-4">{menuItems.title}  </p>
            <button className=" text-xl font-semibold mr-3" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'    } </button>
        </div>
            <div>
                { menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}/>) }
            </div>
         
         <div className="h-1 bg-gray-200 mt-2 mb-2">

         </div>
        
        </div>

    )

}