import React from "react";

const SkeletonCard = () => {
    return (
        <div className="animate-pulse flex flex-col gap-2 p-4 bg-gray-800 rounded-lg">
            <div className="h-48 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
    );
};

export default SkeletonCard;