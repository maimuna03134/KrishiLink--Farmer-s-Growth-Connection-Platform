import { useNavigate } from 'react-router';

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#f0fdf4] flex items-center justify-center px-4 overflow-hidden">

      {/* Floating background leaves */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { size: 18, left: '8%',  top: '15%', delay: '0s',    dur: '6s'  },
          { size: 12, left: '20%', top: '70%', delay: '1.5s',  dur: '7s'  },
          { size: 22, left: '78%', top: '10%', delay: '0.8s',  dur: '5.5s'},
          { size: 10, left: '90%', top: '60%', delay: '2s',    dur: '8s'  },
          { size: 16, left: '50%', top: '85%', delay: '1s',    dur: '6.5s'},
          { size: 14, left: '35%', top: '5%',  delay: '3s',    dur: '7.5s'},
          { size: 8,  left: '65%', top: '75%', delay: '0.3s',  dur: '5s'  },
        ].map((leaf, i) => (
          <svg
            key={i}
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="#16a34a"
            opacity="0.18"
            className="absolute"
            style={{
              left: leaf.left,
              top: leaf.top,
              animation: `floatLeaf ${leaf.dur} ease-in-out infinite`,
              animationDelay: leaf.delay,
            }}
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 19.34L5.71 21c1-1.01 2.01-2.01 3-3C10 19 15 21 19 17c3-3 4-8 2-14-2 2-4 4-4 5z" />
          </svg>
        ))}
      </div>

      {/* Main card */}
      <div className="relative z-10 text-center max-w-lg mx-auto">

        {/* Inline SVG — confused farmer */}
        <div className="flex justify-center mb-6">
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ground */}
            <ellipse cx="80" cy="148" rx="55" ry="8" fill="#bbf7d0" />
            {/* Pot */}
            <rect x="62" y="120" width="36" height="24" rx="4" fill="#a16207" />
            <rect x="58" y="116" width="44" height="8" rx="3" fill="#92400e" />
            {/* Wilted stem */}
            <path d="M80 116 Q78 95 65 80" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* Drooping leaf left */}
            <path d="M72 92 Q55 85 58 72 Q70 78 72 92Z" fill="#4ade80" />
            {/* Drooping leaf right */}
            <path d="M70 82 Q60 68 68 60 Q76 72 70 82Z" fill="#86efac" />
            {/* Wilted flower head */}
            <circle cx="65" cy="78" r="7" fill="#fde68a" />
            <path d="M65 71 Q62 64 65 60 Q68 64 65 71Z" fill="#fbbf24" />
            <path d="M65 85 Q68 92 65 96 Q62 92 65 85Z" fill="#fbbf24" opacity="0.6" />
            <path d="M58 78 Q51 75 47 78 Q51 81 58 78Z" fill="#fbbf24" />
            <path d="M72 78 Q79 75 83 78 Q79 81 72 78Z" fill="#fbbf24" opacity="0.6" />
            {/* Question marks */}
            <text x="95" y="72" fontSize="18" fill="#16a34a" fontWeight="bold" opacity="0.7">?</text>
            <text x="108" y="52" fontSize="13" fill="#4ade80" fontWeight="bold" opacity="0.6">?</text>
            <text x="88" y="48" fontSize="10" fill="#16a34a" fontWeight="bold" opacity="0.5">?</text>
          </svg>
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-bold text-[#16a34a] leading-none mb-3 tracking-tight">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Oops! This field doesn't exist.
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-base mb-8">
          The page you're looking for has been harvested or moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-7 py-3 bg-[#16a34a] text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-sm"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-7 py-3 border-2 border-[#16a34a] text-[#16a34a] font-semibold rounded-lg hover:bg-green-50 transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>

      <style>{`
        @keyframes floatLeaf {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-18px) rotate(12deg); }
          66%       { transform: translateY(-8px) rotate(-8deg); }
        }
      `}</style>
    </div>
  );
}
