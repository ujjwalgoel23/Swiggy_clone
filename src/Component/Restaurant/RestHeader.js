import { useSelector } from "react-redux";
import { Link } from "react-router";
import { FaBuilding, FaSearch, FaCog, FaQuestionCircle, FaUserCircle, FaShoppingCart } from "react-icons/fa";

export default function RestHeader() {
    const counter = useSelector(state => state.cartSlice.count);

    return (
        <div className="w-full flex justify-between font-semibold items-center px-12 py-4 shadow-md bg-white">
            <div className="flex items-center space-x-2 ml-30">
                <img  src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" className="w-10 h-10 "/>
            </div>

            <div className="flex items-center space-x-8 text-gray-700 text-base ">
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaBuilding />
                    <span>Corporate</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaSearch />
                    <span>Search</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaCog />
                    <span>Offers</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaQuestionCircle />
                    <span>Help</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaUserCircle />
                    <span>Sign In</span>
                </div>
                <Link to="/Checkout" className="flex items-center space-x-1 cursor-pointer">
                    <FaShoppingCart />
                    <span>Cart ({counter})</span>
                </Link>
            </div>
        </div>
    );
}
