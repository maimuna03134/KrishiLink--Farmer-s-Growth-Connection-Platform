import React, { use, useState } from 'react';
import { Link } from 'react-router';
import MyLinks from './links/MyLinks';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { IoLogIn } from 'react-icons/io5';
import MyContainer from './myContainer/MyContainer';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [open, setOpen] = useState(false); 
  
    const handleLogOut = () => {
      // console.log('user trying to logout')

      logOut()
        .then(() => {
          toast.success("Your Logged Out successful!");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

     const publicLinks = [
       { to: "/", label: "Home" },
       { to: "/all-crops", label: "All Crops" },
       { to: "/auth/login", label: "Login" },
       { to: "/auth/register", label: "Register" },
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
      <header className="bg-linear-to-t from-green-50 to-white shadow-md sticky top-0 z-50">
        <MyContainer>
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
              
            </div>

            <nav className="hidden  lg:flex items-center gap-2">
              {(user ? privateLinks : publicLinks).map((link) => (
                <MyLinks key={link.to} to={link.to}>
                  {link.label}
                </MyLinks>
              ))}

              {user && (
                <div className="flex items-center gap-3 ml-10">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="avatar"
                      className="w-8 h-8 rounded-full border object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
                      {user.name ? user.name[0].toUpperCase() : "U"}
                    </div>
                  )}
                  <button
                    onClick={handleLogOut}
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-red-50 text-red-700 rounded-md hover:bg-red-100 transition"
                  >
                    <IoLogIn /> LogOut
                  </button>
                </div>
              )}
            </nav>
            {/* mobile and laptop hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setOpen((s) => !s)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </MyContainer>

        {/* menu for mobile and laptop device */}
        {open && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-3 space-y-1">
              {(user ? privateLinks : publicLinks).map((link) => (
                <MyLinks
                  key={link.to}
                  to={link.to}
                  className="block w-full"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </MyLinks>
              ))}

              {user && (
                <div className="pt-3 mt-3 border-t flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
                        {user.name ? user.name[0].toUpperCase() : "U"}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        {user.name || "User"}
                      </div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleLogOut();
                    }}
                    className="px-3 py-2 text-sm bg-red-50 text-red-700 rounded-md hover:bg-red-100"
                  >
                    {" "}
                    LogOut
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    );
};

export default Navbar;