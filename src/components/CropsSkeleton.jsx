import React from "react";

export default function CropsSkeleton() {
    return (
        <div className="relative w-[190px] h-[254px] bg-white rounded-[20px] border border-gray-200 shadow-lg overflow-hidden">

            {/* Shimmer */}
            <div className="absolute inset-0 animate-pulse bg-linear-to-r from-transparent via-gray-100 to-transparent" />

            <div className="relative z-10 h-full p-5 flex flex-col gap-3">



                {/* Image placeholder */}
                <div className="h-[100px] rounded-xl bg-gray-200" />

                {/* Text */}
                <div className="space-y-2">
                    <div className="h-4 w-3/4 rounded bg-gray-200" />
                    <div className="h-3 w-full rounded bg-gray-200" />
                </div>

                {/* Footer */}
                <div className="mt-auto flex justify-between">
                    <div className="h-4 w-16 rounded bg-gray-200" />
                    <div className="h-4 w-12 rounded bg-gray-200" />
                </div>

            </div>
        </div>
    );
}
