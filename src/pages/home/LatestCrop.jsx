import React from 'react';
import MyContainer from '../../components/myContainer/MyContainer';
import { Link } from 'react-router';


const LatestCrop = ({data}) => {

    return (
      <MyContainer>
        <div className="text-center text-xl font-bold">Latest Model</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {data.map((crop) => (
            <CropCard key={crop._id} crop={crop} />
          ))}
        </div>
        <div className="mt-3 flex justify-center lg:justify-end ">
          <Link className="btn btn-style" to="/all-crops">
            Show All Items
          </Link>
        </div>
      </MyContainer>
    );
};

export default LatestCrop;