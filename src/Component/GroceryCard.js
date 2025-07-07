
export default function GroceryCard({GroceryData}){
    return(
        <div>
        <a href={GroceryData?.action?.link}>
        <img className="w-35 h-40 object-cover border-black rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + GroceryData?.imageId}></img>
        <h2 className=" text-left font-bold" >{GroceryData?.action?.text}</h2>  
        </a>
        
        </div>
    )
} 