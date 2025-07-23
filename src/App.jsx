// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PlantList from './components/PlantList';
import PlantDetail from './components/PlantDetail';
import PlantForm from './components/PlantForm';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:3000/plants';

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPlants(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching plants:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  const handleDeletePlant = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setPlants((prevPlants) => prevPlants.filter(plant => plant.id !== id));
      console.log(`Plant with ID ${id} deleted successfully.`); // Log success
    } catch (error) {
      console.error('Failed to delete plant:', error); // Log error
    }
  };

  const handleUpdatePlant = (updatedPlant) => {
    setPlants((prevPlants) =>
      prevPlants.map(plant => (plant.id === updatedPlant.id ? updatedPlant : plant))
    );
    console.log(`Plant with ID ${updatedPlant.id} updated successfully.`); // Log success
  };

  if (loading) {
    return <div className="text-center p-4 text-gray-700">Loading plants...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-600">Error: {error.message}</div>;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/plants"
              element={<PlantList plants={plants} onDeletePlant={handleDeletePlant} />}
            />
            <Route
              path="/plants/:id"
              element={<PlantDetail onDeletePlant={handleDeletePlant} />}
            />
            <Route
              path="/add-plant"
              element={<PlantForm onSubmitPlant={handleAddPlant} />}
            />
            <Route
              path="/plants/:id/edit"
              element={<PlantForm onSubmitPlant={handleUpdatePlant} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h2 className="text-center text-2xl text-gray-700 mt-10">404 - Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;