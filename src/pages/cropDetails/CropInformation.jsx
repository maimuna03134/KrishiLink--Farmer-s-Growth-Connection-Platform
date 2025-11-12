import React from "react";
import {
  BiAward,
  BiCheckCircle,
  BiLeaf,
  BiMailSend,
  BiMapPin,
  BiPackage,
  BiShield,
  BiTrendingUp,
  BiUser,
} from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import {Link} from "react-router";
import MyContainer from "../../components/myContainer/MyContainer";

const CropInformation = ({crop}) => {
  
  console.log(crop)

//   const navigate = useNavigate();
  return (
    <MyContainer className={"p-4 md:p-6 lg:p-8"}>
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-8 md:p-8">
          {/* left side - Image  */}
          <div className="shrink-0 w-full md:w-1/2 relative">
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-64 object-cover min-h-[500px] rounded-xl shadow-md"
            />
            <div className="absolute top-6 right-6">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {crop.type}
              </span>
            </div>

            {/* Quality Badges */}
            <div className="absolute bottom-6 md:bottom-[43%] lg:bottom-[40%] left-6 flex gap-2">
              <span className="bg-white/90 backdrop-blur-sm text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <BiLeaf className="w-3 h-3" /> Organic
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <BiShield className="w-3 h-3" /> Certified
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <Link to="/all-crops">
              <span className="bg-[#025b3633] text-green-500 px-3 py-1 rounded-full text-sm   mb-3 font-bold flex items-center justify-center lg:justify-start gap-1 bg-clip-text">
                <IoMdArrowBack />

                <span>See all Crops</span>
              </span>
            </Link>

            {/* Title */}
            <div className="mb-6">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-3">
                {crop.name}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <BiAward className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold">
                  Premium quality crop 🌾
                </span>
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl p-6 mb-6 border-2 border-green-200">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-green-700 mb-1 font-semibold">
                    Price per unit
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-green-600">
                      $ {crop.pricePerUnit}
                    </span>
                    <span className="text-2xl text-green-700 ml-2">
                      /{crop.unit}
                    </span>
                  </div>
                </div>
                <FaDollarSign className="w-12 h-12 text-green-600 opacity-30" />
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <BiPackage className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-semibold">
                    Available Quantity
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {crop.quantity} {crop.unit}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <BiMapPin className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-semibold">
                    Cultivation Area
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                 {crop.location}
                </p>
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-xl p-5 mb-6 border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                  <BiUser className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Crop Owner</p>
                  <p className="text-xl font-bold text-gray-900">
                    {crop.owner.ownerName}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      <BiMailSend className="w-3 h-3" /> {crop.owner.ownerEmail}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <BsEye className="w-5 h-5 text-green-600" />
                Detailed Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {crop.description}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-3 mt-6">
              <div className="flex-1 text-center py-3 bg-green-50 rounded-lg">
                <BiCheckCircle className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <p className="text-xs text-green-700 font-semibold">Verified</p>
              </div>
              <div className="flex-1 text-center py-3 bg-green-50 rounded-lg">
                <BiShield className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <p className="text-xs text-green-700 font-semibold">Safe</p>
              </div>
              <div className="flex-1 text-center py-3 bg-green-50 rounded-lg">
                <BiTrendingUp className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <p className="text-xs text-green-700 font-semibold">
                  High Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default CropInformation;
