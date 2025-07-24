import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PlantDetail({ onDeletePlant }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://pc2-database.onrender.com/plants';

  useEffect(() => {
    const fetchPlant = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            setPlant(null);
            return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlant(data);
      } catch (err) {
        console.error("Error fetching plant details:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPlant();
    }
  }, [id]);

  const formattedLastWatered = plant?.last_watered
    ? new Date(plant.last_watered).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'N/A';

  const handleDeleteClick = () => {
    console.log(`Attempting to delete ${plant.name} (ID: ${plant.id}) from detail page.`);
    onDeletePlant(plant.id); 
    navigate('/plants'); 
  };

  if (loading) {
    return (
      <div className="text-center p-8 text-gray-700 text-lg">
        Loading plant details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-600 text-lg">
        Error: {error.message}
        <p className="mt-4">
          <button
            onClick={() => navigate('/plants')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Go back to Plants List
          </button>
        </p>
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="text-center p-8 text-gray-600 text-lg">
        Plant not found.
        <p className="mt-4">
          <button
            onClick={() => navigate('/plants')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Go back to Plants List
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl bg-white rounded-lg shadow-xl mt-8">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md transition-colors duration-200"
        >
          &larr; Back to Plants
        </button>
        <div className="space-x-2">
          <button
            onClick={() => navigate(`/plants/${plant.id}/edit`)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Edit Plant
          </button>
          <button
            onClick={handleDeleteClick}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Delete Plant
          </button>
        </div>
      </div>

      <div className="md:flex md:space-x-8">
        <div className="md:w-1/2">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-4xl font-extrabold text-green-800 mb-4">{plant.name}</h2>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Type:</span> {plant.type}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Last Watered:</span> {formattedLastWatered}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Light Requirements:</span> {plant.light_requirements || 'N/A'}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Care Notes:</span> {plant.care_notes || 'No specific notes.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlantDetail;