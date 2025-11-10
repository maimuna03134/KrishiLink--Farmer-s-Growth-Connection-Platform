import React from 'react';
import { NavLink } from 'react-router';

const MyLinks = ({ to, children, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `bg-linear-to-br from-orange-400 to-orange-600 text-white px-3 py-2 rounded-md font-semibold shadow-sm ${className}`
          : `text-orange-600 hover:text-orange-700 px-3 py-2 font-semibold rounded-md transition ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;