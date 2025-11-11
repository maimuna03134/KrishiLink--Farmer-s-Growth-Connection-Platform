import React from 'react';
import Banner from '../../components/Banner';
import { useLoaderData } from 'react-router';
import CropCard from '../../components/CropCard';

const Home = () => {
  const data = useLoaderData();
  // console.log(data)
    return (
      <div>
        <Banner />
        <div className="text-center text-xl font-bold">Latest Model</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {data.map((crop) => (
            <CropCard key={crop._id} crop={crop} />
          ))}
        </div>
      </div>
    );
};

export default Home;