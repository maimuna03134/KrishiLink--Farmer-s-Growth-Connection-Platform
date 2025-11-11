import React from 'react';
import { Link } from 'react-router';

const CropCard = () => {
    return (
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <figure className="h-48 overflow-hidden">
          <img
            src="https://d28ht6kztpdvka.cloudfront.net/media/productimages/1849/tree.webp"
            // alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">3D Christmas tree model</h2>
          <div className="badge text-xs badge-xs badge-secondary rounded-full">
            Plants
          </div>
          <div className="text-xs text-secondary">Mr xyz</div>
          <p className="line-clamp-1">
            Realistic 3D Model of a Christmas tree.
          </p>
          <div className="card-actions justify-between items-center mt-4">
            <div className="flex gap-4 text-sm text-base-content/60"></div>
            <Link
                to={`/crop-details`}
              className="btn btn-style"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CropCard;