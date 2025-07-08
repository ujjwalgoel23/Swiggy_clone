import { useEffect,useState } from "react";
import RestCard from "./RestCard";

export default function Home(){
    
     const [RestData,setRestData]=useState([]);
 
        useEffect(()=>{

           async function fetchData(){
             const proxyServer = "https://cors-anywhere.herokuapp.com/";
             const origAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
             const response = await fetch(proxyServer + origAPI);

             const data=await response.json();
                
             setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            
            }
            fetchData();
        },[])

       
       
    return(
        
        <div className="flex flex-wrap w-[90%] justify-center mx-auto mt-20 gap-3 ">
        {
            
            RestData?.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}/>)
        }
        </div>
        
    )

}