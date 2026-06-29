import React, { use, useEffect, useState } from "react";
import MyContainer from "../../components/myContainer/MyContainer";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { CiLock } from "react-icons/ci";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";

const MyInterests = () => {
  const { user } = use(AuthContext);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("status");

  const fetchMyInterests = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/interests/${user.email}`
      );

      const data = await res.json();
      if (data.success) {
        setInterests(data.data);
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
        color: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300",
      },
      accepted: {
        icon: <BiCheckCircle className="w-4 h-4" />,
        label: "Accepted",
        color: "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300",
      },
      rejected: {
        icon: <BiXCircle className="w-4 h-4" />,
        label: "Rejected",
        color: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300",
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
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8 min-h-screen">
      <MyContainer>
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-green-800 dark:text-green-400">My Interests</h1>
          <div className="flex items-center gap-2">
            <label className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
            >
              <option value="status">Status</option>
              <option value="cropName">Crop Name</option>
            </select>
          </div>
        </div>

        {interests.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              You haven't expressed interest in any crops yet
            </p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-50 dark:bg-green-900/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Crop Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Owner</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Quantity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Message</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Status</th>
                </tr>
              </thead>
              <tbody>
                {sortedInterests.map((interest) => (
                  <tr key={interest._id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <button className="text-green-600 dark:text-green-400 hover:underline font-semibold">
                        {interest.cropDetails?.name || "N/A"}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {interest.cropDetails?.owner?.ownerName || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {interest.quantity} {interest.unit}
                    </td>
                    <td className="px-6 py-4 max-w-xs text-gray-600 dark:text-gray-400">
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
