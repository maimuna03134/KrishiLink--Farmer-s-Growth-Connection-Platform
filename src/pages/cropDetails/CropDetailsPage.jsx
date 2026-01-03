import React, { useEffect, useState } from "react";
import {
    BiAward,
    BiCheckCircle,
    BiLeaf,
    BiMailSend,
    BiMapPin,
    BiPackage,
    BiShield,
    BiTrendingUp,
    BiUser,
    BiStar,
    BiHeart,
    BiShare,
} from "react-icons/bi";
import { BsEye, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import MyContainer from "../../components/myContainer/MyContainer";
import toast from "react-hot-toast";

const CropDetailsPage = ({ crop }) => {
    console.log(crop);
     
  const [crops, setCrops] = useState(crop || null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(!crop);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
        if (!crops && id) {
            fetchCropDetails();
        }
  }, [id, crops]);
  
  useEffect(() => {
    if (crops?.type) {
      fetchRelatedProducts();
    }
  }, [crops]);
    
  const fetchCropDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/crops/${id}`);
      const data = await response.json();
      if (data.success) {
        setCrops(data.result);
      }
    } catch (error) {
      console.error("Error fetching crop details:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async () => {
        setRelatedLoading(true);
        try {
            const response = await fetch(
                `http://localhost:5000/crops?category=${crop.type}&limit=4`
            );
            const data = await response.json();
            if (data.success) {
                
                const filtered = data.data
                    .filter(item => item._id !== crop._id)
                    .slice(0, 3);
                setRelatedProducts(filtered);
            }
        } catch (error) {
            toast.error("Error fetching related products:", error);
        } finally {
            setRelatedLoading(false);
        }
    };

  if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600 border-solid mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Loading crop details...</p>
                </div>
            </div>
        );
    }

  if (!crop) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Crop not found</h2>
          <Link to="/all-crops">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              Back to All Crops
            </button>
          </Link>
        </div>
      </div>
    );
  }
  
    return (
        <>
        <h2>details</h2>
        </>
        
    );
};

export default CropDetailsPage;





