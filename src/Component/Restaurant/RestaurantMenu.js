import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";

export default function RestaurantMenu(){
    let {id}=useParams();
  
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
      <div className="w-[60%] mx-auto mt-20 font-sans">
        {
          RestData?.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}/>)
        }
      </div>
    )
}
