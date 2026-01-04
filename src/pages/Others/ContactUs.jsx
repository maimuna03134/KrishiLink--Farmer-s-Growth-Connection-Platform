import React from "react";
import { Link } from "react-router";

const ContactUs = () => {
    return (
        <div className="bg-cream min-h-screen p-6 md:p-12">
            {/* Header Section */}
            <div
                className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1470&q=80')",
                }}
            >
                <div className="text-center flex flex-col items-center justify-center bg-black bg-opacity-40 p-4 rounded">
                    <h1 className="text-4xl font-semibold">Contact Us</h1>
                    <p className="bg-gray-200 p-2 text-green-900 font-semibold mt-2"><Link to='/'><span>Home</span></Link> / Contact Us</p>
                </div>
            </div>

            {/* Contact Info */}
            <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6 text-center">
                {/* Address */}
                <div className="border p-6 rounded-lg hover:shadow-lg transition">
                    <div className="text-green-700 mb-2">
                        <svg
                            className="w-8 h-8 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13 21l-4.657-4.657a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-gray-600 text-sm">
                        245 Country Road, Meadow Valley, Springfield, Illinois 62701, USA
                    </p>
                </div>

                {/* Phone */}
                <div className="border p-6 rounded-lg hover:shadow-lg transition">
                    <div className="text-green-700 mb-2">
                        <svg
                            className="w-8 h-8 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5h2l3 7-1 3 4 4 3-1 7 3v2a2 2 0 01-2 2h-1c-9.941 0-18-8.059-18-18V7a2 2 0 012-2z"
                            />
                        </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600 text-sm">+123 456 789 0</p>
                    <p className="text-gray-600 text-sm">+123 456 789 0</p>
                </div>

                {/* Email */}
                <div className="border p-6 rounded-lg hover:shadow-lg transition">
                    <div className="text-green-700 mb-2">
                        <svg
                            className="w-8 h-8 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 12H8m0 0l-4 4m4-4l4-4m6 8h2a2 2 0 002-2V8a2 2 0 00-2-2h-2"
                            />
                        </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-600 text-sm">infoagro@mail.co.id</p>
                    <p className="text-gray-600 text-sm">hallooagro@gmail.com</p>
                </div>
            </div>

            {/* Form and Image */}
            <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
                <img
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
                    alt="Farmer"
                    className="w-full h-full object-cover rounded-lg"
                />

                <form className="bg-green-900 p-6 rounded-lg text-white">
                    <h2 className="text-xl font-semibold mb-4">Your Questions, Our Answers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="p-2 rounded w-full font-semibold text-white"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="p-2 rounded w-full font-semibold  text-white"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Phone"
                            className="p-2 rounded w-full font-semibold text-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 rounded w-full font-semibold text-white"
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        className="p-2 rounded w-full font-semibold text-white mb-4"
                        rows="4"
                    />
                    <button
                        type="submit"
                        className="bg-yellow-400 text-green-900 font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition"
                    >
                        Submit Form
                    </button>
                </form>
            </div>

            {/* Map */}
            {/* <div className="max-w-6xl mx-auto mt-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19845.4377746521!2d-0.13429288811002916!3d51.515617749999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333f45b8b5%3A0x7d6b9b6a914e0b36!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1699999999999!5m2!1sen!2sbd"
                    width="100%"
                    height="300"
                    className="border-0 rounded-lg"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div> */}
        </div>
    );
};

export default ContactUs;
