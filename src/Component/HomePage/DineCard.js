import { FcRating } from "react-icons/fc";

export default function DineCard({ dineDetail }) {
  return (
    <div className="w-80 bg-white rounded-xl shadow-sm overflow-hidden flex-none">
      <a target="_blank" href={dineDetail?.cta?.link}>
        <div className="relative">
          <img className="w-full h-44 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+dineDetail?.info?.mediaFiles?.[0]?.url} alt="Restaurant" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
          <p className="absolute bottom-2 left-2 text-white font-semibold text-lg z-10"> {dineDetail?.info?.name}</p>
          <div className="absolute bottom-2 right-2 flex items-center gap-1 text-white text-sm z-10">
            <FcRating className="text-white bg-white rounded-full" size={16} />
            <span className="font-medium">{dineDetail?.info?.rating?.value}</span>
          </div>
        </div>

        
        <div className="px-3 py-2 text-sm text-gray-700 space-y-1">
    
          <div className="flex justify-between items-center text-gray-500">
            <p>{dineDetail?.info?.cuisines?.[0]} • {dineDetail?.info?.cuisines?.[1]}</p>
            <p>{dineDetail?.info?.costForTwo}</p>
          </div>

          
          <div className="flex justify-between items-center text-gray-500">
            <p className="truncate max-w-[60%]">{dineDetail?.info?.locationInfo?.formattedAddress}</p>
            <p>{dineDetail?.info?.locationInfo?.distanceString}</p>
          </div>

          <div className="flex gap-2 flex-wrap text-xs">
            {dineDetail?.info?.vendorOffer?.offerHighlights?.slice(0, 3).map((offer, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full"> {offer?.logoCtx?.text}</span>
            ))}
          </div>

         
          {dineDetail?.info?.offerInfoV3?.vendorOffer && (
            <div className="bg-[#1BA672] rounded-md px-2 py-1 text-white font-semibold text-sm">
              {dineDetail.info.offerInfoV3.vendorOffer.title}{" "}
              {dineDetail.info.offerInfoV3.vendorOffer.subtitle}
            </div>
          )}

          
          {dineDetail?.info?.offerInfoV2?.customerOffer?.header && (
            <div className="bg-[#C8F9E5] rounded-md px-2 py-1 text-[#1BA672] font-semibold text-sm">
              {dineDetail.info.offerInfoV2.customerOffer.header}
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
