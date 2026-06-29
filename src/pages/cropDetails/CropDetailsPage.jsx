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
import { Link, useParams } from "react-router";

const CropDetailsPage = ({ crop: propCrop }) => {
  // console.log(propCrop);
  const { id } = useParams();
  const [crop, setCrop] = useState(propCrop || null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(!crop);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (id) {
      fetchCropDetails();
      setSelectedImage(0);
    }
  }, [id]);

  useEffect(() => {
    if (crop?.type) {
      fetchRelatedProducts();
    }
  }, [crop, id]);

  const fetchCropDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/crops/${id}`);
      const data = await response.json();
      if (data.success) {
        setCrop(data.data || data.result);

        setSelectedImage(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        `${import.meta.env.VITE_API_URL}/crops?category=${crop.type}&limit=4`
      );
      const data = await response.json();
      if (data.success && data.data) {

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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600 border-solid mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading crop details...</p>
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

  const averageRating = crop.reviews?.length > 0
    ? crop.reviews.reduce((acc, rev) => acc + rev.rating, 0) / crop.reviews.length
    : 0;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<BsStarHalf key="half" className="text-yellow-400" />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<BiStar key={i} className="text-gray-300" />);
    }
    return stars;
  };

  const cropImages = crop.images && crop.images.length > 0
    ? crop.images
    : [crop.image, crop.image, crop.image, crop.image];

  const specifications = crop.specifications || {
    quality: "A",
    organic: true,
    certified: true,
    shelfLife: "60 days",
    harvestDate: "Recent Harvest"
  };

  const reviews = crop.reviews || [];


  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumb */}
        <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Link to="/" className="hover:text-green-600">Home</Link>
              <span>/</span>
              <Link to="/all-crops" className="hover:text-green-600">All Crops</Link>
              <span>/</span>
              <Link to={`/all-crops?category=${crop.type}`} className="hover:text-green-600">
                {crop.type}
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-gray-100 font-medium">{crop.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Main Product Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
              {/* Left: Image Gallery */}
              <div>
                {/* Main Image */}
                <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={cropImages[selectedImage]}
                    alt={crop.name}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="bg-white/90 backdrop-blur p-3 rounded-full hover:bg-white transition shadow-lg">
                      <BiHeart className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="bg-white/90 backdrop-blur p-3 rounded-full hover:bg-white transition shadow-lg">
                      <BiShare className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {crop.type}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-3">
                  {cropImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`rounded-lg overflow-hidden border-2 transition ${selectedImage === idx
                        ? "border-green-500 ring-2 ring-green-200"
                        : "border-gray-200 hover:border-gray-300"
                        }`}
                    >
                      <img
                        src={img}
                        alt={`${crop.name} ${idx + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Quality Badges */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  {specifications.organic && (
                    <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <BiLeaf className="w-4 h-4" /> Organic
                    </span>
                  )}
                  {specifications.certified && (
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <BiShield className="w-4 h-4" /> Certified
                    </span>
                  )}
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <BiAward className="w-4 h-4" /> Premium
                  </span>
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {crop.name}
                </h1>

                {/* Rating */}
                {reviews.length > 0 && (
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1">
                      {renderStars(averageRating)}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {averageRating.toFixed(1)} ({reviews.length} reviews)
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="bg-linear-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900  rounded-2xl p-6 mb-6 border-2 border-green-200 dark:border-gray-700">
                  <p className="text-sm text-green-700 mb-2 font-semibold uppercase tracking-wide">
                    Price per unit
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-green-600">
                      ৳{crop.pricePerUnit}
                    </span>
                    <span className="text-2xl text-green-700">
                      /{crop.unit}
                    </span>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <BiPackage className="w-5 h-5 text-green-600" />
                      <span className="text-xs font-semibold uppercase">Available</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {crop.quantity} {crop.unit}
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <BiMapPin className="w-5 h-5 text-green-600" />
                      <span className="text-xs font-semibold uppercase">Location</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {crop.location}
                    </p>
                  </div>
                </div>

                {/* Owner Info */}
                <div className="bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-5 mb-6 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <BiUser className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 uppercase tracking-wide">Crop Owner</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {crop.owner.ownerName}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <BiMailSend className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {crop.owner.ownerEmail}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className=" mt-auto">
                  <a href="#interest-section"
                    className="flex-1">
                    <button

                      className="w-full bg-green-600 dark:bg-gray-700 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl">
                      Express Interest
                    </button>
                  </a>

                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="text-center py-3 bg-green-50 dark:bg-gray-800 rounded-lg">
                    <BiCheckCircle className="w-6 h-6 text-green-600 dark:text-gray-200 mx-auto mb-1" />
                    <p className="text-xs text-green-700 dark:text-gray-200  font-semibold">Verified</p>
                  </div>
                  <div className="text-center py-3 bg-green-50 dark:bg-gray-800 rounded-lg">
                    <BiShield className="w-6 h-6 text-green-600 dark:text-gray-200 mx-auto mb-1" />
                    <p className="text-xs text-green-700 dark:text-gray-200 font-semibold">Safe</p>
                  </div>
                  <div className="text-center py-3 bg-green-50 dark:bg-gray-800 rounded-lg">
                    <BiTrendingUp className="w-6 h-6 text-green-600 dark:text-gray-200 mx-auto mb-1" />
                    <p className="text-xs text-green-700 dark:text-gray-200 font-semibold">Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8">
            {/* Tab Headers */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex overflow-x-auto">
                {["overview", "specifications", ...(reviews.length > 0 ? ["reviews"] : [])].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-4 font-semibold whitespace-nowrap transition ${activeTab === tab
                      ? "text-green-600 border-b-2 border-green-600 bg-green-50 dark:bg-green-900/20"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                  >
                    {tab === "overview" && "Overview & Description"}
                    {tab === "specifications" && "Key Information & Specs"}
                    {tab === "reviews" && `Reviews (${reviews.length})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <BsEye className="w-6 h-6 text-green-600" />
                    Detailed Description
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                    {crop.description}
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Why Choose This Product?</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <BiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <span>Premium quality with organic certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <span>Fresh harvest from trusted local farmers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <span>Competitive pricing with bulk discounts available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                        <span>Verified quality and secure transactions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Technical Specifications
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Crop Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-2">
                          <span className="text-gray-600 dark:text-gray-400">Quality Grade</span>
                          <span className="font-semibold text-gray-900 dark:text-gray-100">{specifications.quality}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-2">
                          <span className="text-gray-600 dark:text-gray-400">Organic</span>
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {specifications.organic ? "Yes" : "No"}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-2">
                          <span className="text-gray-600 dark:text-gray-400">Certified</span>
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {specifications.certified ? "Yes" : "No"}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-2">
                          <span className="text-gray-600 dark:text-gray-400">Shelf Life</span>
                          <span className="font-semibold text-gray-900 dark:text-gray-100">{specifications.shelfLife}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Harvest Date</span>
                          <span className="font-semibold text-gray-900 dark:text-gray-100">{specifications.harvestDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Storage & Handling</h3>
                      <div className="space-y-3 text-gray-700 dark:text-gray-300">
                        <p>• Store in a cool, dry place</p>
                        <p>• Keep away from direct sunlight</p>
                        <p>• Proper ventilation required</p>
                        <p>• Handle with care to avoid damage</p>
                        <p>• Check regularly for quality</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && reviews.length > 0 && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      Customer Reviews & Ratings
                    </h2>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          {averageRating.toFixed(1)}
                        </div>
                        <div className="flex gap-1 justify-center mb-2">
                          {renderStars(averageRating)}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Based on {reviews.length} reviews
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        {[5, 4, 3, 2, 1].map((star) => {
                          const count = reviews.filter(r => r.rating === star).length;
                          const percentage = (count / reviews.length) * 100;
                          return (
                            <div key={star} className="flex items-center gap-3 mb-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-12">{star} star</span>
                              <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                <div
                                  className="bg-yellow-400 h-2 rounded-full"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-8">{count}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review._id} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-gray-100">{review.userName}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{review.date}</p>
                          </div>
                          <div className="flex gap-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden px-4 py-4">
            <div className=" mb-3">
              <h2 className=" text-2xl font-bold text-gray-900 dark:text-gray-100">
                You may also like
              </h2>
            </div>

            {relatedLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden animate-pulse">
                    <div className="h-48 bg-gray-200 dark:bg-gray-600"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-2/3 mb-3"></div>
                      <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : relatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((product) => (
                  <Link
                    key={product._id}
                    to={`/crop-details/${product._id}`}
                    className="group bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <button
                          onClick={(e) => e.preventDefault()}
                          className="bg-white/90 backdrop-blur p-2 rounded-full hover:bg-white transition shadow-lg"
                        >
                          <BiHeart className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-green-600 transition">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-1">
                        📍 {product.location}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-green-600">
                          ৳{product.pricePerUnit}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">/{product.unit}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <p>No related products found</p>
              </div>
            )}
            <div className="flex justify-end items-center mt-3">
              <Link
                to={`/all-crops?category=${crop.type}`}
                className=" text-green-600 hover:text-green-700 font-semibold flex items-center gap-1 transition"
              >
                See More
                <BiTrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>

  );
};

export default CropDetailsPage;





