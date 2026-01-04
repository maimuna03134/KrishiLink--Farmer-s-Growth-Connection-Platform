import React, { use, useState } from "react";
import MyContainer from "../../components/myContainer/MyContainer";
import { Link, useLoaderData } from "react-router";
import InterestForm from "./InterestForm";
import ReceivedInterests from "./ReceivedInterests";

import CropDetailsPage from "./CropDetailsPage";
import { BiLock, BiUser } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";

const CropDetails = () => {
  const data = useLoaderData();
  const crop = data?.result;
  const { user } = use(AuthContext);

  const isOwner = user?.email === crop?.owner?.ownerEmail;


  const [showInterestForm, setShowInterestForm] = useState(false);

  if (!crop) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading crop details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <MyContainer>
      
        <CropDetailsPage crop={crop} />

      
        <div className="p-4 text-center mb-4 flex justify-center">
          <button
            onClick={() => setShowInterestForm((prev) => !prev)}
            className="btn btn-style"
          >
            {showInterestForm
              ? "👤 Show the interest form"
              : "👨‍🌾 Show received interest list "}
          </button>
        </div>

    
        {user ? (
          <>
         
            {showInterestForm ? (
              
              !isOwner ? (
                <div className="mt-8 flex justify-center">
                  <InterestForm crop={crop} />
                </div>
              ) : (
                <div className="mt-8 text-center bg-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto border-2 border-gray-200">
                  <p className="text-gray-600 text-lg">
                    Owners cannot express interest in their own crop.
                  </p>
                </div>
              )
            ) : (
             
              <div className="mt-8">
                <ReceivedInterests crop={crop} />
              </div>
            )}
          </>
        ) : (
         
          <div className="mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-2xl mx-auto border-2 border-gray-200">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BiLock className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Want to Express Interest?
                </h2>
                <p className="text-gray-600 text-lg">
                  Please login to express your interest in this crop or contact the seller.
                </p>
              </div>

              <div className="space-y-4">
                <Link to="/auth/login">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <BiUser className="w-6 h-6" />
                    Login to Continue
                  </button>
                </Link>

                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/auth/register"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default CropDetails;
