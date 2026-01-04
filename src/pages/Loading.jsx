import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-600 via-green-700 to-teal-800 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        {/* Spinner Icon */}
        <div className="mb-8 relative">
          <Loader2 className="w-24 h-24 mx-auto text-white animate-spin" />
          <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-emerald-200 animate-pulse" />
          <Sparkles className="w-6 h-6 absolute bottom-2 left-1/3 text-emerald-300 animate-pulse delay-300" />
        </div>

        {/* Loading Text */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Loading
          <span className="animate-bounce inline-block">.</span>
          <span className="animate-bounce inline-block delay-100">.</span>
          <span className="animate-bounce inline-block delay-200">.</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-md mx-auto">
          Please wait while we prepare everything for you
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-emerald-900 bg-opacity-30 rounded-full h-3 overflow-hidden">
          <div className="h-full bg-linear-to-r from-white to-emerald-200 rounded-full animate-progress"></div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-emerald-200 text-sm">
          <p>This won't take long...</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}