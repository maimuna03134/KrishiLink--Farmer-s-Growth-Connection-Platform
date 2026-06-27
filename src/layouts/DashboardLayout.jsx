import { useEffect, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { LuLayoutDashboard, LuSettings, LuTrees } from 'react-icons/lu'
import { TbLayoutSidebarRightExpandFilled } from 'react-icons/tb'
import { Link, Outlet } from 'react-router'
import { RiSunLine, RiMoonLine } from 'react-icons/ri'

export default function DashboardLayout() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    
    
      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }, [theme]);
    
      const handleTheme = (checked) => {
        setTheme(checked ? "night" : "winter");
    
      };
  return (
      <div className="drawer lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
              {/* Navbar */}
              <nav className="navbar w-full bg-base-300">
                  <label
                      htmlFor="my-drawer-4"
                      aria-label="open sidebar"
                      className="btn btn-square btn-ghost"
                  >
                      {/* Sidebar toggle icon */}
                      <TbLayoutSidebarRightExpandFilled />
                  </label>
                  <div className="px-4">KeishiLink Dashboard</div>
                  <div>
                      <button
                          onClick={() => handleTheme(theme !== "night")}
                          aria-label="Toggle theme"
                          className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1 ${
                            theme === "night"
                              ? 'bg-gray-700 border border-gray-600'
                              : 'bg-amber-100 border border-amber-200'
                          }`}
                      >
                          <RiSunLine className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-amber-500 transition-opacity ${theme === "night" ? 'opacity-40' : 'opacity-100'}`} />
                          <RiMoonLine className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-indigo-400 transition-opacity ${theme === "night" ? 'opacity-100' : 'opacity-30'}`} />
                          <span className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                            theme === "night"
                              ? 'translate-x-7 bg-gray-900'
                              : 'translate-x-0.5 bg-white'
                          }`}>
                              {theme === "night"
                                ? <RiMoonLine className="w-3.5 h-3.5 text-indigo-400" />
                                : <RiSunLine className="w-3.5 h-3.5 text-amber-500" />
                              }
                          </span>
                      </button>
                  </div>
              </nav>
              {/* Page content here */}
              <Outlet></Outlet>

          </div>

          <div className="drawer-side is-drawer-close:overflow-visible">
              <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
              ></label>
              <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                  {/* Sidebar content here */}
                  <ul className="menu w-full grow">
                      {/* List item */}
                      <li>
                          <Link
                              to="/"
                              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                              data-tip="Homepage"
                          >
                              {/* Home icon */}
                              <FiHome />
                              <span className="is-drawer-close:hidden">Homepage</span>
                          </Link>
                      </li>

                      <li>
                          <Link
                              to="/dashboard/profile"
                              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                              data-tip="My Profile"
                          >
                              <FaUserAlt />
                              <span className="is-drawer-close:hidden">My Profile</span>
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/dashboard/add-crop"
                              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                              data-tip="Add Crop"
                          >
                              <LuTrees />
                              <span className="is-drawer-close:hidden">Add Crop</span>
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/dashboard/my-posts"
                              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                              data-tip="My Posts"
                          >
                              < LuLayoutDashboard />
                              <span className="is-drawer-close:hidden">My Posts</span>
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/dashboard/my-interests"
                              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                              data-tip="My Interests"
                          >
                              <LuSettings />
                              <span className="is-drawer-close:hidden">My Interests</span>
                          </Link>
                      </li>

                      
                      {/* <li>
                          <Link
                              to={`/dashboard/received-interests`}
                              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                              data-tip="Received Interests"
                          >
                              <FaUserAlt />
                              <span className="is-drawer-close:hidden">Received Interests</span>
                          </Link>
                      </li> */}

                      {/* <li>
                          <button
                              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                              data-tip="Settings"
                          >
                              <LuSettings />
                              <span className="is-drawer-close:hidden">Settings</span>
                          </button>
                      </li> */}
                  </ul>
              </div>
          </div>
      </div>
  )
}
