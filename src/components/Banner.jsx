import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router';

const slides = [
  {
    image: "https://i.ibb.co/8dZc5qf/farmer-harvesting-field.jpg",
    title: "Connecting Farmers Across the Nation 🌾",
    subtitle:
      "Join the KrishiLink community to share, learn, and grow together.",
  },
  {
    image: "https://i.ibb.co/9sMgcVZ/fresh-vegetables-market.jpg",
    title: "Fresh Crops, Direct from the Source 🥦",
    subtitle: "Discover quality produce grown by trusted farmers near you.",
  },
  {
    image: "https://i.ibb.co/1TtLR6T/modern-agriculture-technology.jpg",
    title: "Empowering Farmers with Smart Technology 🚜",
    subtitle:
      "Stay ahead with modern tools, real-time updates, and market insights.",
  },
  {
    image: "https://i.ibb.co/Wp1xZz1/organic-farming-hand-soil.jpg",
    title: "Grow Organic, Grow Healthy 🌱",
    subtitle: "Promoting sustainable farming practices for a greener tomorrow.",
  },
  {
    image: "https://i.ibb.co/sybZdbK/farmers-meeting-community.jpg",
    title: "Together for a Better Harvest 🌤️",
    subtitle: "Collaborate, share knowledge, and uplift the farming community.",
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
                  <h1 className="animate-textPing mb-5 text-2xl md:text-3xl lg:text-5xl font-bold lg:leading-16 ">
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