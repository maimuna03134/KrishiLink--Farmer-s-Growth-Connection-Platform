import React, { use, useEffect, useState } from "react";
import { BiCalculator, BiSend } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { FiAlertCircle } from "react-icons/fi";
import ConfirmationModal from "./ConfirmationModal";

const InterestForm = ({ crop }) => {
    const { user } = use(AuthContext);

    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');
    const [showModel, setShowModel] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [alreadyInterested, setAlreadyInterested] = useState(false);
    
    useEffect(() => {
        if (crop.interests && user) {
            setAlreadyInterested(crop.interests.some(i=>i.userEmail === user.email));
        }
    }, [crop, user])
    
    const totalPrice = quantity * crop.pricePerUnit;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (quantity < 1) return toast.error("Quantity cannot be less than 1");
        if (quantity > crop.quantity) return toast.error("You cannot order more than then available quantity");
        setShowModel(true);
    };
        const confirmSubmit = () => {
            setSubmitted(true);

            fetch('http://localhost:3000/crops', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
      cropId: crop._id,
      userEmail: user.email,
      userName: user.name,
      quantity,
      message,
      status: 'pending'
    })
            }).then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to send interest');
                } return res.json();
            }).then((data) => {
                console.log(data)
                toast.success('Interest sent successfully!');
                setShowModel(false);
      setQuantity(1);
      setMessage('');
    //   onInterestSubmitted();

            })
                .catch(err => {
                toast.error(err.message)
                })
                .finally(() => {
                setSubmitted(false)
            })
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
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
        Express Your Interest
      </h2>

      {/* interest form */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body space-y-6">
          {/* quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-style">Quantity ({crop.unit})</span>
            </label>
            <input
              type="number"
              min="1"
              max={crop.quantity}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              placeholder={`Maximum ${crop.quantity} ${crop.unit}`}
              className="input-style"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Available: {crop.quantity} {crop.unit}
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
                  ({quantity} {crop.unit} × $ {crop.pricePerUnit})
                </p>
              </div>
            </div>
          </div>
          {/* submit btn */}
          <button disabled={submitted} className="btn btn-style" type="submit">
            {submitted ? (
              <>Sending..</>
            ) : (
              <>
                <BiSend className="w-5 h-5" /> Send Interest
              </>
            )}
            Send Interest
          </button>
        </form>
      </div>
      {/* Confirmation Modal */}
      {showModel && (
        <ConfirmationModal
          title="Confirm Interest"
          message={`Do you want to send interest for ${quantity} ${crop.unit} of ${crop.name} at a price of ${totalPrice} ?`}
          onConfirm={confirmSubmit}
          onCancel={() => setShowModel(false)}
          confirmText="Yeah, Send"
          cancelText="No"
          loading={submitted}
        />
      )}
    </div>
  );
};

export default InterestForm;
