import React, { use, useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { BiUpload } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import MyContainer from "../../components/myContainer/MyContainer";

const AddCrop = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "Vegetable",
    pricePerUnit: "",
    unit: "kg",
    quantity: "",
    description: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Crop name is required");
      return false;
    }
    if (!formData.pricePerUnit || parseFloat(formData.pricePerUnit) <= 0) {
      toast.error("Price per unit must be greater than 0");
      return false;
    }
    if (!formData.quantity || parseFloat(formData.quantity) <= 0) {
      toast.error("Quantity must be greater than 0");
      return false;
    }
    if (!formData.description.trim()) {
      toast.error("Description is required");
      return false;
    }
    if (!formData.location.trim()) {
      toast.error("Location is required");
      return false;
    }
    if (!formData.image.trim()) {
      toast.error("Image URL is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const cropData = {
      _id: `crop_${Date.now()}`, 
      name: formData.name,
      type: formData.type,
      pricePerUnit: parseFloat(formData.pricePerUnit),
      unit: formData.unit,
      quantity: parseFloat(formData.quantity),
      description: formData.description,
      location: formData.location,
      image: formData.image,
      owner: {
        ownerEmail: user.email,
        ownerName: user.displayName || user.email.split("@")[0],
      },
      interests: [],
    };

    try {
      const res = await fetch("http://localhost:3000/add-crop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cropData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add crop");
      }

      toast.success("Crop added successfully!");
      navigate("/my-posts");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to add crop");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <MyContainer className={"px-4 sm:px-6 lg:px-8"}>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Add New Crop
            </h1>
            <p className="text-gray-600">
              Fill in the details about your crop to list it on the platform
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Crop Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Crop Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Tomato, Rice, Wheat"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Crop Type and Unit */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Crop Type *
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option>Vegetable</option>
                    <option>Fruit</option>
                    <option>Grain</option>
                    <option>Spice</option>
                    <option>Legume</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Unit *
                  </label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option>kg</option>
                    <option>ton</option>
                    <option>bag</option>
                    <option>liter</option>
                    <option>bunch</option>
                  </select>
                </div>
              </div>

              {/* Price and Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price per Unit ($) *
                  </label>
                  <input
                    type="number"
                    name="pricePerUnit"
                    value={formData.pricePerUnit}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Estimated Quantity *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Bogura, Dhaka, Chittagong"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your crop, farming methods, quality, etc."
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  required
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Image URL *
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/crop.jpg"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Paste image URL from image hosting service (imgbb, etc.)
                </p>
              </div>

              {/* Image Preview */}
              {formData.image && (
                <div className="border-2 border-dashed border-green-300 rounded-lg p-4 bg-green-50">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="max-h-48 mx-auto rounded-lg object-cover"
                  />
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <BiUpload className="w-5 h-5" />
                  {loading ? "Adding Crop..." : "Add Crop"}
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default AddCrop;
