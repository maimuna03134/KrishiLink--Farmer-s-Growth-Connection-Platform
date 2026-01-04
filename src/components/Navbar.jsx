import React, { use, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import MyLinks from './links/MyLinks';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { IoHomeOutline } from 'react-icons/io5';
import MyContainer from './myContainer/MyContainer';
import { LuTrees, LuChevronDown, LuUser, LuLayoutDashboard, LuSettings } from 'react-icons/lu';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { HiOutlineCog, HiOutlineDocumentText, HiOutlineInformationCircle, HiOutlineMail, HiOutlineMenuAlt3, HiOutlineQuestionMarkCircle, HiOutlineUserGroup, HiX } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const userDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdown(false);
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setMoreDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => console.log(err.message));
  };

  const primaryLinks = [
    { to: "/", label: "Home", icon: IoHomeOutline },
    { to: "/all-crops", label: "All Crops", icon: LuTrees },
  ];

  const moreLinks = [
    { to: "/about", label: "About", icon: HiOutlineInformationCircle },
    { to: "/faq", label: "FAQ", icon: HiOutlineQuestionMarkCircle },
    { to: "/contact", label: "Contact", icon: HiOutlineMail },
  ];

  const userMenuLinks = user ? [
    { to: "/dashboard/profile", label: "Profile", icon: LuUser },
    { to: "/dashboard", label: "Dashboard", icon: MdDashboard },
  ] : [];

  return (
    <>
      <header className="bg-linear-to-b from-green-50 to-white shadow-sm fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-opacity-95">
        <MyContainer >
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-green-600 group-hover:text-green-700 transition">
                <path d="M3 21s6-7 10-7 8 7 8 7-4-10-8-10S3 21 3 21z" fill="currentColor" />
                <path d="M7 10c1.5-1 4-2 7-2" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
              </svg>
              <span className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition">KrishiLink</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {primaryLinks.map((link) => (
                <MyLinks key={link.to} to={link.to} className={'flex items-center gap-2'}>
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </MyLinks>
              ))}

              {/* More Dropdown */}
              <div className="relative" ref={moreDropdownRef}>
                <button
                  onClick={() => setMoreDropdown(!moreDropdown)}
                  className="flex items-center gap-1 px-4 py-2 text-green-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition"
                >
                  Pages <LuChevronDown className={`w-4 h-4 transition-transform ${moreDropdown ? 'rotate-180' : ''}`} />
                </button>
                {moreDropdown && (
                  <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-lg shadow-lg border py-2 ">
                    {moreLinks.map((link) => (
                      <MyLinks
                        key={link.to}
                        to={link.to}
                        onClick={() => setMoreDropdown(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition flex items-center gap-2"
                      >
                        <link.icon className="w-4 h-4" />
                        <span> {link.label}</span>
                      </MyLinks>
                    ))}
                  </div>
                )}
              </div>

              {!user ? (
                <>
                  <MyLinks to="/join-us" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition flex items-center gap-2">
                    <HiOutlineUserGroup />
                    <span>Join Us</span>
                  </MyLinks>
                  <Link to="/auth/login" className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    <BiLogIn /> Login
                  </Link>
                </>
              ) : (
                /* User Dropdown */
                <div className="relative ml-4" ref={userDropdownRef}>
                  <button
                    onClick={() => setUserDropdown(!userDropdown)}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-green-50 rounded-lg transition"
                  >
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="avatar" className="w-9 h-9 rounded-full border-2 border-green-200 object-cover" />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold text-sm">
                        {user.name?.[0]?.toUpperCase() || "U"}
                      </div>
                    )}
                    <LuChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${userDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {userDropdown && (
                    <div className="absolute top-full mt-2 right-0 w-56 bg-white rounded-lg shadow-lg border py-2">
                      <div className="px-4 py-3 border-b">
                        <p className="font-semibold text-gray-800">{user.name || "User"}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      {userMenuLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setUserDropdown(false)}
                          className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                        >
                          <link.icon className="w-4 h-4" />
                          {link.label}
                        </Link>
                      ))}
                      <div className="border-t mt-2 pt-2">
                        <button
                          onClick={() => {
                            setUserDropdown(false);
                            handleLogOut();
                          }}
                          className="flex items-center gap-3 w-full px-4 py-2 text-red-600 hover:bg-red-50 transition"
                        >
                          <BiLogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
            </button>
          </div>
        </MyContainer>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-3 space-y-1">
              {primaryLinks.map((link) => (
                <MyLinks key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition  gap-2">
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </MyLinks>
              ))}
              {moreLinks.map((link) => (
                <MyLinks
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition flex items-center gap-2">
                  <link.icon className="w-4 h-4" />
                  <span>
                    {link.label}
                  </span>

                </MyLinks>
              ))}

              {user ? (
                <>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex items-center gap-3 px-4 py-2 mb-2">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt="avatar" className="w-10 h-10 rounded-full border-2 border-green-200" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold">
                          {user.name?.[0]?.toUpperCase() || "U"}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-gray-800">{user.name || "User"}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    {userMenuLinks.map((link) => (
                      <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition">
                        <link.icon className="w-5 h-5" />
                        {link.label}
                      </Link>
                    ))}
                    <button onClick={() => { setMobileOpen(false); handleLogOut(); }}
                      className="flex items-center gap-3 w-full px-4 py-2 mt-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <BiLogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <MyLinks to="/join-us" onClick={() => setMobileOpen(false)}
                    className="px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition flex items-center gap-2">
                    <HiOutlineUserGroup />
                    <span>Join Us</span>
                  </MyLinks>
                  <Link to="/auth/login" onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 mx-4 mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    <BiLogIn /> Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>
      <div className='h-12'></div>
    </>
  );
};

export default Navbar;