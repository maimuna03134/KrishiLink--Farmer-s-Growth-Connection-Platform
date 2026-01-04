import React from 'react';
import { BiLeaf, BiPackage, BiTrendingUp, BiCheckCircle, BiShieldAlt, BiTimer } from 'react-icons/bi';
import { Link } from 'react-router';

const WhyChooseUs = () => {
    return (
        <section className="bg-linear-to-br from-green-50 via-lime-50 to-green-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <BiLeaf className="w-6 h-6 text-green-600" />
                                <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                                    Why Choose Us
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                We Are Different From Other Farming
                            </h2>
                            <p className="text-gray-600 text-lg">
                                We have 15 years of agriculture & eco farming experience globally, work with professionals
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="space-y-6">
                            {/* Feature 1 */}
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                                    <BiLeaf className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Sustainable & Regenerative Agriculture
                                    </h3>
                                    <p className="text-gray-600">
                                        Solution for small and large businesses with eco-friendly farming practices
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                                    <BiPackage className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Organic Agriculture & Food Production
                                    </h3>
                                    <p className="text-gray-600">
                                        Solution for small and large businesses with quality organic products
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <BiCheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                                <span className="text-gray-700 font-medium">100% Naturally</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BiCheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                                <span className="text-gray-700 font-medium">High tech Processing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BiCheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                                <span className="text-gray-700 font-medium">Home Delivery Service</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BiCheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                                <span className="text-gray-700 font-medium">Best Quality Product</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link to={'/all-crops'} className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl flex items-center gap-2">
                            Explore More
                            <BiTrendingUp className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Right Side - Images */}
                    <div className="relative">
                        {/* Decorative Dots */}
                        <div className="absolute -top-8 -left-8 grid grid-cols-5 gap-2 opacity-40">
                            {[...Array(25)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-green-600 rounded-full"></div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="relative z-10">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661907005604-cec7ffb6a042?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFncmljdWx0dXJlfGVufDB8fDB8fHww"
                                alt="Farming field"
                                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                            />
                        </div>

                        
                        <div className="absolute top-1/3 -left-8 z-20 bg-white rounded-2xl shadow-2xl overflow-hidden w-64 h-48 md:block hidden">
                            <img
                                src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFncmljdWx0dXJlfGVufDB8fDB8fHww"
                                alt="Farm field"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                                <button className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition shadow-2xl">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                                </button>
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="absolute bottom-8 -right-8 z-20 bg-white rounded-2xl shadow-2xl p-6 text-center md:block hidden">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <BiTrendingUp className="w-8 h-8 text-green-600" />
                            </div>
                            <div className="text-4xl font-bold text-green-600 mb-1">26+</div>
                            <div className="text-sm text-gray-600 font-medium">
                                Growth Tonns<br />of Harvest
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;