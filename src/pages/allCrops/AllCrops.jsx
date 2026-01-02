import React, { useEffect, useState } from "react";
import CropCard from "../../components/CropCard";
import { Link, useLoaderData } from "react-router";
import MyContainer from "../../components/myContainer/MyContainer";
import cropsNotFound from '../../assets/not_found.png'
import { GoSearch } from "react-icons/go";
import { IoMdArrowBack } from "react-icons/io";

const AllCrops = () => {
  const data = useLoaderData();
  // console.log(data)
const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [crops, setCrops] = useState(data);

 useEffect(() => {
   setLoading(true);
   const timer = setTimeout(() => {
     setCrops(data);
     setLoading(false);
   }, 500); 

   return () => clearTimeout(timer);
 }, [data]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term === "") {
      setCrops(data);
    } else {
      const filtered = data.filter(
        (crop) =>
          crop?.name.toLowerCase().includes(term) ||
          crop?.type.toLowerCase().includes(term) ||
          crop?.location.toLowerCase().includes(term)
      );
      setCrops(filtered);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }


  return (
    <div className="bg-linear-to-br from-green-50 via-lime-50 to-green-50 py-8">
      <div className="relative h-96 md:h-[520px] overflow-hidden rounded-b-3xl shadow-2xl">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.th4CxzJANWB8jx1wMpbhDAHaE8?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Fresh farm crops"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Fresh Crops <br />
              <span className="text-green-400">Direct from Farmers</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl drop-shadow">
              Connect with farmers across the country. Buy high-quality,
              organic, and affordable crops — straight to your table.
            </p>

            <div className="relative max-w-2xl">
              <GoSearch
                size={24}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-00"
              />
              <input
                type="text"
                placeholder="Search by crop, type, or location..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-14 pr-6 py-4 rounded-full text-white border-2 border-green-300 text-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-green-400 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
      <MyContainer className={"px-4 sm:px-6 lg:px-8 mt-10"}>
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">All Crops</h1>

        {crops.length === 0 ? (
          <div className="min-h-screen flex flex-col justify-center items-center gap-2">
            <img
              src={cropsNotFound}
              alt=""
              className="animate-pulse bg-transparent w-[300px] h-[300px]"
            />
            <div className="text-center">
              <h1 className="text-5xl text-gray-400 text-opacity-70 font-extrabold text-center my-5 ">
                Oops! 🧑‍🌾 Can’t find what you’re looking for?
              </h1>
              <p className="md:py-5 p-5 md:p-0 text-[#627382] text-sm">
                🌱 Try searching for the crops you’re interested in and discover
                more opportunities!
              </p>
            </div>

            <a href="/all-crops">
              <span className="bg-[#025b3633] text-green-500 px-3 py-1 rounded-full text-sm   mb-3 font-bold flex items-center justify-center lg:justify-start gap-1 bg-clip-text">
                <IoMdArrowBack />
                <span>Go Back</span>
              </span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {crops.map((crop) => (
              <CropCard key={crop._id} crop={crop} />
            ))}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default AllCrops;
