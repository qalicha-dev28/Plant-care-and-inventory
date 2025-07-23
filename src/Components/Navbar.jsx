import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';


function Navbar() {
  const baseLinkClasses = "px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200";
  const defaultLinkClasses = `${baseLinkClasses} bg-green-700 text-green-100 hover:bg-green-600`;
  const activeLinkClasses = `${baseLinkClasses} bg-green-300 text-green-900`; // Lighter green for active tab

  return (
    <nav className="flex items-center justify-between p-4 bg-green-900 shadow-lg">
      <h1 className="text-3xl font-extrabold text-green-100">
        🪴 Tracker
      </h1>
      <div className="flex space-x-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeLinkClasses : defaultLinkClasses
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            isActive ? activeLinkClasses : defaultLinkClasses
          }
        >
          My Plants
        </NavLink>
        <NavLink
          to="/add-plant"
          className={({ isActive }) =>
            isActive ? activeLinkClasses : defaultLinkClasses
          }
        >
          Add Plant
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;