// import React, { useState } from "react";
// import {
//     BiAward,
//     BiCheckCircle,
//     BiLeaf,
//     BiMailSend,
//     BiMapPin,
//     BiPackage,
//     BiShield,
//     BiTrendingUp,
//     BiUser,
//     BiStar,
//     BiHeart,
//     BiShare,
// } from "react-icons/bi";
// import { BsEye, BsStarFill, BsStarHalf } from "react-icons/bs";
// import { FaDollarSign } from "react-icons/fa";
// import { IoMdArrowBack } from "react-icons/io";
// import MyContainer from "../../components/myContainer/MyContainer";

// // Sample data - replace with your actual data
// // const sampleCrop = {
// //     "_id": "crop006",
// //     "name": "Onion",
// //     "type": "Vegetable",
// //     "pricePerUnit": 60,
// //     "unit": "kg",
// //     "quantity": 800,
// //     "description": "Red onion. Strong and spicy flavor. Essential for cooking. Can be stored for long.",
// //     "location": "Pabna",
// //     "image": "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600",
// //     "images": [
// //         "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600",
// //         "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600",
// //         "https://images.unsplash.com/photo-1587980147563-b9d0fc3c0d3f?w=600",
// //         "https://images.unsplash.com/photo-1508313880080-c4bef43d8e66?w=600"
// //     ],
// //     "specifications": {
// //         "quality": "Grade A",
// //         "organic": true,
// //         "certified": true,
// //         "shelfLife": "60 days",
// //         "harvestDate": "December 2024"
// //     },
// //     "reviews": [
// //         {
// //             "_id": "rev001",
// //             "userName": "Karim Ahmed",
// //             "rating": 5,
// //             "comment": "Excellent quality onions! Fresh and perfect size. Will buy again.",
// //             "date": "2024-12-15"
// //         },
// //         {
// //             "_id": "rev002",
// //             "userName": "Fatima Begum",
// //             "rating": 4,
// //             "comment": "Good quality but delivery was slightly delayed.",
// //             "date": "2024-12-10"
// //         },
// //         {
// //             "_id": "rev003",
// //             "userName": "Rahman Khan",
// //             "rating": 5,
// //             "comment": "Best onions in the market. Very fresh and reasonable price.",
// //             "date": "2024-12-05"
// //         }
// //     ],
// //     "interests": [
// //         {
// //             "_id": "int005",
// //             "cropId": "crop006",
// //             "userEmail": "buyer5@example.com",
// //             "userName": "Nasrin Akter",
// //             "quantity": 100,
// //             "message": "Need 100 kg onions. What's the price?",
// //             "status": "pending"
// //         }
// //     ],
// //     "owner": {
// //         "ownerEmail": "farmer6@example.com",
// //         "ownerName": "Hasan Mahmud"
// //     }
// // };

// // Related products - same category
// // const relatedProducts = [
// //     {
// //         "_id": "crop001",
// //         "name": "Garlic",
// //         "type": "Vegetable",
// //         "pricePerUnit": 180,
// //         "unit": "kg",
// //         "image": "https://images.unsplash.com/photo-1588679994446-34cd593dcd67?w=400",
// //         "rating": 4.5
// //     },
// //     {
// //         "_id": "crop002",
// //         "name": "Ginger",
// //         "type": "Vegetable",
// //         "pricePerUnit": 120,
// //         "unit": "kg",
// //         "image": "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=400",
// //         "rating": 4.8
// //     },
// //     {
// //         "_id": "crop003",
// //         "name": "Potato",
// //         "type": "Vegetable",
// //         "pricePerUnit": 35,
// //         "unit": "kg",
// //         "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400",
// //         "rating": 4.6
// //     },
// //     {
// //         "_id": "crop004",
// //         "name": "Tomato",
// //         "type": "Vegetable",
// //         "pricePerUnit": 45,
// //         "unit": "kg",
// //         "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
// //         "rating": 4.7
// //     }
// // ];

// const CropDetailsPage = ({ crop }) => {
//     console.log(crop)
//     // const crop = sampleCrop;
//     const [activeTab, setActiveTab] = useState("overview");
//     const [selectedImage, setSelectedImage] = useState(0);
//     const [isOwner, setIsOwner] = useState(false);

//     // Calculate average rating
//     // const averageRating = crop.reviews.reduce((acc, rev) => acc + rev.rating, 0) / crop.reviews.length;

//     const renderStars = (rating) => {
//         const stars = [];
//         const fullStars = Math.floor(rating);
//         const hasHalfStar = rating % 1 !== 0;

//         for (let i = 0; i < fullStars; i++) {
//             stars.push(<BsStarFill key={i} className="text-yellow-400" />);
//         }
//         if (hasHalfStar) {
//             stars.push(<BsStarHalf key="half" className="text-yellow-400" />);
//         }
//         for (let i = stars.length; i < 5; i++) {
//             stars.push(<BiStar key={i} className="text-gray-300" />);
//         }
//         return stars;
//     };

//     return (
//         <>
//         <div className="min-h-screen bg-gray-50">
//             {/* Breadcrumb */}
//             <div className="bg-white border-b">
//                 <MyContainer>
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <a href="/" className="hover:text-green-600">Home</a>
//                         <span>/</span>
//                         <a href="/all-crops" className="hover:text-green-600">All Crops</a>
//                         <span>/</span>
//                         <a href={`{crop.type}`} className="hover:text-green-600">{crop.type}</a>
//                         <span>/</span>
//                         <span className="text-gray-900 font-medium">{crop.name}</span>
//                     </div>
//                 </MyContainer>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 {/* Main Product Section */}
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
//                         {/* Left: Image Gallery */}
//                         <div>
//                             {/* Main Image */}
//                             <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-100">
//                                 <img
//                                     src={crop.images[selectedImage]}
//                                     alt={crop.name}
//                                     className="w-full h-[500px] object-cover"
//                                 />
//                                 <div className="absolute top-4 right-4 flex gap-2">
//                                     <button className="bg-white/90 backdrop-blur p-3 rounded-full hover:bg-white transition shadow-lg">
//                                         <BiHeart className="w-5 h-5 text-gray-700" />
//                                     </button>
//                                     <button className="bg-white/90 backdrop-blur p-3 rounded-full hover:bg-white transition shadow-lg">
//                                         <BiShare className="w-5 h-5 text-gray-700" />
//                                     </button>
//                                 </div>
//                                 <div className="absolute top-4 left-4">
//                                     <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                                         {crop.type}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Thumbnail Images */}
//                             <div className="grid grid-cols-4 gap-3">
//                                 {crop.images.map((img, idx) => (
//                                     <button
//                                         key={idx}
//                                         onClick={() => setSelectedImage(idx)}
//                                         className={`rounded-lg overflow-hidden border-2 transition ${selectedImage === idx
//                                                 ? "border-green-500 ring-2 ring-green-200"
//                                                 : "border-gray-200 hover:border-gray-300"
//                                             }`}
//                                     >
//                                         <img
//                                             src={img}
//                                             alt={`${crop.name} ${idx + 1}`}
//                                             className="w-full h-24 object-cover"
//                                         />
//                                     </button>
//                                 ))}
//                             </div>

//                             {/* Quality Badges */}
//                             <div className="flex gap-2 mt-4">
//                                 <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
//                                     <BiLeaf className="w-4 h-4" /> Organic
//                                 </span>
//                                 <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
//                                     <BiShield className="w-4 h-4" /> Certified
//                                 </span>
//                                 <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
//                                     <BiAward className="w-4 h-4" /> Premium
//                                 </span>
//                             </div>
//                         </div>

//                         {/* Right: Product Info */}
//                         <div className="flex flex-col">
//                             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//                                 {crop.name}
//                             </h1>

//                             {/* Rating */}
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className="flex gap-1">
//                                     {renderStars(averageRating)}
//                                 </div>
//                                 <span className="text-gray-600 font-medium">
//                                     {averageRating.toFixed(1)} ({crop.reviews.length} reviews)
//                                 </span>
//                             </div>

//                             {/* Price */}
//                             <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 mb-6 border-2 border-green-200">
//                                 <p className="text-sm text-green-700 mb-2 font-semibold uppercase tracking-wide">
//                                     Price per unit
//                                 </p>
//                                 <div className="flex items-baseline gap-2">
//                                     <span className="text-5xl font-bold text-green-600">
//                                         ৳{crop.pricePerUnit}
//                                     </span>
//                                     <span className="text-2xl text-green-700">
//                                         /{crop.unit}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Quick Info Grid */}
//                             <div className="grid grid-cols-2 gap-4 mb-6">
//                                 <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
//                                     <div className="flex items-center gap-2 text-gray-600 mb-2">
//                                         <BiPackage className="w-5 h-5 text-green-600" />
//                                         <span className="text-xs font-semibold uppercase">Available</span>
//                                     </div>
//                                     <p className="text-2xl font-bold text-gray-900">
//                                         {crop.quantity} {crop.unit}
//                                     </p>
//                                 </div>

//                                 <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
//                                     <div className="flex items-center gap-2 text-gray-600 mb-2">
//                                         <BiMapPin className="w-5 h-5 text-green-600" />
//                                         <span className="text-xs font-semibold uppercase">Location</span>
//                                     </div>
//                                     <p className="text-2xl font-bold text-gray-900">
//                                         {crop.location}
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Owner Info */}
//                             <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5 mb-6 border border-gray-200">
//                                 <div className="flex items-center gap-4">
//                                     <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
//                                         <BiUser className="w-8 h-8 text-white" />
//                                     </div>
//                                     <div className="flex-1">
//                                         <p className="text-xs text-gray-600 mb-1 uppercase tracking-wide">Crop Owner</p>
//                                         <p className="text-xl font-bold text-gray-900">
//                                             {crop.owner.ownerName}
//                                         </p>
//                                         <div className="flex items-center gap-2 mt-2">
//                                             <BiMailSend className="w-4 h-4 text-gray-600" />
//                                             <span className="text-sm text-gray-600">
//                                                 {crop.owner.ownerEmail}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Action Buttons */}
//                             <div className="flex gap-3 mt-auto">
//                                 <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl">
//                                     Express Interest
//                                 </button>
//                                 <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-xl font-bold transition">
//                                     Contact Seller
//                                 </button>
//                             </div>

//                             {/* Trust Indicators */}
//                             <div className="grid grid-cols-3 gap-3 mt-6">
//                                 <div className="text-center py-3 bg-green-50 rounded-lg">
//                                     <BiCheckCircle className="w-6 h-6 text-green-600 mx-auto mb-1" />
//                                     <p className="text-xs text-green-700 font-semibold">Verified</p>
//                                 </div>
//                                 <div className="text-center py-3 bg-green-50 rounded-lg">
//                                     <BiShield className="w-6 h-6 text-green-600 mx-auto mb-1" />
//                                     <p className="text-xs text-green-700 font-semibold">Safe</p>
//                                 </div>
//                                 <div className="text-center py-3 bg-green-50 rounded-lg">
//                                     <BiTrendingUp className="w-6 h-6 text-green-600 mx-auto mb-1" />
//                                     <p className="text-xs text-green-700 font-semibold">Quality</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Tabs Section */}
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
//                     {/* Tab Headers */}
//                     <div className="border-b border-gray-200">
//                         <div className="flex overflow-x-auto">
//                             {["overview", "specifications", "reviews"].map((tab) => (
//                                 <button
//                                     key={tab}
//                                     onClick={() => setActiveTab(tab)}
//                                     className={`px-8 py-4 font-semibold whitespace-nowrap transition ${activeTab === tab
//                                             ? "text-green-600 border-b-2 border-green-600 bg-green-50"
//                                             : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
//                                         }`}
//                                 >
//                                     {tab === "overview" && "Overview & Description"}
//                                     {tab === "specifications" && "Key Information & Specs"}
//                                     {tab === "reviews" && `Reviews (${crop.reviews.length})`}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Tab Content */}
//                     <div className="p-8">
//                         {activeTab === "overview" && (
//                             <div>
//                                 <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                                     <BsEye className="w-6 h-6 text-green-600" />
//                                     Detailed Description
//                                 </h2>
//                                 <p className="text-gray-600 leading-relaxed text-lg mb-6">
//                                     {crop.description}
//                                 </p>

//                                 <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl">
//                                     <h3 className="font-bold text-gray-900 mb-2">Why Choose This Product?</h3>
//                                     <ul className="space-y-2 text-gray-700">
//                                         <li className="flex items-start gap-2">
//                                             <BiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
//                                             <span>Premium quality with organic certification</span>
//                                         </li>
//                                         <li className="flex items-start gap-2">
//                                             <BiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
//                                             <span>Fresh harvest from trusted local farmers</span>
//                                         </li>
//                                         <li className="flex items-start gap-2">
//                                             <BiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
//                                             <span>Competitive pricing with bulk discounts available</span>
//                                         </li>
//                                         <li className="flex items-start gap-2">
//                                             <BiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
//                                             <span>Verified quality and secure transactions</span>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         )}

//                         {activeTab === "specifications" && (
//                             <div>
//                                 <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                                     Technical Specifications
//                                 </h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                                         <h3 className="font-bold text-gray-900 mb-4">Product Details</h3>
//                                         <div className="space-y-3">
//                                             <div className="flex justify-between border-b border-gray-200 pb-2">
//                                                 <span className="text-gray-600">Quality Grade</span>
//                                                 <span className="font-semibold text-gray-900">{crop.specifications.quality}</span>
//                                             </div>
//                                             <div className="flex justify-between border-b border-gray-200 pb-2">
//                                                 <span className="text-gray-600">Organic</span>
//                                                 <span className="font-semibold text-gray-900">
//                                                     {crop.specifications.organic ? "Yes" : "No"}
//                                                 </span>
//                                             </div>
//                                             <div className="flex justify-between border-b border-gray-200 pb-2">
//                                                 <span className="text-gray-600">Certified</span>
//                                                 <span className="font-semibold text-gray-900">
//                                                     {crop.specifications.certified ? "Yes" : "No"}
//                                                 </span>
//                                             </div>
//                                             <div className="flex justify-between border-b border-gray-200 pb-2">
//                                                 <span className="text-gray-600">Shelf Life</span>
//                                                 <span className="font-semibold text-gray-900">{crop.specifications.shelfLife}</span>
//                                             </div>
//                                             <div className="flex justify-between">
//                                                 <span className="text-gray-600">Harvest Date</span>
//                                                 <span className="font-semibold text-gray-900">{crop.specifications.harvestDate}</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                                         <h3 className="font-bold text-gray-900 mb-4">Storage & Handling</h3>
//                                         <div className="space-y-3 text-gray-700">
//                                             <p>• Store in a cool, dry place</p>
//                                             <p>• Keep away from direct sunlight</p>
//                                             <p>• Proper ventilation required</p>
//                                             <p>• Handle with care to avoid damage</p>
//                                             <p>• Check regularly for quality</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         {activeTab === "reviews" && (
//                             <div>
//                                 <div className="mb-8">
//                                     <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                                         Customer Reviews & Ratings
//                                     </h2>
//                                     <div className="flex items-center gap-8 bg-gray-50 rounded-xl p-6">
//                                         <div className="text-center">
//                                             <div className="text-5xl font-bold text-gray-900 mb-2">
//                                                 {averageRating.toFixed(1)}
//                                             </div>
//                                             <div className="flex gap-1 justify-center mb-2">
//                                                 {renderStars(averageRating)}
//                                             </div>
//                                             <p className="text-sm text-gray-600">
//                                                 Based on {crop.reviews.length} reviews
//                                             </p>
//                                         </div>
//                                         <div className="flex-1">
//                                             {[5, 4, 3, 2, 1].map((star) => {
//                                                 const count = crop.reviews.filter(r => r.rating === star).length;
//                                                 const percentage = (count / crop.reviews.length) * 100;
//                                                 return (
//                                                     <div key={star} className="flex items-center gap-3 mb-2">
//                                                         <span className="text-sm text-gray-600 w-12">{star} star</span>
//                                                         <div className="flex-1 bg-gray-200 rounded-full h-2">
//                                                             <div
//                                                                 className="bg-yellow-400 h-2 rounded-full"
//                                                                 style={{ width: `${percentage}%` }}
//                                                             />
//                                                         </div>
//                                                         <span className="text-sm text-gray-600 w-8">{count}</span>
//                                                     </div>
//                                                 );
//                                             })}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="space-y-6">
//                                     {crop.reviews.map((review) => (
//                                         <div key={review._id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                                             <div className="flex items-start justify-between mb-3">
//                                                 <div>
//                                                     <h4 className="font-bold text-gray-900">{review.userName}</h4>
//                                                     <p className="text-sm text-gray-600">{review.date}</p>
//                                                 </div>
//                                                 <div className="flex gap-1">
//                                                     {renderStars(review.rating)}
//                                                 </div>
//                                             </div>
//                                             <p className="text-gray-700">{review.comment}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Related Products */}
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
//                     <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                         Related Products from {crop.type} Category
//                     </h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {relatedProducts.map((product) => (
//                             <div
//                                 key={product._id}
//                                 className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
//                             >
//                                 <div className="relative overflow-hidden">
//                                     <img
//                                         src={product.image}
//                                         alt={product.name}
//                                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                                     />
//                                     <div className="absolute top-3 right-3">
//                                         <button className="bg-white/90 backdrop-blur p-2 rounded-full hover:bg-white transition shadow-lg">
//                                             <BiHeart className="w-4 h-4 text-gray-700" />
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="p-4">
//                                     <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
//                                         {product.name}
//                                     </h3>
//                                     <div className="flex gap-1 mb-2">
//                                         {renderStars(product.rating)}
//                                     </div>
//                                     <div className="flex items-baseline gap-1">
//                                         <span className="text-2xl font-bold text-green-600">
//                                             ৳{product.pricePerUnit}
//                                         </span>
//                                         <span className="text-gray-600">/{product.unit}</span>
//                                     </div>
//                                     <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold mt-3 transition">
//                                         View Details
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
        
//     );
// };

// export default CropDetailsPage;




import React from 'react'

export default function CropDetailsPage({ crop }) {
    console.log(crop)
  return (
    <div>
      <h2>{crop.name}</h2>
    </div>
  )
}
