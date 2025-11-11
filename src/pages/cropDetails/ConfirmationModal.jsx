import React from "react";
import { BiX } from "react-icons/bi";

const ConfirmationModal = ({
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
        <button onClick={onCancel} disabled={loading}>
          <BiX className="w-6 h-6" />
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-600 mb-8">{message}</p>
          <div className="flex gap-4">
            <button
              onClick={onConfirm}
              disabled={loading}
              className="flex-1 btn btn-style"
            >
              {loading ? "Please wait..." : confirmText}
            </button>
            <button
              onClick={onCancel}
              disabled={loading}
              className="flex-1 btn border-2 border-red-500 bg-red-100 hover:bg-red-500
              text-red-800 hover:text-white
              font-semibold rounded-full"
            >
              {cancelText}
            </button>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
