import React, { use, useState } from "react";
import userProfileImg from '../../assets/user.png'
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const MyProfile = () => {
  const { user, setUser, updateProfileInfo } = use(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateProf = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputName = form.name?.value;
    const inputPhoto = form.photoURL?.value;

    updateProfileInfo({ displayName: inputName, photoURL: inputPhoto })
      .then(() => {
        setUser({ ...user, displayName: inputName, photoURL: inputPhoto });
        toast.success("Profile update successfully!");
        setIsModalOpen(false);
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-10 my-6" data-aos="fade-right">
      <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
        My Profile
      </h2>

      <div className="bg-white shadow-lg rounded-lg px-6 py-14 flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={`${user ? user.photoURL : userProfileImg}`}
          alt={user?.displayName || "User"}
          className="w-32 h-32 rounded-full  object-cover border-2 border-orange-400"
        />

        <div className="flex-1">
          <p className="text-lg font-semibold">
            Name: {user?.displayName || "N/A"}
          </p>
          <p className="text-lg font-semibold my-4">Email: {user?.email}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-style "
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative">
            <h3 className="text-xl font-bold text-orange-500 mb-4 text-center">
              Update Profile
            </h3>

            <form onSubmit={handleUpdateProf} className="flex flex-col gap-4">
              <div>
                <label className="block font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName || ""}
                  className="input input-bordered w-full mt-1"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  defaultValue={user?.photoURL || ""}
                  className="input input-bordered w-full mt-1"
                />
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
