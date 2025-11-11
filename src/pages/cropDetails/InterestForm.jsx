import React from "react";
import { BiCalculator } from "react-icons/bi";

const InterestForm = ({ crop }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
        আগ্রহ প্রকাশ করুন
      </h2>

      {/* interest form */}

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body space-y-6">
          {/* quentity */}
          <div className="form-control">
            <label className="label">
              <span className="label-style">পরিমাণ</span>
            </label>
            <input
              type="number"
              min="1"
              //   max={crop.quentity}
              //   value = {quentity}
              //   inChange ={(e)=>setQuantity(Number(e.target.value))}
              //   placeholder={`সর্বোচ্চ ${crop.quantity} ${crop.unit}`}
              placeholder="Maximum Quentity"
              className="input-style"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              উপলব্ধ:
              {/* {crop.quantity} {crop.unit} */}
            </p>
          </div>

          {/*  text area*/}
          <div className="form-control">
            <label className="label-style">
              <span>বার্তা</span>
            </label>
            <textarea
              //   value={message}
              //   onChange={(e)=>setMessage(e.target.value)}
              rows="4"
              required
              placeholder="মালিককে আপনার বার্তা লিখুন..."
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
                <p className="text-2xl font-bold text-green-600">
                  {/* $ {totalPrice.toLocaleString()} */}$ 200
                </p>
                <p className="text-lg font-bold text-green-600">
                  {/* ({quantity} {crop.unit} × ৳{crop.pricePerUnit}) */}$200 *
                  3
                </p>
              </div>
            </div>
          </div>
          {/* submit btn */}
          <button
            className="btn btn-style"
            type="submit"
          >
            {/* disabled={submitting} */}
            আগ্রহ পাঠান
          </button>
        </form>
      </div>
      {/* Confirmation Modal */}
      {/* {showModal && (
        <ConfirmationModal
          title="আগ্রহ নিশ্চিত করুন"
          message={`আপনি কি ${quantity} ${crop.unit} ${crop.name} এর জন্য ৳${totalPrice} মূল্যে আগ্রহ পাঠাতে চান?`}
          onConfirm={confirmSubmit}
          onCancel={() => setShowModal(false)}
          confirmText="হ্যাঁ, পাঠান"
          cancelText="না"
          loading={submitting}
        />
      )} */}
    </div>
  );
};

export default InterestForm;
