import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import MenuCard from "./MenuCard";

export default function RestaurantMenu(){
    let {id}=useParams();
  
    const [selected , setSelected]=useState(null)
    const [RestData,setRestData]=useState([]);
     
    useEffect(() => {            
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const origAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

      const response = await fetch(proxyServer + origAPI); 
      const data = await response.json();
      const tempData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData=tempData.filter((items)=>'title' in items?.card?.card);
      setRestData(filterData);
    }

    fetchData();
  }, []);

    return(
 <div>

       <div className="w-[80%] mt-20 mx-auto mb-20">
        <Link to={`/city/delhi/${id}/search`}>
        <p className="text-center w-full py-4 rounded-2xl bg-gray-200 text-2xl">Search for Dishes</p>
        </Link>
       </div>

        <div className="w-[80%] mt-20 mx-auto mb-20">
        <button className={` text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==="veg"? "bg-green-600":"bg-gray-300" }`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg </button>
        <button className={`text-2xl py-2 px-4 mr-2 border rounded-2xl   ${selected==="nonveg"? "bg-red-500":"bg-gray-300" }`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non-veg</button>
        <button className={`text-2xl py-2 px-4 mr-2 border rounded-2xl   ${selected==="bestseller"? "bg-blue-500":"bg-gray-300" }`} onClick={()=>setSelected(selected==='bestseller'?null:'bestseller')}>BestSeller</button>
        
        </div>

      <div className="w-[60%] mx-auto mt-20 font-sans">
        {
          RestData?.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card } foodselected={selected}/>)
        }
      </div>
      </div>
    )
}
