import React, { use, useEffect, useState } from "react";
import MyContainer from "../../components/myContainer/MyContainer";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { CiLock } from "react-icons/ci";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";

const MyInterests = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("status");

  const fetchMyInterests = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://farmers-growth-connection-platform.vercel.app/my-interests/${user.email}`
      );
      const data = await res.json();

      if (data.success) {
        setInterests(data.result);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load interests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchMyInterests();
    }
  }, [user]);

  // sorting by name or status
  const sortedInterests = [...interests].sort((a, b) => {
    if (sortBy === "status") {
      return (a.status || "").localeCompare(b.status || "");
    } else if (sortBy === "cropName") {
      return (a.cropName || "").localeCompare(b.cropName || "");
    }
    return 0;
  });

  const getStatusBadge = (status) => {
    const config = {
      pending: {
        icon: <CiLock className="w-4 h-4" />,
        label: "Pending",
        color: "bg-yellow-100 text-yellow-800",
      },
      accepted: {
        icon: <BiCheckCircle className="w-4 h-4" />,
        label: "Accepted",
        color: "bg-green-100 text-green-800",
      },
      rejected: {
        icon: <BiXCircle className="w-4 h-4" />,
        label: "Rejected",
        color: "bg-red-100 text-red-800",
      },
    };

    const item = config[status];
    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${item.color}`}
      >
        {item.icon}
        {item.label}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-8">
      <MyContainer className={"px-4 sm:px-6 lg:px-8"}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">My Interests</h1>
          <div>
            <label className="mr-2 font-semibold">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            >
              <option value="status">Status</option>
              <option value="cropName">Crop Name</option>
            </select>
          </div>
        </div>

        {interests.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              You haven't expressed interest in any crops yet
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-6 py-4 text-left">Crop Name</th>
                  <th className="px-6 py-4 text-left">Owner</th>
                  <th className="px-6 py-4 text-left">Quantity</th>
                  <th className="px-6 py-4 text-left">Message</th>
                  <th className="px-6 py-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {sortedInterests.map((interest) => (
                  <tr key={interest._id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <button
                        onClick={() => navigate(`/crops/${interest.cropId}`)}
                        className="text-green-600 hover:underline font-semibold"
                      >
                        {interest.cropName}
                      </button>
                    </td>
                    <td className="px-6 py-4">{interest.ownerName}</td>
                    <td className="px-6 py-4">
                      {interest.quantity} {interest.unit}
                    </td>

                    <td className="px-6 py-4 max-w-xs">
                      <p className="truncate" title={interest.message}>
                        {interest.message}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(interest.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default MyInterests;
