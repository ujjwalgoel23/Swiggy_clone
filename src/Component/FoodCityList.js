export default function FoodCityList({ list }) {
  return (
    <a
      href={list?.link}
      className="border  border-gray-300 px-6 py-4 rounded-xl text-center w-60 h-18 hover:shadow-md transition"
    >
      <h3 className="text-gray-800 font-medium">
        {list?.text}
      </h3>
    </a>
  );
}
