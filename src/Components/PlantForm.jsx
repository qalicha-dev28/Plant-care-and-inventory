import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PlantForm({ onSubmitPlant }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    image: '',
    last_watered: '',
    light_requirements: '',
    care_notes: ''
  });
  const [loadingExisting, setLoadingExisting] = useState(false);
  const [errorExisting, setErrorExisting] = useState(null);

  const API_URL = 'https://pc2-database.onrender.com/plants';
  const isEditMode = !!id;

  useEffect(() => {
    if (isEditMode) {
      setLoadingExisting(true);
      setErrorExisting(null);
      fetch(`${API_URL}/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setFormData(data);
          setLoadingExisting(false);
        })
        .catch(error => {
          console.error("Error fetching plant for edit:", error);
          setErrorExisting(error);
          setLoadingExisting(false);
          console.error('Failed to load plant for editing. Please try again.'); 
          navigate('/plants');
        });
    }
  }, [id, isEditMode, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.type || !formData.image) {
      console.error('Validation failed: Please fill in Name, Type, and Image URL fields.'); 
      return;
    }

    try {
      let method;
      let url;

      if (isEditMode) {
        method = 'PATCH';
        url = `${API_URL}/${id}`;
      } else {
        method = 'POST';
        url = API_URL;
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, Body: ${errorText}`);
      }

      const savedPlant = await response.json();
      onSubmitPlant(savedPlant);

      if (!isEditMode) {
        setFormData({
          name: '',
          type: '',
          image: '',
          last_watered: '',
          light_requirements: '',
          care_notes: ''
        });
      }

      navigate('/plants');

    } catch (error) {
      console.error(`Failed to ${isEditMode ? 'update' : 'add'} plant:`, error); 
    }
  };

  if (isEditMode && loadingExisting) {
    return <div className="text-center p-8 text-gray-700 text-lg">Loading plant data for editing...</div>;
  }

  if (isEditMode && errorExisting) {
    return <div className="text-center p-8 text-red-600 text-lg">Error loading plant for edit: {errorExisting.message}</div>;
  }

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
        {isEditMode ? 'Edit Plant' : 'Add New Plant'}
      </h2>
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
          {isEditMode ? 'Update Plant' : 'Add Plant'}
        </button>
      </form>
    </div>
  );
}

export default PlantForm;