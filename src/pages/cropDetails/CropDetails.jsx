import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router";

const CropDetails = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          {/* left */}
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src="https://d28ht6kztpdvka.cloudfront.net/media/productimages/1849/tree.webp"
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          {/* right */}
          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <Link to="/all-crops">
              <span className="bg-[#025b3633] text-green-500 px-3 py-1 rounded-full text-sm   mb-3 font-bold flex items-center justify-center lg:justify-start gap-1 bg-clip-text">
                <IoMdArrowBack />

                <span>See all Crops</span>
              </span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              3D Christmas tree model
            </h1>

            <div className="flex gap-3">
              <div className="badge badge-lg badge-outline text-green-600 border-green-600 font-medium rounded-full">
                Plants
              </div>

              <div className="badge badge-lg badge-outline text-green-600 border-green-600 font-medium rounded-full">
                Ratting: ⭐⭐⭐⭐⭐
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Realistic 3D Model of a Christmas tree. If you're looking for a
              highly detailed and realistic 3D model of a Christmas tree, look
              no further. Our industry-standard software has created a model
              that is perfect for use in video games, animations, and
              architectural visualizations. The model is available in .OBJ and
              .FBX file formats and has dimensions of (insert measurements
              here). It is fully textured with realistic materials and is fully
              UV mapped for easy integration into any project. One of the
              special features of this model is that it is fully rigged and
              ready for animation. It includes detailed engine, interior, and
              exterior parts that make it stand out from other models. This
              Christmas tree model is a high-poly model, suitable for
              high-quality renders and animations. Whether you're creating a
              video game, animation, or architectural visualization, this
              Christmas tree model is perfect for your project. It's highly
              detailed and realistic, making it stand out from other models on
              the market. So why wait? Get your hands on this 3D model today and
              take your project to the next level.
            </p>

            <div className="flex gap-3 mt-6">
              <Link
                //   to={`/update-model/${model._id}`}
                className="btn btn-style"
              >
                Add Crop
              </Link>
              {/* <button
                  //   onClick={handleDownload}
                  className="btn btn-secondary rounded-full"
                >
                  Download
                </button> */}
              <button
                //   onClick={handleDelete}
                className="btn btn-style"
              >
                Interest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;
