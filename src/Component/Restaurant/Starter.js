
export default function Starter({ restInfo1 }) {
  return (
    
        <div className="w-[180px] m-2">
      <img
        className="w-full h-[160px] object-cover rounded-2xl"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${restInfo1?.imageId}`}
      />
    </div>

  );
}

