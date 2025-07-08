export default function FoodCard({foodData}){
    return(
        <>
        <a href={foodData?.action?.link}>
        <img className="w-30 h-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}></img>
        </a>
        </>
    )
} 