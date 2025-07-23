import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPlantForm({ onAddPlant }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    image: '',
    last_watered: '',
    light_requirements: '',
    care_notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!formData.name || !formData.type || !formData.image) {
      
      console.error('Please fill in Name, Type, and Image fields.');
      
      alert('Please fill in Name, Type, and Image fields.'); 
      return;
    }


    try {
      const response = await fetch('http://localhost:3000/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlantForServer),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const addedPlant = await response.json(); 
      
      onAddPlant(addedPlant);
      
      setFormData({
        name: '',
        type: '',
        image: '',
        last_watered: '',
        light_requirements: '',
        care_notes: ''
      });

      
      navigate('/plants');

    } catch (error) {
      console.error('Error adding plant:', error);
      alert('Failed to add plant. Please try again.'); 
    }
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Add New Plant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Plant Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
            required
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
            required
          />
        </div>

        <div>
          <label htmlFor="last_watered" className="block text-gray-700 text-sm font-bold mb-2">Last Watered (YYYY-MM-DD):</label>
          <input
            type="date"
            id="last_watered"
            name="last_watered"
            value={formData.last_watered}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
          />
        </div>

        <div>
          <label htmlFor="light_requirements" className="block text-gray-700 text-sm font-bold mb-2">Light Requirements:</label>
          <input
            type="text"
            id="light_requirements"
            name="light_requirements"
            value={formData.light_requirements}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
          />
        </div>

        <div>
          <label htmlFor="care_notes" className="block text-gray-700 text-sm font-bold mb-2">Care Notes:</label>
          <textarea
            id="care_notes"
            name="care_notes"
            value={formData.care_notes}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500 h-24 resize-y"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200 w-full"
        >
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default AddPlantForm;