import { Link } from "react-router";

export default function RestCard({ restInfo }) {
  
  return (
    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="w-[270px] m-3 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-95  font-sans ">
      
      <div className="relative">
        <img
          className="w-full h-[160px] object-cover rounded-2xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${restInfo?.info?.cloudinaryImageId}`}
        />
        
       
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 py-2 text-white text-lg font-bold">
            {restInfo?.info?.aggregatedDiscountInfoV3?.header} {restInfo?.info?.aggregatedDiscountInfoV3?.subHeader}
          </div>
      </div>

      <div className="p-3 text-[#282b2f]">
        <h3 className="text-xl font-bold truncate">{ restInfo?.info?.name}</h3>
        <div className="flex items-center text-sm font-semibold text-gray-800 ">
          <span className="text-green-600">★ </span>
          <span className=" text-black-600">{restInfo?.info?.avgRating} •</span>
          <span>{restInfo?.info?.sla?.slaString}</span>
        </div>

        <p className="text-gray-700 text-s  truncate ">
          {restInfo?.info?.cuisines.join(", ")}
        </p>

        <p className="text-gray-700 text-sm">{restInfo?.info?.locality || restInfo?.info?.areaName}</p>
      </div>
    </div>
    </Link>
  );
}
