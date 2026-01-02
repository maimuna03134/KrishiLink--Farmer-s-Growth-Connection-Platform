import React, { useState } from 'react';
import { Link } from 'react-router';
import MyContainer from './myContainer/MyContainer';
import { BiMapPin, BiPackage } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { MdOutlinePageview } from 'react-icons/md';

const CropCard = ({ crop }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    image,
    name,
    type,
    location,
    description,
    pricePerUnit,
    quantity,
    unit,
    _id
  } = crop;
  return (
    <MyContainer>
      <div className={`group relative w-[190px] h-[254px] bg-white rounded-[20px] border border-white/20 shadow-lg overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2.5 hover:shadow-2xl hover:border-green-400/20 ${isHovered ? "shadow-2xl -translate-y-2" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shine bg-[linear-gradient(120deg,rgba(255,255,255,0)_40%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_60%)]" />

        {/* Glow */}
        <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.3)_0%,transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 h-full p-3 flex flex-col gap-3">

          {/* Badge */}
          <span className="absolute top-3 right-3 z-20 bg-emerald-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full scale-75 opacity-0 transition-all duration-300 delay-100 group-hover:scale-100 group-hover:opacity-100">
            {type}
          </span>


          {/* Image */}
          <div className="relative h-[100px] rounded-xl bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03] shadow-sm">
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover' />

            <div
              className={`
              absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent
              flex items-center justify-center
              transition-opacity duration-300
              ${isHovered ? "opacity-100" : "opacity-0"}
            `}
            >
              <Link
                to={`/crop-details/${_id}`}
                className={`
                px-2 py-2 rounded-full bg-white/90 text-green-700 
                ${isHovered ? "scale-100 opacity-100" : "scale-75 opacity-0"}
                transition-all duration-300
              `}
              >
                <MdOutlinePageview className="w-4 h-4" />
                
              </Link>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-slate-800 font-bold text-lg transition-all duration-300 group-hover:text-green-600 group-hover:translate-x-0.5">
              {name}
            </h3>
            <p className="text-slate-600 text-xs opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">
              {description?.split(" ").slice(0, 6).join(" ")}...
            </p>
          </div>

          
          <div className="mt-auto flex items-center justify-between">
            <span className="font-bold text-slate-800 transition-all duration-300 group-hover:text-green-600 group-hover:translate-x-0.5">
              ${pricePerUnit}<span className="text-sm font-normal">/{unit}</span>
            </span>
            <span className="font-semibold text-slate-800 transition-all duration-300 group-hover:text-green-600 group-hover:translate-x-0.5 ">
              {location}
            </span>
           
          </div>
        </div>
      </div>
      
    </MyContainer>
  );
};

export default CropCard;