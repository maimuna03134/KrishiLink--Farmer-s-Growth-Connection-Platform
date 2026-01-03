import React, { use, useState } from "react";
import MyContainer from "../../components/myContainer/MyContainer";
import CropInformation from "./CropInformation";
import { Link, useLoaderData } from "react-router";
import InterestForm from "./InterestForm";
import ReceivedInterests from "./ReceivedInterests";
import { AuthContext } from "../../context/AuthContext";
import CropDetailsPage from "./CropDetailsPage";
import { BiLock, BiUser } from "react-icons/bi";


const CropDetails = () => {
  const data = useLoaderData();
  // console.log(data)
  const crop = data?.result;
  console.log(crop)

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
      <MyContainer>
        <CropInformation crop={crop} />
        <CropDetailsPage crop={crop} />

        <div className=" p-4 text-center mb-4 flex justify-center ">
          <button
            onClick={() => setTestOwner(!testOwner)}
            className="btn btn-style"
          >
            {testOwner ? "👤 Show as Buyer" : "👨‍🌾 Show as Owner"}
          </button>

        </div>

        {
          user ? (
            // User is logged in - Show interest form or received interests
            <>
              {!showAsOwner ? (
                <div className="mt-8 flex justify-center">
                  <InterestForm crop={crop} />
                </div>
              ) : (
                <div className="mt-8">
                  <ReceivedInterests crop={crop} />
                </div>
              )}
            </>
          ) : (
            // User is NOT logged in - Show login prompt
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

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Why register?
                  </h3>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Express interest in crops directly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Contact sellers and negotiate prices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Track your interests and manage purchases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Post your own crops for sale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      </MyContainer>
    </div>
  );
};

export default CropDetails;





      
