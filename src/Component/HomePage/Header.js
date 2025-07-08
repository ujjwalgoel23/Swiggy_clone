import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-[#FF5200] font-serif text-white">
      <div className="flex justify-between pl-20 pr-20 py-8">
        <img
          className="w-40 h-12"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
        />
        <div className="text-white text-base font-bold flex gap-15 items-center">
          <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner With Us</a>
          <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="">
            Get The App
          </a>
          <a className="border border-black py-3 px-4 rounded-2xl bg-black" target="_blank" href="">
            Sign in
          </a>
        </div>
      </div>

      <div className="pt-16 pb-8 relative">
        <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"/>
        <img className="h-110 w-60 absolute top-0 right-0"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"/>

        <div className="max-w-[60%] text-5xl font-bold container mx-auto text-center">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>

        <div className="max-w-[70%] container mx-auto flex gap-5 mt-10">
          <div className="relative w-[40%]">
            <FaLocationDot className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 text-xl" />
            <input className="bg-white text-black text-xl pl-10 pr-6 py-4 rounded-2xl w-full" type="text" placeholder="Enter your delivery location"/>
             <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl" />
          </div>

       <div className="relative w-[55%]">
            <input className="bg-white text-black text-xl pl-10 pr-6 py-4 rounded-2xl w-full" type="text" placeholder="Search for restaurant, items & more" />
             <IoIosSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl" />
          </div>
 
         
         
        </div>
      </div>

      <div className="max-w-[80%] container mx-auto flex">
        <Link to="/restaurants">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" />
        </Link>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" />
        </a>
        <a href="https://www.swiggy.com/dineout">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" />
        </a>
      </div>
    </header>
  );
}
