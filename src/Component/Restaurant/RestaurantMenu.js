import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import MenuCard from "./MenuCard";
import Shimmer2 from "./Shimmer2";

export default function RestaurantMenu() {
    const { id } = useParams();

    const [RestInfo, setRestInfo] = useState([]);
    const [finalData2 , setfinalData2 ] = useState([]);
    const [selected , setSelected]=useState(null)
    const [RestData, setRestData] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const origAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

            const response = await fetch(proxyServer + origAPI);
            const data = await response.json();

            const restaurantInfo = data?.data?.cards[2]?.card?.card?.info;
             const restaurantInfo1 = data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
            
            const menuCards = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filteredMenu = menuCards.filter( (items) =>
                  'title' in items?.card?.card &&
                  items?.card?.card?.title?.toLowerCase() !== "top picks"
            );

            setRestInfo(restaurantInfo);
            setfinalData2 (restaurantInfo1);
            setRestData(filteredMenu);
            setIsLoading(false);
            
        }

        fetchData();
    }, []);

     if (isLoading) {
        return <Shimmer2/>;
    }


    return (
        <div className="w-[90%] sm:w-[70%] mt-5 mx-auto p-3 sm:p-4 max-w-4xl">
            <div className="text-xs text-gray-500 mb-1">Home / {RestInfo?.city} / {RestInfo?.name }</div>
            <div className="mb-4">
              <h1 className="text-xl sm:text-2xl font-bold mb-2">{RestInfo?.name}</h1></div>
            <div className=" mx-auto width-[80%]  border border-gray-300 rounded-xl p-4 sm:p-5 shadow-md">
            <div className="flex font-bold ml-2 mt-1">
              <div className="text-green-600">★ </div>
              <div >{RestInfo?.avgRating}</div>
              <div>({RestInfo?.totalRatingsString}) </div>
              <div className="ml-2 "> • {RestInfo?.costForTwoMessage}</div>
            </div>
            <div className="ml-2  text-orange-500 mt-1">{RestInfo?.cuisines}</div>
            <div className="font-semibold ml-2 mt-1">Outlet : {RestInfo?.areaName}</div>
            <div className="font-semibold  ml-2 mt-1">{RestInfo?.sla?.slaString}</div>
            </div>
            
             <div className="mb-5 mt-5">
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

            <div className="text-center  font-semibold ">---MENU---</div>

            <div className="w-[80%] mt-10 mx-auto ">
        <Link to={`/city/delhi/${id}/search`}>
        <p className="text-center w-full py-4 rounded-2xl bg-gray-200 text-2xl">Search for Dishes</p>
        </Link>
       </div>

        <div className="w-[50%] mt-10 mx-auto flex gap-2 ml-80 ">
        <button className={` text-base  text-green-500 py-1 px-2 mr-1 border rounded-sm ${selected==="veg"? "bg-green-500 text-white":"bg-white" }`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg </button>
        <button className={`text-base text-red-500 py-1 px-2 mr-1 border rounded-sm   ${selected==="nonveg"? "bg-red-500 text-white":"bg-white" }`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non-veg</button>
        <button className={`text-base text-blue-500 py-1 px-2 mr-1 border rounded-sm   ${selected==="bestseller"? "bg-blue-500 text-white":"bg-white" }`} onClick={()=>setSelected(selected==='bestseller'?null:'bestseller')}>BestSeller</button>
        
        </div>
        <hr className="mt-5 text-gray-300"></hr>

      <div className="w-[80%] mx-auto mt-20 font-sans">
        {
          RestData?.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card } foodselected={selected}/>)
        }
      </div>
        </div>
    );
}