import React from 'react';
import PlantCard from './PlantCard.jsx';

function PlantList({ plants, onDeletePlant }) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">My Plant Collection</h2>

      {plants.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No plants in your collection yet. Go to "Add New Plant" to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map(plant => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onDeletePlant={onDeletePlant}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PlantList;