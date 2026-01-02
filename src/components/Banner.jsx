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
    title: "Start the Digital Agriculture Revolution 📱",
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
        speed={500}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image with Zoom Effect */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ${activeIndex === index ? "scale-120" : "scale-100"
                  }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Content - Left Side */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                  <div
                    className={`text-white text-center transform transition-all duration-1000 ease-out ${activeIndex === index
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                      }`}
                  >
                    {/* Title */}
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 leading-tight drop-shadow-2xl uppercase">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed drop-shadow-lg">
                      {slide.subtitle}
                    </p>

                    {/* Button */}
                    <Link to="/all-crops">
                      <button className="px-2 py-2 btn-style hover:scale-105 transition-all duration-300">
                        🌾 Explore Crops
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;