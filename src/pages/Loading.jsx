import { useEffect, useState } from 'react';

export default function Loading({ isLoading = true }) {
  const [taglineVisible, setTaglineVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const t = setTimeout(() => setTaglineVisible(true), 500);
      return () => clearTimeout(t);
    } else {
      setTaglineVisible(false);
    }
  }, [isLoading]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#f0fdf4] flex items-center justify-center overflow-hidden transition-opacity duration-300"
      style={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      <div className="flex flex-col items-center gap-6 px-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#dcfce7" />
            <path d="M20 32 Q18 22 10 16 Q16 14 20 18 Q24 14 30 16 Q22 22 20 32Z" fill="#16a34a" />
            <rect x="19" y="28" width="2" height="6" rx="1" fill="#15803d" />
          </svg>
          <span className="text-3xl font-bold text-[#16a34a] tracking-tight">CropTrade</span>
        </div>

        {/* Progress bar */}
        <div className="w-64 sm:w-80 h-2 bg-green-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#16a34a] rounded-full" style={{ animation: 'progressSlide 2s ease-in-out infinite' }} />
        </div>

        {/* Spinner */}
        <div
          className="w-9 h-9 rounded-full border-4 border-green-100 border-t-[#16a34a]"
          style={{ animation: 'spin 0.8s linear infinite' }}
        />

        {/* Tagline */}
        <p
          className="text-gray-500 text-sm font-medium transition-opacity duration-500"
          style={{ opacity: taglineVisible ? 1 : 0 }}
        >
          Connecting Farmers &amp; Buyers...
        </p>
      </div>

      <style>{`
        @keyframes progressSlide {
          0%   { width: 0%;    margin-left: 0%; }
          50%  { width: 60%;   margin-left: 20%; }
          100% { width: 0%;    margin-left: 100%; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
