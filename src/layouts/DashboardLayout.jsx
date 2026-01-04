import React from 'react'

export default function DashboardLayout() {
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
                          <button
                              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                              data-tip="Settings"
                          >
                              <LuSettings />
                              <span className="is-drawer-close:hidden">Settings</span>
                          </button>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  )
}
