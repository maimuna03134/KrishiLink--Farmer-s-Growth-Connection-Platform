import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router";

const slides = [
  {
    title: "Connect Directly with Farmers 🌾",
    subtitle: "Fresh crops from farm to your doorstep — no middlemen!",
  },
  {
    title: "Sell Your Crops with Ease 🚜",
    subtitle: "Reach buyers nationwide — fair prices, quick transactions!",
  },
  {
    title: "Join the Agriculture Community 👨‍🌾",
    subtitle: "Connect with thousands of farmers, traders, and buyers to grow your business!",
  },
  {
    title: "Organic & Fresh Produce Market 🥬",
    subtitle: "Healthy food, eco-friendly farming — delivered with just one click!",
  },
  {
    title: "Digital Agriculture Revolution 📱",
    subtitle: "Take your agri-business to new heights with modern technology!",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[60vh] md:h-[65vh] lg:[70vh] relative overflow-hidden">
      {/* Background Video - ekta video pura banner er jonno */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1400&auto=format&fit=crop&q=60"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay - ekbar e, video r upore */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent z-1" />

      {/* Text Swiper - shudhu title/subtitle swipe hobe, image nai */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/60',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full hero-swiper relative z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center">
              <div className="container mx-auto md:px-12 lg:px-20">
                <div className="max-w-min">
                  <div className={`md:bg-transparent md:backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-2xl ${activeIndex === index ? 'animate-content' : 'opacity-0'}`}>

                    <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight animate-fade-in-up animation-delay-300 mt-4 w-70 md:w-60">
                      {slide.title}
                    </h1>

                    <div className="w-20 h-1 bg-white animate-fade-in-up animation-delay-500 my-4"></div>

                    <p className="text-sm w-80 md:w-60 text-white/95 leading-relaxed animate-fade-in-up animation-delay-700">
                      {slide.subtitle}
                    </p>

                    <div className="animate-fade-in-up animation-delay-900 mt-6">
                      <Link to="/all-crops">
                        <button className="px-2 py-2 text-sm md:text-base bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                          Explore Crops →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-content > * {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-900 { animation-delay: 0.9s; }

        .hero-swiper :global(.swiper-button-next),
        .hero-swiper :global(.swiper-button-prev) {
          color: white;
          background: rgba(0, 0, 0, 0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }

        .hero-swiper :global(.swiper-button-next:hover),
        .hero-swiper :global(.swiper-button-prev:hover) {
          background: rgba(0, 0, 0, 0.5);
        }

        .hero-swiper :global(.swiper-button-next::after),
        .hero-swiper :global(.swiper-button-prev::after) {
          font-size: 20px;
        }

        .hero-swiper :global(.swiper-pagination) {
          bottom: 30px;
        }

        .hero-swiper :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          margin: 0 6px;
        }
      `}</style>
    </div>
  );
};

export default Banner;