import React, { use, useEffect, useState } from "react";
import { BiCalculator, BiSend } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { FiAlertCircle } from "react-icons/fi";
import ConfirmationModal from "./ConfirmationModal";
import MyContainer from "../../components/myContainer/MyContainer";
import { useNavigate } from "react-router";

const InterestForm = ({ crop }) => {
  const { user } = use(AuthContext);

  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alreadyInterested, setAlreadyInterested] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (crop && user) {
      const isOwnerCheck = crop.owner?.ownerEmail === user.email;
      setIsOwner(isOwnerCheck);

      if (crop?.interests && Array.isArray(crop.interests)) {
        const alreadySent = crop.interests.some(
          (interest) => interest.userEmail === user.email
        );
        setAlreadyInterested(alreadySent);
      }
    }
  }, [crop, user]);

  const totalPrice = quantity * crop?.pricePerUnit;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (isOwner) {
      toast.error("You cannot send interest on your own crop");
      return;
    }

    if (quantity < 1) {
      return toast.error("Quantity cannot be less than 1");
    }

    if (quantity > crop?.quantity) {
      return toast.error("You cannot order more than then available quantity");
    }

    if (!message.trim()) {
      return toast.error("Please write a message");
    }

    setShowModel(true);
  };

  const interest = {
    cropId: crop?._id,
    userEmail: user.email,
    userName: user.displayName || user.email.split("@")[0],
    quantity: parseInt(quantity),
    message,
    status: "pending",
  };

  const confirmSubmit = () => {
    setSubmitted(true);

    fetch(
      `https://farmers-growth-connection-platform.vercel.app/crops/${crop._id}/interests`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(interest),
      }
    )
      .then((res) => {
        if (!res.ok) {
          toast.err("Failed to send interest");
        }
        return res.json();
      })
      .then(() => {
        // console.log(data);
        toast.success("Interest sent successfully!");
        setShowModel(false);
        setQuantity(1);
        setMessage("");
        setAlreadyInterested(true);
        navigate("/my-interests");
      })
      .catch((err) => {
        toast.error(err.message || "Failed to send interest");
      })
      .finally(() => {
        setSubmitted(false);
      });
  };

  if (!user) {
    return (
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <FiAlertCircle className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-1">
              Login Required
            </h3>
            <p className="text-blue-700">
              Please login to express interest in this crop
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isOwner) {
    return (
      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <FiAlertCircle className="w-6 h-6 text-purple-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-1">
              Your Crop
            </h3>
            <p className="text-purple-700">
              This is your own crop. You cannot send interest on your own crops.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (alreadyInterested) {
    return (
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <FiAlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-1">
              You have already expressed interest
            </h3>
            <p className="text-yellow-700">
              The Owner will review your request
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <MyContainer
      className={
        "bg-linear-to-t from-white to-green-100 rounded-xl shadow-2xl px-20 py-10 mb-8"
      }
    >
      <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
        Express Your Interest
      </h2>

      {/* interest form */}
      <div className="card bg-linear-to-t from-green-100 to-white w-full max-w-sm shrink-0 ">
        <form onSubmit={handleSubmit} className="card-body space-y-4">
          {/* quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-style">Quantity ({crop?.unit})</span>
            </label>
            <input
              type="number"
              min="1"
              max={crop?.quantity}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              placeholder={`Maximum ${crop?.quantity} ${crop?.unit}`}
              className="input-style"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Available: {crop?.quantity} {crop?.unit}
            </p>
          </div>

          {/*  text area*/}
          <div className="form-control">
            <label className="label-style">
              <span>Message</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
              placeholder="Write your message to the owner..."
              className="input-style"
            />
          </div>

          {/* total price count */}
          <div className="bg--gradient-to-r from-green-50 to-green-100 rounded-lg p-6 ">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <BiCalculator className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-gray-700">
                  Total Price:
                </span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold text-green-600">
                  $ {totalPrice.toLocaleString()}
                </p>
                <p className="text-md font-semibold text-green-600">
                  ({quantity} {crop?.unit} × $ {crop?.pricePerUnit})
                </p>
              </div>
            </div>
          </div>
          {/* submit btn */}
          <button disabled={submitted} className="btn btn-style" type="submit">
            <BiSend className="w-5 h-5" />
            {submitted ? "Sending..." : "Send Interest"}
          </button>
        </form>
      </div>
      {/* Confirmation Modal */}
      {showModel && (
        <ConfirmationModal
          title="Confirm Interest"
          message={`Do you want to send interest for ${quantity} ${crop?.unit} of ${crop?.name} at a price of ${totalPrice} ?`}
          onConfirm={confirmSubmit}
          onCancel={() => setShowModel(false)}
          confirmText="Yeah, Send"
          cancelText="No"
          loading={submitted}
        />
      )}
    </MyContainer>
  );
};

export default InterestForm;
