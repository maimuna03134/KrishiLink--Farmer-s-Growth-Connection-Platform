import React from 'react';
import CropCard from '../../components/CropCard';

const AllCrops = () => {

    return (
      <div>
        <h1 className="text-4xl font-bold text-green-800 mb-8">All Crops</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <CropCard/>
        </div>
      </div>
    );
};

export default AllCrops;