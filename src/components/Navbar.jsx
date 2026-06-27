import React, { use, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import MyLinks from './links/MyLinks';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { IoHomeOutline } from 'react-icons/io5';
import MyContainer from './myContainer/MyContainer';
import { LuTrees, LuChevronDown, LuUser } from 'react-icons/lu';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import {
  HiOutlineInformationCircle, HiOutlineMail,
  HiOutlineQuestionMarkCircle, HiOutlineUserGroup, HiX
} from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { RiSunLine, RiMoonLine, RiMenuLine } from 'react-icons/ri';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const userDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "night" : "winter");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target)) setUserDropdown(false);
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target)) setMoreDropdown(false);
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

  const isDark = theme === "night";

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Frosted glass bar */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/60 dark:border-white/10 shadow-sm">
          <MyContainer>
            <div className="flex items-center justify-between h-16 px-2 lg:px-0">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2.5 group shrink-0">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md group-hover:shadow-green-300 transition-shadow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21s6-7 10-7 8 7 8 7-4-10-8-10S3 21 3 21z" fill="white" />
                    <path d="M7 10c1.5-1 4-2 7-2" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Krishi<span className="text-green-600 dark:text-green-400">Link</span>
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {primaryLinks.map((link) => (
                  <MyLinks key={link.to} to={link.to} className="flex items-center gap-1.5 text-sm">
                    <link.icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </MyLinks>
                ))}

                {/* Pages dropdown */}
                <div className="relative" ref={moreDropdownRef}>
                  <button
                    onClick={() => setMoreDropdown(!moreDropdown)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-md transition"
                  >
                    Pages
                    <LuChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {moreDropdown && (
                    <div className="absolute top-full mt-2 right-0 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-1.5 animate-[fadeIn_0.15s_ease]">
                      {moreLinks.map((link) => (
                        <MyLinks
                          key={link.to}
                          to={link.to}
                          onClick={() => setMoreDropdown(false)}
                          className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 "
                        >
                          <link.icon className="w-4 h-4 text-green-500" />
                          {link.label}
                        </MyLinks>
                      ))}
                    </div>
                  )}
                </div>
              </nav>

              {/* Right side actions */}
              <div className="hidden lg:flex items-center gap-2">
                {/* Theme toggle — custom sun/moon pill */}
                <button
                  onClick={() => handleTheme(!isDark)}
                  aria-label="Toggle theme"
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1 ${
                    isDark
                      ? 'bg-gray-700 border border-gray-600'
                      : 'bg-amber-100 border border-amber-200'
                  }`}
                >
                  {/* Track icons */}
                  <RiSunLine className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-amber-500 transition-opacity ${isDark ? 'opacity-40' : 'opacity-100'}`} />
                  <RiMoonLine className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-indigo-400 transition-opacity ${isDark ? 'opacity-100' : 'opacity-30'}`} />
                  {/* Thumb */}
                  <span className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                    isDark
                      ? 'translate-x-7 bg-gray-900'
                      : 'translate-x-0.5 bg-white'
                  }`}>
                    {isDark
                      ? <RiMoonLine className="w-3.5 h-3.5 text-indigo-400" />
                      : <RiSunLine className="w-3.5 h-3.5 text-amber-500" />
                    }
                  </span>
                </button>

                {!user ? (
                  <>
                    <MyLinks to="/join-us" className="flex items-center gap-1.5 text-sm">
                      <HiOutlineUserGroup className="w-4 h-4" />
                      <span>Join Us</span>
                    </MyLinks>
                    <Link
                      to="/auth/login"
                      className="flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition shadow-sm shadow-green-200 dark:shadow-none"
                    >
                      <BiLogIn className="w-4 h-4" /> Login
                    </Link>
                  </>
                ) : (
                  /* User avatar dropdown */
                  <div className="relative" ref={userDropdownRef}>
                    <button
                      onClick={() => setUserDropdown(!userDropdown)}
                      className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 transition bg-white dark:bg-gray-800 shadow-sm"
                    >
                      {user.photoURL ? (
                        <img src={user.photoURL} alt="avatar" className="w-7 h-7 rounded-full object-cover" />
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xs">
                          {user.displayName?.[0]?.toUpperCase() || user.name?.[0]?.toUpperCase() || "U"}
                        </div>
                      )}
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 max-w-[80px] truncate">
                        {user.displayName || user.name || "User"}
                      </span>
                      <LuChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${userDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {userDropdown && (
                      <div className="absolute top-full mt-2 right-0 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-1.5 overflow-hidden">
                        <div className="px-4 py-2.5 border-b border-gray-100 dark:border-gray-700">
                          <p className="font-semibold text-sm text-gray-800 dark:text-gray-100 truncate">{user.displayName || user.name || "User"}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 truncate mt-0.5">{user.email}</p>
                        </div>
                        {userMenuLinks.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setUserDropdown(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 transition"
                          >
                            <link.icon className="w-4 h-4 text-green-500" />
                            {link.label}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 dark:border-gray-700 mt-1 pt-1">
                          <button
                            onClick={() => { setUserDropdown(false); handleLogOut(); }}
                            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                          >
                            <BiLogOut className="w-4 h-4" />
                            Sign out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile right: theme toggle + hamburger */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={() => handleTheme(!isDark)}
                  aria-label="Toggle theme"
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                    isDark ? 'bg-gray-700 border border-gray-600' : 'bg-amber-100 border border-amber-200'
                  }`}
                >
                  <span className={`absolute top-0.5 w-5 h-5 rounded-full shadow transition-all duration-300 flex items-center justify-center ${
                    isDark ? 'translate-x-6 bg-gray-900' : 'translate-x-0.5 bg-white'
                  }`}>
                    {isDark
                      ? <RiMoonLine className="w-3 h-3 text-indigo-400" />
                      : <RiSunLine className="w-3 h-3 text-amber-500" />
                    }
                  </span>
                </button>
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <HiX className="w-5 h-5" /> : <RiMenuLine className="w-5 h-5" />}
                </button>
              </div>

            </div>
          </MyContainer>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {[...primaryLinks, ...moreLinks].map((link) => (
                <MyLinks
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </MyLinks>
              ))}

              <div className="border-t border-gray-100 dark:border-gray-700 pt-3 mt-2">
                {user ? (
                  <>
                    <div className="flex items-center gap-3 px-3 py-2 mb-2">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt="avatar" className="w-9 h-9 rounded-full object-cover border-2 border-green-200" />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-sm">
                          {user.displayName?.[0]?.toUpperCase() || user.name?.[0]?.toUpperCase() || "U"}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-sm text-gray-800 dark:text-gray-100">{user.displayName || user.name || "User"}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    {userMenuLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 rounded-lg transition"
                      >
                        <link.icon className="w-4 h-4 text-green-500" />
                        {link.label}
                      </Link>
                    ))}
                    <button
                      onClick={() => { setMobileOpen(false); handleLogOut(); }}
                      className="flex items-center gap-3 w-full px-3 py-2.5 mt-1 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                    >
                      <BiLogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <MyLinks
                      to="/join-us"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg"
                    >
                      <HiOutlineUserGroup className="w-4 h-4" />
                      Join Us
                    </MyLinks>
                    <Link
                      to="/auth/login"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center gap-2 mx-3 mt-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition"
                    >
                      <BiLogIn className="w-4 h-4" /> Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="h-16" />
    </>
  );
};

export default Navbar;
