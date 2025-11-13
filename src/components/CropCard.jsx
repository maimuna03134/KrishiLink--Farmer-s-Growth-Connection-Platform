import React, { useState } from 'react';
import { Link } from 'react-router';
import MyContainer from './myContainer/MyContainer';
import { BiMapPin, BiPackage } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';

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
      <div
        className={`
          card bg-base-100 shadow-lg overflow-hidden
          transition-all duration-300
          ${isHovered ? "shadow-2xl -translate-y-2" : ""}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure className="relative h-64 lg:h-48 overflow-hidden">
          <img
            src={image}
            // alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <span className="badge badge-success text-white px-3 py-1 text-xs font-semibold">
              {type}
            </span>
          </div>
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
                btn btn-style
                ${isHovered ? "scale-100 opacity-100" : "scale-75 opacity-0"}
                transition-all duration-300
              `}
            >
              <BsEye className="w-5 h-5" />
              View Details
            </Link>
          </div>
        </figure>

        <div
          className={`
            card-body p-5
            ${
              isHovered
                ? "bg-linear-to-t from-green-500 to-white text-green-800"
                : ""
            }
            transition-all duration-300
          `}
        >
          <h2
            className={`
              card-title text-2xl font-bold
              ${isHovered ? "text-green-800" : "text-base-content"}
            `}
          >
            {name}
          </h2>
          <div
            className={`
              w-16 h-1 mt-2 mb-1
              ${isHovered ? "bg-white" : "bg-success"}
            `}
          />
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span
                className={`
                  text-3xl font-bold
                  ${isHovered ? "text-green-800" : "text-success"}
                `}
              >
                $ {pricePerUnit}
              </span>
              <span
                className={`
                  text-lg ml-1
                  ${isHovered ? "text-green-800" : "text-base-content/70"}
                `}
              >
                /{unit}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <BiMapPin
              className={`
                w-4 h-4
                ${isHovered ? "text-green-900" : "text-success"}
              `}
            />
            <span
              className={`
                text-sm
                ${isHovered ? "text-green-900" : "text-base-content/70"}
              `}
            >
              {location}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <BiPackage
              className={`
                w-4 h-4
                ${isHovered ? "text-green-900" : "text-success"}
              `}
            />
            <span
              className={`
                text-sm
                ${isHovered ? "text-green-900" : "text-base-content/70"}
              `}
            >
              Available: {quantity} {unit}
            </span>
          </div>
          <p
            className={`
              text-sm line-clamp-2
              ${isHovered ? "text-green-900" : "text-base-content/60"}
            `}
          >
            {description}
          </p>
        </div>


      </div>
    </MyContainer>
  );
};

export default CropCard;