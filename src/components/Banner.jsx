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
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop",
    title: "Connect Directly with Farmers 🌾",
    subtitle: "Fresh crops from farm to your doorstep — no middlemen!",

  },
  {
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop",
    title: "Sell Your Crops with Ease 🚜",
    subtitle: "Reach buyers nationwide — fair prices, quick transactions!",

  },
  {
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=1200&h=600&fit=crop",
    title: "Join the Agriculture Community 👨‍🌾",
    subtitle: "Connect with thousands of farmers, traders, and buyers to grow your business!",

  },
  {
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=600&fit=crop",
    title: "Organic & Fresh Produce Market 🥬",
    subtitle: "Healthy food, eco-friendly farming — delivered with just one click!",

  },
  {
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&h=600&fit=crop",
    title: "Digital Agriculture Revolution 📱",
    subtitle: "Take your agri-business to new heights with modern technology!",

  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[60vh] md:h-[65vh] relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/60',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
        }}

        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">

              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-6000 ease-out ${activeIndex === index ? "scale-110" : "scale-100"
                  }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* linear Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />

              {/* Content Container */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto md:px-12 lg:px-20">
                  <div className="max-w-min ">
                    {/* Animated Content Box with Semi-Transparent Background */}
                    <div className={`md:bg-transparent md:backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-2xl ${activeIndex === index ? 'animate-content' : 'opacity-0'}`}>



                      {/* Title */}
                      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight animate-fade-in-up animation-delay-300 mt-4 w-70 md:w-60">
                        {slide.title}
                      </h1>

                      {/* Divider Line */}
                      <div className="w-20 h-1 bg-white animate-fade-in-up animation-delay-500 my-4"></div>

                      {/* Subtitle */}
                      <p className="text-sm w-80 md:w-60 text-white/95 leading-relaxed animate-fade-in-up animation-delay-700">
                        {slide.subtitle}
                      </p>

                      {/* Button */}
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

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

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