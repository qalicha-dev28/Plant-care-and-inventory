import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PlantDetail() {
  const { id } = useParams(); // Get the ID from the URL parameter
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:3000/plants';

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setPlant(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
        console.error("Error fetching plant details:", err);
      });
  }, [id]); // Re-fetch if ID changes

  if (loading) return <div style={{ textAlign: 'center', padding: '20px' }}>Loading plant details...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>Error: {error.message}</div>;
  if (!plant) return <div style={{ textAlign: 'center', padding: '20px' }}>Plant not found.</div>;

  const detailContainerStyle = {
    maxWidth: '800px',
    margin: '30px auto',
    padding: '25px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const detailImageStyle = {
    maxWidth: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px'
  };

  const detailTextStyle = {
    textAlign: 'left',
    width: '100%'
  };

  return (
    <div style={detailContainerStyle}>
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} style={detailImageStyle} />
      <div style={detailTextStyle}>
        <p><strong>Type:</strong> {plant.type}</p>
        <p><strong>Last Watered:</strong> {plant.last_watered}</p>
        <p><strong>Light Requirements:</strong> {plant.light_requirements}</p>
        <p><strong>Care Notes:</strong> {plant.care_notes}</p>
      </div>
    </div>
  );
}

export default PlantDetail;