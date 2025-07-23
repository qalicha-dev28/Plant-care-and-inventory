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
      alert('Please fill in Name, Type, and Image fields.');
      return;
    }

    const newPlantWithTempId = { ...formData, id: Date.now() };

    try {
      await onAddPlant(newPlantWithTempId); 
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

  const formStyle = {
    maxWidth: '500px',
    margin: '30px auto',
    padding: '25px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const inputGroupStyle = {
    marginBottom: '15px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  };

  const inputStyle = {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1em'
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '80px'
  };

  const buttonStyle = {
    backgroundColor: '#749276',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1em',
    marginTop: '10px'
  };

  return (
    <div style={formStyle}>
      <h2>Add New Plant</h2>
      <form onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Plant Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="type" style={labelStyle}>Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="image" style={labelStyle}>Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="last_watered" style={labelStyle}>Last Watered (YYYY-MM-DD):</label>
          <input
            type="date"
            id="last_watered"
            name="last_watered"
            value={formData.last_watered}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="light_requirements" style={labelStyle}>Light Requirements:</label>
          <input
            type="text"
            id="light_requirements"
            name="light_requirements"
            value={formData.light_requirements}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label htmlFor="care_notes" style={labelStyle}>Care Notes:</label>
          <textarea
            id="care_notes"
            name="care_notes"
            value={formData.care_notes}
            onChange={handleChange}
            style={textareaStyle}
          ></textarea>
        </div>

        <button type="submit" style={buttonStyle}>Add Plant</button>
      </form>
    </div>
  );
}

export default AddPlantForm;