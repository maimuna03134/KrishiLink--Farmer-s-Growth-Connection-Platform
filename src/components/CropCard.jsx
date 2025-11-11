import React from 'react';
import { Link } from 'react-router';

const CropCard = ({ crop }) => {
  const {
    image,
    name,
    type,
    location,
    description,
    pricePerUnit,
    quantity,
    unit,
  } = crop;
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          // alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge text-xs badge-xs badge-secondary rounded-full">
          {type}
        </div>
        <div className="text-xs text-secondary">{location}</div>
        <p className="line-clamp-1">{description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-green-600">
              ৳{pricePerUnit}/{unit}
            </span>
            <span className="text-gray-500">
              {quantity} {unit}
            </span>
          </div>
          <div className="flex gap-4 text-sm text-base-content/60"></div>
          <Link to={`/crop-details`} className="btn btn-style w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CropCard;