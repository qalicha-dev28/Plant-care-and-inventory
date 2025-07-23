// src/components/PlantCard.jsx
import React from "react";
import { Link } from 'react-router-dom';

function PlantCard({ plant, onDeletePlant }) {
    const { id, name, type, image } = plant;

    const handleDeleteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Replaced window.confirm with console.log for demonstration.
        // In a real app, you'd use a custom modal for confirmation.
        console.log(`Attempting to delete ${name} (ID: ${id}).`);
        onDeletePlant(id); // Call the delete function directly
    };

    return (
        <div className="plant-card border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <Link to={`/plants/${id}`} className="flex-grow">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover object-center"
                />
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
                    <p className="text-gray-600 text-sm mb-2">Type: {type}</p>
                </div>
            </Link>

            <div className="p-4 pt-0 flex justify-end">
                <button
                    onClick={handleDeleteClick}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-3 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default PlantCard;