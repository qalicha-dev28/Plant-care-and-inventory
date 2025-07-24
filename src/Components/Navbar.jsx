import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-green-200 transition-colors duration-200">
          Plant Tracker
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-green-200 transition-colors duration-200">
            Home
          </Link>
          <Link to="/plants" className="text-white hover:text-green-200 transition-colors duration-200">
            My Plants
          </Link>
          <Link to="/add-plant" className="text-white hover:text-green-200 transition-colors duration-200">
            Add New Plant
          </Link>
          <Link to="/about" className="text-white hover:text-green-200 transition-colors duration-200">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;