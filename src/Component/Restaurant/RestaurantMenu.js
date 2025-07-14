import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import MenuCard from "./MenuCard";

export default function RestaurantMenu() {
    const { id } = useParams();

    const [RestInfo, setRestInfo] = useState([]);
    const [finalData2 , setfinalData2 ] = useState([]);
    const [selected , setSelected]=useState(null)
    const [RestData, setRestData] = useState([]); 

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const origAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

            const response = await fetch(proxyServer + origAPI);
            const data = await response.json();

            const restaurantInfo = data?.data?.cards[2]?.card?.card?.info;
             const restaurantInfo1 = data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
            
            const menuCards = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filteredMenu = menuCards.filter((items) => 'title' in items?.card?.card);

            setRestInfo(restaurantInfo);
            setfinalData2 (restaurantInfo1);
            setRestData(filteredMenu);
            
        }

        fetchData();
    }, []);

    return (
        <div>
            <div className=" ml-70 text-small font-semibold mb-5">Home/{RestInfo?.city}/{RestInfo?.name }</div>
            <div className="ml-75 text-3xl font-bold mb-5">{RestInfo?.name}</div>
            <div className="flex font-bold ml-80">
              <div className="text-green-600">★ </div>
              <div >{RestInfo?.avgRating}</div>
              <div>({RestInfo?.totalRatingsString}) </div>
              <div className="ml-3 "> • {RestInfo?.costForTwoMessage}</div>
            </div>
            <div className="ml-80  text-orange-500 font-bold underline">{RestInfo?.cuisines}</div>
            <div className="font-bold ml-80">Outlet : {RestInfo?.areaName}</div>
            <div className="font-bold ml-80">{RestInfo?.sla?.slaString}</div>
            <div className="font-bold ml-80 text-xl">Deals for you</div>
            
             <div className="mb-5">
        <h2 className="font-bold text-lg mb-4">Deals for you</h2>
        <div className="flex overflow-x-auto gap-3 pb-1">
          {finalData2?.map((deal, index) => (
            <div
              key={`${deal?.info?.restId}-${index}`}
              className="flex-shrink-0 border border-gray-200 rounded-md p-2 min-w-[200px]"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8">
                  <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-sm">
                    {deal?.info?.header}
                  </div>
                  <div className="text-xs text-gray-500">
                    {deal?.info?.primaryDescription}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   





            <div className="text-center mb-5 font-semibold">MENU</div>

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
    );
}
