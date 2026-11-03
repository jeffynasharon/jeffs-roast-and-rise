import React from 'react';

export const SkeletonCard = () => {
  return (
    <div className="bg-cream-50 rounded-2xl p-4 border border-cream-200/80 shadow-warm-sm flex flex-col space-y-3 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-52 bg-cream-200 rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer"></div>
      </div>
      
      {/* Title & Badge */}
      <div className="flex items-center justify-between pt-1">
        <div className="h-4 w-16 bg-cream-200 rounded-full"></div>
        <div className="h-4 w-12 bg-cream-200 rounded-full"></div>
      </div>

      <div className="h-6 w-3/4 bg-cream-300 rounded"></div>
      <div className="h-4 w-full bg-cream-200 rounded"></div>
      <div className="h-4 w-2/3 bg-cream-200 rounded"></div>

      {/* Price & Action */}
      <div className="flex items-center justify-between pt-3 border-t border-cream-200">
        <div className="h-6 w-16 bg-cream-300 rounded"></div>
        <div className="h-9 w-24 bg-cream-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;

