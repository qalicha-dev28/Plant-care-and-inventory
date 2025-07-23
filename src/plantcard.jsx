import React from "react";


function PlantCard({ plant }) { 
    const { id, name, type, image, last_watered, light_requirements, care_notes } = plant;

    return ( 
        <div className="plant-card border rounded-lg shadow-md overflow-hidden bg-white">
            <link to={`/plants/${id}`}>
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />
            </link>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-600 mb-2">Type: {type}</p>
                
                <div className="mt-4">
                    <link
                        to={`/plants/${id}`}
                        className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
                    >
                        View Details
                    </link>
                </div>
            </div>
        </div>
    );
}