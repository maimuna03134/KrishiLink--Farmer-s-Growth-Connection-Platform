import React from 'react';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function Error() {
    const handleGoHome = () => {
        // Navigate to home page
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-green-600 via-green-700 to-lime-800 flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto animate-fade-in">
                {/* Search Icon */}
                <div className="mb-8 animate-bounce">
                    <Search className="w-24 h-24 mx-auto text-white opacity-80" />
                </div>

                {/* 404 Text */}
                <h1 className="text-9xl md:text-[200px] font-bold text-white mb-4 animate-pulse">
                    404
                </h1>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-green-100 mb-10 max-w-md mx-auto">
                    The page you're looking for seems to have wandered off. Let's get you back on track!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={handleGoHome}
                        className="group flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-purple-50"
                    >
                        <Home className="w-5 h-5" />
                        Go Back Home
                    </button>

                    <button
                        onClick={() => window.history.back()}
                        className="group flex items-center gap-2 bg-green-800 bg-opacity-50 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white border-opacity-30 hover:bg-opacity-70 transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-purple-200 text-sm">
                    <p>Error Code: 404 | Page Not Found</p>
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
      `}</style>
        </div>
    );
}