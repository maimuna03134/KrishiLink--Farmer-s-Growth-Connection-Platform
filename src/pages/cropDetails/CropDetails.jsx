import React, { use, useState } from "react";
import MyContainer from "../../components/myContainer/MyContainer";
import CropInformation from "./CropInformation";
import { useLoaderData } from "react-router";
import InterestForm from "./InterestForm";
import ReceivedInterests from "./ReceivedInterests";
import { AuthContext } from "../../context/AuthContext";


const CropDetails = () => {
  const data = useLoaderData();
  const crop = data?.result;
  
  const { user } = use(AuthContext);

  const [testOwner, setTestOwner] = useState(null);

  const isOwner = user?.email === crop?.owner?.ownerEmail;
 
  const showAsOwner = testOwner !== null ? testOwner : isOwner;

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
        <CropInformation crop={crop} />

        <div className=" p-4 text-center mb-4 flex justify-center ">
          <button
            onClick={() => setTestOwner(!testOwner)}
            className="btn btn-style"
          >
            {testOwner ? "👤 Show as Buyer" : "👨‍🌾 Show as Owner"}
          </button>
          
        </div>

        {!showAsOwner ? (
          <div className="mt-8 flex justify-center">
            <InterestForm crop={crop} />
          </div>
        ) : (
          <div className="mt-8">
            <ReceivedInterests crop={crop} />
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default CropDetails;
