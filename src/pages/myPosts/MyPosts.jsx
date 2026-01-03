import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import MyContainer from "../../components/myContainer/MyContainer";
import { AuthContext } from "../../context/AuthContext";
import { BiEdit, BiTrash } from "react-icons/bi";

const MyPosts = () => {
  const { user } = use(AuthContext);
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCrop, setEditingCrop] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetchMyCropPost();
    }
  }, [user]);

  const fetchMyCropPost = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/my-crops/${user.email}`
      );

      const data = await res.json();

      if (data.success) {
        setCrops(data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load crops");
    } finally {
      setLoading(false);
    }
  };
  const handleEdit = (crop) => {
    setEditingCrop(crop);
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();

    if (!id) {
      toast.error("Crop ID is missing!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/crops/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(editingCrop),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Crop updated successfully!");
        setEditingCrop(null);
        fetchMyCropPost();
      } else {
        toast.error(data.message || "Failed to update crop");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update crop");
    }
  };


  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this crop?")) {
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:5000/crops/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Crop deleted successfully!");
        fetchMyCropPost();
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete crop");
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
    <div className="bg-gray-100 py-8">
      <MyContainer>
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
          My Posts
        </h1>

        {crops && crops.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              You haven't posted any crops yet
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-6 py-4 text-left">Image</th>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Type</th>
                  <th className="px-6 py-4 text-left">Price</th>
                  <th className="px-6 py-4 text-left">Quantity</th>
                  <th className="px-6 py-4 text-left">Location</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                  {crops && crops.map((crop) => (
                  <tr key={crop._id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <img
                        src={crop.image}
                        alt={crop.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold">{crop.name}</td>
                    <td className="px-6 py-4">{crop.type}</td>
                    <td className="px-6 py-4">
                      ${crop.pricePerUnit}/{crop.unit}
                    </td>
                    <td className="px-6 py-4">
                      {crop.quantity} {crop.unit}
                    </td>
                    <td className="px-6 py-4">{crop.location}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(crop)}
                          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                          <BiEdit className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handleDelete(crop._id)}
                          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                        >
                          <BiTrash className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Edit Modal */}
        {editingCrop && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">Edit Crop</h2>

              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    value={editingCrop.name}
                    onChange={(e) =>
                      setEditingCrop({ ...editingCrop, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Price per unit
                  </label>
                  <input
                    type="number"
                    value={editingCrop.pricePerUnit}
                    onChange={(e) =>
                      setEditingCrop({
                        ...editingCrop,
                        pricePerUnit: Number(e.target.value),
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Quantity</label>
                  <input
                    type="number"
                    value={editingCrop.quantity}
                    onChange={(e) =>
                      setEditingCrop({
                        ...editingCrop,
                        quantity: Number(e.target.value),
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Location</label>
                  <input
                    type="text"
                    value={editingCrop.location}
                    onChange={(e) =>
                      setEditingCrop({
                        ...editingCrop,
                        location: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Description
                  </label>
                  <textarea
                    value={editingCrop.description}
                    onChange={(e) =>
                      setEditingCrop({
                        ...editingCrop,
                        description: e.target.value,
                      })
                    }
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={(e) => handleUpdate(e, editingCrop._id)}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                >
                  Update
                </button>
                <button
                  onClick={() => setEditingCrop(null)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default MyPosts;
