import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function SearchFood() {
  const { id } = useParams();
  const [food, setFood] = useState(""); //Stores the text entered in the search box.
  const [RestData, setRestData] = useState([]); //Stores the entire menu data fetched from Swiggy’s API.
  const [FilteredResult, setFilteredResult] = useState([]);  //Stores the filtered results — based on what the user searched for (food).

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const origAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + origAPI);
      const data = await response.json();
      const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ;
      const filterData = tempData.filter((items) => "title" in items?.card?.card);
      setRestData(filterData);
    }

    fetchData();
  }, []);

  // Search filtering logic
  useEffect(() => {
    if (food.length <= 1) {
        setFilteredResult([]);
      
    }

    const matches = [];

    RestData.forEach((section) => {
      section?.card?.card?.itemCards?.forEach((item) => {
        const info = item?.card?.info;
        if ( info?.name?.toLowerCase().includes(food.toLowerCase())) {
          matches.push(info);
        }
      });
    });

    const uniqueMap = new Map();
    matches.forEach((item) => {
      if (!uniqueMap.has(item.id))  uniqueMap.set(item.id, item);
    });

    setFilteredResult([...uniqueMap.values()]);
  }, [food, RestData]);

  return (
    <div className="w-[60%] mx-auto mt-15">
      <input className=" w-full h-10 py-1 text-sm rounded-md" placeholder="Search here" onChange={(e) => setFood(e.target.value)} value={food}/>
      <hr></hr>
       <div className="mt-10">{FilteredResult.map((item) => (
            <div  key={item.id} className="flex justify-between items-start border-b py-6">
              <div className="w-[80%]">
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-md font-medium mt-1"> ₹{(item.price ?? item.defaultPrice) / 100}</p>
                <p className="text-gray-600 text-sm mt-2">{item?.description}</p>
              </div>

              <div className="w-[130px] h-[100px] relative"> 
                  <img className="w-full h-full object-cover rounded-xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}/>
                  <button className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-lg text-green-600 font-bold shadow-md" >ADD</button>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
}  