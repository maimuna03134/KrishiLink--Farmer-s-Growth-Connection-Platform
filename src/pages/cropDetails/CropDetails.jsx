import React from "react";
import MyContainer from "../../components/myContainer/MyContainer";
import CropInformation from "./CropInformation";
import { useLoaderData } from "react-router";
import InterestForm from "./InterestForm";
import ReceivedInterests from "./ReceivedInterests";


const CropDetails = () => {
  const data = useLoaderData();
const crop = data.result;
 

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <MyContainer className={"px-4 sm:px-6 lg:px-8"}>
        <CropInformation crop={crop} />

       
          <InterestForm crop={crop} />
 
          <ReceivedInterests interests={crop.interests} />
    
      </MyContainer>
    </div>
  );
};

export default CropDetails;
