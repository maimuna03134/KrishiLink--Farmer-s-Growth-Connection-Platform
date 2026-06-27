import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLeaf, FaSeedling,  FaYoutube } from 'react-icons/fa';
import { GiCorn, GiWheat } from 'react-icons/gi';
import { Link } from 'react-router';
import MyContainer from './myContainer/MyContainer';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
      <footer className=" dark:bg-gray-800 
            dark:text-gray-100 border-t border-green-100 rounded-2xl">
        <MyContainer className={''}>
          {/* Logo */}
          <div className="mb-8 px-2  
            dark:text-gray-100 dark:brightness-200 dark:contrast-125">
            <Link to="/">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-600"
              >
                <path
                  d="M3 21s6-7 10-7 8 7 8 7-4-10-8-10S3 21 3 21z"
                  fill="currentColor"
                />
                <path
                  d="M7 10c1.5-1 4-2 7-2"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-lg font-semibold text-gray-800 dark:brightness-200 dark:contrast-125">
                KrishiLink
              </span>
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 px-2 dark:bg-gray-800 
            dark:text-gray-100">
            
            <div>
              <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2 dark:bg-gray-800 
            dark:text-gray-100">
                <FaSeedling className="text-green-600" />
                Quick Links
              </h3>
              <ul className="space-y-3 ">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/all-crops"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    All Crops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/add-crop"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    Add Crops
                  </Link >
                </li>
                <li>
                  <Link
                    to="/my-posts"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    My Posts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-interests"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                   
                  >
                    My Interests
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2 dark:bg-gray-800 
            dark:text-gray-100">
                <GiWheat className="text-green-600" />
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    User Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    Farming Tips
                  </a>
                </li>
                <li>
                  <Link to={'/contact'}
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                <GiCorn className="text-green-600 dark:bg-gray-800 
            dark:text-gray-100" />
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to={'/about'}
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    Agri Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                <FaLeaf className="text-green-600 dark:bg-gray-800 
            dark:text-gray-100" />
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-700 transition-colors dark:bg-gray-800 
            dark:text-gray-100"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-200 pt-8 mb-8 px-2 dark:bg-gray-800 
            dark:text-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2 dark:bg-gray-800 
            dark:text-gray-100">
                  Subscribe to our newsletter
                </h3>
                <p className="text-gray-600 text-sm dark:bg-gray-800 
            dark:text-gray-100">
                  Get the latest agricultural news, tips, and updates straight
                  to your inbox.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:min-w-[400px] dark:bg-gray-800 
            dark:text-gray-100">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                />
                <button className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm whitespace-nowrap shadow-md hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 dark:bg-gray-800 
            dark:text-gray-100">
            <p className="text-gray-600 text-sm dark:bg-gray-800 
            dark:text-gray-100">
              © 2024 KrishiLink. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </MyContainer>
      </footer>
    );
};

export default Footer;