import React from 'react';
import Banner from '../../components/Banner';
import { Link, useLoaderData } from 'react-router';
import CropCard from '../../components/CropCard';
import HowItWorks from '../Others/HowItWorks';
import AgroNews from '../Others/AgroNews';
import Features from '../Others/Features';
import Testimonials from '../Others/Testimonials';
import MyContainer from '../../components/myContainer/MyContainer';
import FAQPage from '../Others/FAQPage';
import CTApage from '../Others/CTApage';
import WhyChooseUs from '../Others/WhyChooseUs';
import MeetExpertMembers from '../Others/MeetExpertMembers';




const Home = () => {
  const data = useLoaderData();
  // console.log(data)
    return (
      <div>
        <Banner />
        {/* latest section */}
        <MyContainer >
          <div className="mt-10 text-center text-green-700 text-4xl font-bold ">Latest Model</div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-6">
            {data.map((crop) => (
              <CropCard key={crop._id} crop={crop} />
            ))}
          </div>
          <div className="mt-5 flex justify-center ">
            <Link className="btn btn-style" to="/all-crops">
              Show All Items
            </Link>
          </div>
        </MyContainer>

       
        <div>
          <WhyChooseUs/>
        </div>
        <div>
          <HowItWorks/>
        </div>
        <div>
          <AgroNews/>
        </div>
        <div>
          <MeetExpertMembers/>
        </div>
        <div>
          <Features/>
        </div>
        <div className='mb-10'>
          <Testimonials/>
        </div>
        <div>
          <FAQPage/>
        </div>
        <div>
          <CTApage/>
        </div>
      </div>
    );
};

export default Home;