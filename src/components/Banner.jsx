import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router';

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop",
    title: "Connect Directly with Farmers 🌾",
    subtitle: "Fresh crops from farm to your doorstep — no middlemen!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop",
    title: "Sell Your Crops with Ease 🚜",
    subtitle: "Reach buyers nationwide — fair prices, quick transactions!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1595855759920-86582396756a?w=1200&h=600&fit=crop",
    title: "Join the Agriculture Community 👨‍🌾",
    subtitle:
      "Connect with thousands of farmers, traders, and buyers to grow your business!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=600&fit=crop",
    title: "Organic & Fresh Produce Market 🥬",
    subtitle:
      "Healthy food, eco-friendly farming — delivered with just one click!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&h=600&fit=crop",
    title: "Start the Digital Agriculture Revolution 📱",
    subtitle: "Take your agri-business to new heights with modern technology!",
  },
];


const Banner = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        className="h-[90vh] w-full my-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[90vh] w-full bg-center bg-cover flex flex-col justify-center items-center text-white relative "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="hero-content text-neutral-content ">
                <div className="relative z-10 text-center px-4 lg:mt-30 py-10 lg:mr-36">
                  <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold lg:leading-16 ">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-base leading-5 md:leading-7 text-white my-4 ">
                    {slide.subtitle}
                  </p>
                  <Link to="/all-crops">
                    <button className=" btn border-2 border-green-500 bg-white hover:bg-green-700 hover:text-green-100 text-green-700 font-semibold rounded-full mb-10 md:mb-6 lg:mb-10">
                      🌾 Explore Crops
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default Banner;