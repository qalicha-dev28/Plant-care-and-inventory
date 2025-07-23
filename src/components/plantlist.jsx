import React from "react";
import PlantCard from "./plantcard";

function PlantList({ plants }) {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Plant Inventory</h2>

            {plants.length === 0 ? (
                <p className="text-center text-gray-600">No plants found. Please add some plants to your inventory.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {plants.map((plant) => (
                        <PlantCard key={plant.id} plant={plant} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default PlantList;
