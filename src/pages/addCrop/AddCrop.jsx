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
      const res = await fetch(
        "https://farmers-growth-connection-platform.vercel.app/add-crop",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cropData),
        }
      );

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-100 py-8">
      <div className="relative h-96 md:h-[520px] overflow-hidden rounded-b-3xl shadow-2xl">
        <img
          src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8yOV9waG90b19vZl9hX3Byb3VkX2Zhcm1lcl9zdGFuZHNfaW5fYV92aWJyYW50X19kYmUwNDVjMC04ZjIyLTQyZDQtOGU1Zi1hYWNhMGM0YWJiM2ZfMS5qcGc.jpg"
          alt="Fresh farm crops"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Farm-Fresh Today <br />
              <span className="text-green-400">At Your Door Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl drop-shadow">
              List your harvest, set your price, and sell straight to buyers –
              no middlemen.
            </p>
          </div>
        </div>
      </div>
      <MyContainer className={"px-4 sm:px-6 lg:px-8 mt-10"}>
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

          {/* Form filed */}
          <div className="bg-green-50 rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Crop Name */}
              <div>
                <label className="label-style">Crop Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Tomato, Rice, Wheat"
                  className="input-style"
                  required
                />
              </div>

              {/* Crop Type and Unit */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-style">Crop Type *</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="input-style"
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
                  <label className="label-style">Unit *</label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="input-style"
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
                  <label className="label-style">Price per Unit ($) *</label>
                  <input
                    type="number"
                    name="pricePerUnit"
                    value={formData.pricePerUnit}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="input-style"
                    required
                  />
                </div>

                <div>
                  <label className="label-style">Estimated Quantity *</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                    className="input-style"
                    required
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="label-style">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Bogura, Dhaka, Chittagong"
                  className="input-style"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="label-style">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your crop, farming methods, quality, etc."
                  rows="5"
                  className="input-style"
                  required
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="label-style">Image URL *</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/crop.jpg"
                    className="flex-1 input-style"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Paste image URL from image hosting service (imgbb, etc.)
                </p>
              </div>

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
