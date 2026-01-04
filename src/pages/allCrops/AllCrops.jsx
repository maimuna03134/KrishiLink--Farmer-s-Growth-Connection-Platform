import React, { useEffect, useState } from "react";
import CropCard from "../../components/CropCard";
import { useLoaderData } from "react-router";
import MyContainer from "../../components/myContainer/MyContainer";
import cropsNotFound from '../../assets/not_found.png'
import { GoSearch } from "react-icons/go";
import { IoMdArrowBack } from "react-icons/io";
import CropsSkeleton from "../../components/CropsSkeleton";
import toast from "react-hot-toast";
import { BiChevronLeft, BiChevronRight, BiFilterAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const AllCrops = () => {
  // const data = useLoaderData();
  // console.log(data)
  const [loading, setLoading] = useState(true);
  const [crops, setCrops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [pagination, setPagination] = useState({
    totalPages: 1,
    totalCrops: 0,
    hasNextPage: false,
    hasPrevPage: false
  });
  const itemsPerPage = 10;

  useEffect(() => {
    fetchCategories();
    fetchLocations();
  }, []);

  useEffect(() => {
    fetchCrops();
  }, [currentPage, selectedCategory, selectedLocation, searchTerm]);

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "https://krisilink-farmer-growth-connection.vercel.app/crops/categories"
      );
      const data = await res.json();
      if (data.success) {
        setCategories(data.categories);
      }
    } catch (error) {
      toast.error("Failed to fetch categories:", error);
    }
  };

  const fetchLocations = async () => {
    try {
      const res = await fetch(
        "https://krisilink-farmer-growth-connection.vercel.app/crops/locations"
      );
      const data = await res.json();
      if (data.success) {
        setLocations(data.locations);
      }
    } catch (error) {
      toast.error("Failed to fetch locations:", error);
    }
  };

  const fetchCrops = async () => {

    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage
      });

      if (searchTerm) params.append("search", searchTerm);
      if (selectedCategory) params.append("category", selectedCategory);
      if (selectedLocation) params.append("location", selectedLocation);

      const res = await fetch(
        `https://krisilink-farmer-growth-connection.vercel.app/crops?${params.toString()}`
      );
      const data = await res.json();
      if (data.success) {
        setCrops(data.data);
        setPagination(data.pagination);
      }
    } catch (error) {
      toast.error("Failed to fetch crops:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [searchTerm, selectedCategory, selectedLocation]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedLocation("");
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedLocation;


  return (
    <div className="bg-linear-to-br from-green-50 via-lime-50 to-green-50 py-8">

      <MyContainer>
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg mb-3">
          Fresh Crops <br />
          <span className="text-green-400">Direct from Farmers</span>
        </h1>

        <p className="text-center text-lg md:text-xl mb-6 opacity-90 max-w-2xl drop-shadow px-3 mx-auto">
          Connect with farmers across the country. Buy high-quality,
          organic, and affordable crops — straight to your table.
        </p>
        <div className="relative w-11/12 mx-auto">
          <GoSearch
            size={24}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
          />
          <input
            type="text"
            placeholder="Search by crop name, type, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-4 rounded-full text-gray-900 border-2 border-green-300 text-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-green-400 transition-all"
          />
        </div>
      </MyContainer>


      <MyContainer className="py-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center md:px-4 gap-4 mb-8 ">
          <div>
            <h1 className="text-4xl font-bold text-green-800 mb-2 ">
              All Crops
            </h1>
            <p className="text-gray-600">
              Showing {crops.length > 0 ? ((currentPage - 1) * itemsPerPage + 1) : 0}-
              {Math.min(currentPage * itemsPerPage, pagination.totalCrops)} of{" "}
              {pagination.totalCrops} crops
            </p>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg lg:hidden w-11/12 mx-auto justify-center md:w-auto md:mx-0  "
          >
            <BiFilterAlt size={20} />
            Filters
            {hasActiveFilters && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {[searchTerm, selectedCategory, selectedLocation].filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* filters sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <BiFilterAlt className="text-green-600" />
                  Filters
                </h2>
                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold flex items-center gap-1"
                  >
                    <MdClose size={16} />
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition text-gray-900"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition text-gray-900"
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Active Filters:
                  </p>
                  <div className="space-y-2">
                    {searchTerm && (
                      <div className="flex items-center justify-between bg-green-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-gray-700">
                          Search: "{searchTerm}"
                        </span>
                        <button
                          onClick={() => setSearchTerm("")}
                          className="text-red-500 hover:text-red-700"
                        >
                          <MdClose size={16} />
                        </button>
                      </div>
                    )}
                    {selectedCategory && (
                      <div className="flex items-center justify-between bg-green-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-gray-700">
                          Category: {selectedCategory}
                        </span>
                        <button
                          onClick={() => setSelectedCategory("")}
                          className="text-red-500 hover:text-red-700"
                        >
                          <MdClose size={16} />
                        </button>
                      </div>
                    )}
                    {selectedLocation && (
                      <div className="flex items-center justify-between bg-green-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-gray-700">
                          Location: {selectedLocation}
                        </span>
                        <button
                          onClick={() => setSelectedLocation("")}
                          className="text-red-500 hover:text-red-700"
                        >
                          <MdClose size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>


          <div className="flex-1">
            {
              crops.length === 0 && !loading ? (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                  <img
                    src={cropsNotFound}
                    alt="No Crops Found"
                    className="animate-pulse bg-transparent w-[300px] h-[300px]"
                  />
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    No Crops Found
                  </h2>
                  <p className="text-gray-600 mb-6 ">
                    We couldn't find any crops matching your criteria. Try
                    adjusting your filters or search terms.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition inline-flex items-center gap-2"
                  >
                    <IoMdArrowBack />
                    Clear Filters
                  </button>

                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
                    {loading
                      ? Array.from({ length: itemsPerPage }).map((_, i) => (
                        <CropsSkeleton key={i} />
                      ))
                      : crops.map((crop) => (
                        <CropCard key={crop._id} crop={crop} />
                      ))}
                  </div>

                  {/* Pagination */}
                  {pagination.totalPages > 1 && !loading && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl shadow-lg p-6">
                      <div className="text-gray-600">
                        Page {currentPage} of {pagination.totalPages}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                          disabled={!pagination.hasPrevPage}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${!pagination.hasPrevPage
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                        >
                          <BiChevronLeft size={20} />
                          Previous
                        </button>

                        <div className="hidden sm:flex gap-2">
                          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                            .filter((page) => {
                              return (
                                page === 1 ||
                                page === pagination.totalPages ||
                                Math.abs(page - currentPage) <= 1
                              );
                            })
                            .map((page, index, array) => (
                              <React.Fragment key={page}>
                                {index > 0 && array[index - 1] !== page - 1 && (
                                  <span className="px-3 py-2 text-gray-400">...</span>
                                )}
                                <button
                                  onClick={() => setCurrentPage(page)}
                                  className={`px-4 py-2 rounded-lg font-semibold transition ${currentPage === page
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                  {page}
                                </button>
                              </React.Fragment>
                            ))}
                        </div>

                        <button
                          onClick={() =>
                            setCurrentPage((prev) =>
                              Math.min(pagination.totalPages, prev + 1)
                            )
                          }
                          disabled={!pagination.hasNextPage}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${!pagination.hasNextPage
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                        >
                          Next
                          <BiChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default AllCrops;


