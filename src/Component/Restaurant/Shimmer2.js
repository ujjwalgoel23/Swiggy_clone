export default function Shimmer2() {
    return (
        <div className="w-[70%] mx-auto animate-pulse space-y-6">
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="h-10 bg-gray-200 rounded w-1/2"></div>

            <div className="h-40 bg-gray-200 rounded"></div>

            <div className="flex space-x-4">
                <div className="h-24 bg-gray-200 rounded w-1/4"></div>
                <div className="h-24 bg-gray-200 rounded w-1/4"></div>
                <div className="h-24 bg-gray-200 rounded w-1/4"></div>
            </div>

            <div className="h-10 bg-gray-200 rounded w-full"></div>

            <div className="flex space-x-4">
                <div className="h-6 bg-gray-200 rounded w-16"></div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
                <div className="h-6 bg-gray-200 rounded w-24"></div>
            </div>

            <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
            </div>
        </div>
    )
}
