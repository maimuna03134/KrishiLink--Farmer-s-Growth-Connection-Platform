import React, { useState } from "react";
import CropCard from "../../components/CropCard";
import { Link, useLoaderData } from "react-router";
import MyContainer from "../../components/myContainer/MyContainer";
import cropsNotFound from '../../assets/not_found.png'
import { GoSearch } from "react-icons/go";

const AllCrops = () => {
  const data = useLoaderData();
  // console.log(data)

  const [searchTerm, setSearchTerm] = useState("");
  const [crops, setCrops] = useState(data);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term === "") {
      setCrops(data);
    } else {
      const filtered = data.filter(
        (crop) =>
          crop.name.toLowerCase().includes(term) ||
          crop.type.toLowerCase().includes(term) ||
          crop.location.toLowerCase().includes(term)
      );
      setCrops(filtered);
    }
  };

  return (
    <div className="bg-gray-50 py-8">
      <MyContainer className={"px-4 sm:px-6 lg:px-8"}>
        <h1 className="text-4xl font-bold text-green-800 mb-8">All Crops</h1>

        {/* search bar */}
        <div className="mb-8">
          <div className="relative">
            <GoSearch
              size={20}
              color="#627382"
              className="absolute left-3 top-3 "
            />
            <input
              type="text"
              placeholder="Search Crops..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {crops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {crops.map((crop) => (
              <CropCard key={crop._id} crop={crop} />
            ))}
          </div>
        ) : (
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

            <Link to="/all-crops">
              <span className="bg-[#025b3633] text-green-500 px-3 py-1 rounded-full text-sm   mb-3 font-bold flex items-center justify-center lg:justify-start gap-1 bg-clip-text">
                <IoMdArrowBack />
                <span>Go Back</span>
              </span>
            </Link>
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default AllCrops;
