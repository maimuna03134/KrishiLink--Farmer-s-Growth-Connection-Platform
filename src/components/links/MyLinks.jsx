import React from 'react';
import { NavLink } from 'react-router';

const MyLinks = ({ to, children, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `bg-green-100 hover:bg-green-600 hover:text-green-100 text-green-700 px-2 py-2 rounded-full font-semibold shadow-sm transition ${className}`
          : `text-green-600 hover:text-green-700 px-3 py-2 font-semibold rounded-md transition ${className}`
      }
    >
      {children}
    </NavLink>
  );
};



export default MyLinks;