// Shimmer.js
export default function Shimmer() {
  return (
    <div className="w-[80%] mx-auto animate-pulse">
      {/* Header */}
      <div className="h-6 bg-gray-300 w-1/3 mb-6 mt-10 rounded"></div>

      {/* Horizontal Scroll Cards Skeleton */}
      <div className="flex overflow-x-auto gap-4 mb-12">
        {Array(6).fill("").map((_, i) => (
          <div
            key={i}
            className="w-[200px] h-[120px] bg-gray-200 rounded-lg"
          ></div>
        ))}
      </div>

      {/* Section 2 Header */}
      <div className="h-6 bg-gray-300 w-1/3 mb-6 mt-10 rounded"></div>

      {/* Restaurant Cards Horizontal Scroll Skeleton */}
      <div className="flex overflow-x-auto  gap-4 mb-12">
        {Array(6).fill("").map((_, i) => (
          <div
            key={i}
            className="min-w-[250px] h-[300px] bg-gray-200 rounded-lg"
          ></div>
        ))}
      </div>

      {/* Section 3 Header */}
      <div className="h-6 bg-gray-300 w-1/3 mb-6 mt-10 rounded"></div>

      {/* Grid of Cards Skeleton */}
      <div className="flex flex-wrap gap-4 justify-center">
        {Array(8).fill("").map((_, i) => (
          <div
            key={i}
            className="w-[250px] h-[300px] bg-gray-200 rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
}
