import React from 'react';
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-[calc(100vh-64px)] p-4 text-center bg-gradient-to-br from-green-50 to-emerald-100">
      <h1 className="text-5xl font-extrabold text-green-800 mb-6 drop-shadow-md">
        Welcome to Your Plant Tracker!
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl">
        Manage your beloved plant collection with ease. Keep track of watering schedules,
        light requirements, and special care notes for every plant.
      </p>

      <div className="space-x-4">
        <Link
          to="/plants"
          className="inline-block bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
        >
          View My Plants
        </Link>
        <Link
          to="/add-plant"
          className="inline-block bg-emerald-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300"
        >
          Add a New Plant
        </Link>
      </div>

      <div className="mt-12">
        <img
          src="https://images.unsplash.com/photo-1596899783948-6849b96ffeec?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Illustration of happy houseplants"
          className="rounded-lg shadow-xl max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Home;