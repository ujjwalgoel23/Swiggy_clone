import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Starter from "./Starter";
import Shimmer from "./Shimmer";

export default function Home() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {          
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const origAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

      const response = await fetch(proxyServer + origAPI);
      const data = await response.json();

      const restaurants = data?.data?.cards;

      setRestData(restaurants);

    }

    fetchData();
  }, []);

 if (RestData.length === 0) {
    return <Shimmer />;
  }

  return (  
    <>
    
    <h1 className="font-bold mt-10 mb-8 font-sans ml-40 text-2xl">{ RestData[0]?.card?.card?.header?.title}</h1>

    <div className="w-[80%] mx-auto overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200"> 
      {
      RestData[0]?.card?.card?.imageGridCards?.info?.map((restInfo1) => (
        <div key={restInfo1.id} className="inline-block mr-4">
        <Starter key={restInfo1.id} restInfo1={restInfo1} />
      </div>  
      ))

      }
    </div>

     <h1 className="font-bold mt-20 mb-2 font-sans ml-40 text-2xl">{ RestData[1]?.card?.card?.header?.title}</h1>

    <div className="flex flex-nowrap overflow-x-auto w-[80%] mx-auto gap-4 mt-2 scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200">
  {RestData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restInfo) => (
    <div key={restInfo?.info?.id} className="min-w-[250px] mr-10">
      <RestCard restInfo={restInfo} />
    </div>
  ))}
</div>


    <h1 className="font-bold mt-10 mb-2 font-sans ml-40 text-2xl">{ RestData[2]?.card?.card?.title}</h1>

      <div className="flex flex-wrap justify-center w-[90%] mx-auto gap-4 mt-2">
        {RestData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restInfo) => (
          <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
        ))}
      </div>
      
    </>
  );
}
