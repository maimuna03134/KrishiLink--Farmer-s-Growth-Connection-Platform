import React, { use, useState } from 'react';
import toast from 'react-hot-toast';
import { BiCheckCircle, BiUserPlus, BiXCircle } from 'react-icons/bi';
import { CiLock } from 'react-icons/ci';
import { FaUserShield } from 'react-icons/fa';
import ConfirmationModal from './ConfirmationModal';
import { AuthContext } from '../../context/AuthContext';

const ReceivedInterests = ({ crop }) => {
  const { user } = use(AuthContext);
  const [updatingId, setUpdatingId] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [localCrop, setLocalCrop] = useState(crop);
  
  const isOwner = user && localCrop.owner?.ownerEmail === user.email;

  if (!isOwner) {
    return null;
  }

  const handleAcceptReject = (interest, newStatus) => {
    setModalData({
      interest,
      newStatus,
      title: newStatus === "accepted" ? "Accept Interest" : "Reject Interest",
      message:
        newStatus === "accepted"
          ? `Do you want to accept ${interest.userName}'s request for ${interest.quantity} ${crop.unit}?`
          : `Do you want to reject ${interest.userName}'s request?`,
    });
  };

  const confirmUpdate = async () => {
    const { interest, newStatus } = modalData;
    try {
      setUpdatingId(interest._id);

      const statusRes = await fetch(
        `http://localhost:3000/crops/${localCrop._id}/interests/${interest._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

    

      if (!statusRes.ok) {
        toast.error("Failed to update interest status");
        return;
      } 

      let newQuantity = localCrop.quantity;

      if (newStatus === "accepted") {
        newQuantity = localCrop.quantity - interest.quantity;

        const quantityRes = await fetch(
          `http://localhost:3000/crops/${localCrop._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...localCrop,
              quantity: newQuantity,
            }),
          }
        );

        if (!quantityRes.ok) {
          toast.error("Failed to update crop quantity");
          return;
        }

        toast.success(
          `Interest accepted! Crop quantity reduced by ${interest.quantity} ${localCrop.unit}`
        );
      } else {
        toast.success("Interest rejected successfully!");
      }

      setLocalCrop((prevCrop) => ({
        ...prevCrop,
        quantity: newQuantity,
        interests: prevCrop.interests.map((int) =>
          int._id === interest._id ? { ...int, status: newStatus } : int
        ),
      }));

  
     setModalData(null);
    //  setTimeout(() => window.location.reload(), 1000);


    
      
    } catch (err) {
      toast.error(err.message || "Failed to update interest");
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusBadge = (status) => {
    const map = {
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
    const item = map[status];
    return <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${item.color}`}
    >
      {item.icon}
      {item.label}
    </span>
  }

if (!crop) {
  return (
    <div className="text-center py-8 text-gray-500">
      Loading crop details...
    </div>
  );
}
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
          <FaUserShield className="w-6 h-6" /> Received Interests
        </h2>

        <div className="mb-4 bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Available Quantity:</strong> {localCrop.quantity}{" "}
            {localCrop.unit}
          </p>
        </div>

        {localCrop.interests && localCrop.interests.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-green-50 border-b-2 border-green-200">
                  <th className="thead-th">Buyer Name </th>
                  <th className="thead-th">Quantity </th>
                  <th className="thead-th">Message </th>
                  <th className="thead-th">Status </th>
                  <th className="thead-th">Action </th>
                </tr>
              </thead>
              <tbody>
                {localCrop.interests.map((interest, i) => (
                  <tr
                    key={interest._id}
                    className={`border-b hover:bg-gray-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-semibold">
                          {interest.userName.charAt(0)}
                        </div>
                        <span className="font-medium">{interest.userName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {interest.quantity} {crop.unit}
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <p className="truncate" title={interest.message}>
                        {interest.message}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(interest.status)}
                    </td>

                    <td className="px-6 py-4">
                      {interest.status === "pending" ? (
                        <div className="flex gap-2">
                          <div className="flex gap-2">
                            <button
                              onClick={() =>
                                handleAcceptReject(interest, "accepted")
                              }
                              disabled={
                                interest.status !== "pending" ||
                                updatingId === interest._id
                              }
                              className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-sm disabled:opacity-50"
                            >
                              <BiCheckCircle className="w-4 h-4" /> Accept
                            </button>
                            <button
                              onClick={() =>
                                handleAcceptReject(interest, "rejected")
                              }
                              disabled={
                                interest.status !== "pending" ||
                                updatingId === interest._id
                              }
                              className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm disabled:opacity-50"
                            >
                              <BiXCircle className="w-4 h-4" /> Reject
                            </button>
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm">
                          Action Completed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16">
            <BiUserPlus className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No interests received yet</p>
            <p className="text-gray-400 text-sm mt-2">
              Buyers will appear here when they show interest
            </p>
          </div>
        )}
      </div>

      {modalData && (
        <ConfirmationModal
          title={modalData.title}
          message={modalData.message}
          onConfirm={confirmUpdate}
          onCancel={() => setModalData(null)}
          confirmText="Yeah"
          loading={updatingId !== null}
        />
      )}
    </>
  );
};

export default ReceivedInterests;