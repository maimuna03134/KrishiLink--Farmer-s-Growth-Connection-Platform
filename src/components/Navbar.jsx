import React from 'react';
import { Link } from 'react-router';
import MyLinks from './links/MyLinks';

const Navbar = () => {
     const publicLinks = [
       { to: "/", label: "Home" },
       { to: "/all-crops", label: "All Crops" },
       { to: "/login", label: "Login" },
       { to: "/register", label: "Register" },
    ];
    
const privateLinks = [
  { to: "/", label: "Home" },
  { to: "/all-crops", label: "All Crops" },
  { to: "/profile", label: "Profile" },
  { to: "/add-crop", label: "Add Crops" },
  { to: "/my-posts", label: "My Posts" },
  { to: "/my-interests", label: "My Interests" },
];

    return (
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
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
              <span className="text-lg font-semibold text-gray-800">
                KrishiLink
              </span>
            </Link>
            <span className="text-xs text-gray-500 hidden sm:inline">
              Farmer’s Growth & Connection
            </span>
          </div>

          <nav>
            <MyLinks >
            Home
            </MyLinks>
            <MyLinks >
            Login
            </MyLinks>
            <MyLinks >
            Register
            </MyLinks>
                </nav>
                <button>login</button>
        </div>
      </header>
    );
};

export default Navbar;