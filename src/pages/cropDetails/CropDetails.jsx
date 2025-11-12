import React, { useState } from "react";
import MyContainer from "../../components/myContainer/MyContainer";
import CropInformation from "./CropInformation";
import { useLoaderData } from "react-router";
import InterestForm from "./InterestForm";
import ReceivedInterests from "./ReceivedInterests";


const CropDetails = () => {
  const data = useLoaderData();
const crop = data?.result;
 const [refreshKey, setRefreshKey] = useState(0);

  const handleInterestSubmitted = () => {
    setRefreshKey(prev => prev + 1);
  }

  if (!crop) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading crop details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <MyContainer className={"px-4 sm:px-6 lg:px-8"}>
        <CropInformation crop={crop} key={`crop-${refreshKey}`} />

        <div className="mt-8">
          <InterestForm
            crop={crop}
            onInterestSubmitted={handleInterestSubmitted}
            key={`interest-form-${refreshKey}`}
          />
        </div>

        <div className="mt-8">
          <ReceivedInterests
            crop={crop}
            key={`received-interests-${refreshKey}`}
          />
        </div>
      </MyContainer>
    </div>
  );
};

export default CropDetails;
