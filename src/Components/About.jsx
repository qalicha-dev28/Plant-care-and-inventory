import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md mt-8 max-w-3xl">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-6">
        About Plant Care Tracker
      </h2>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        The Plant Care Tracker is a passion project built to help plant enthusiasts
        like you manage and nurture your beloved green companions. As your plant
        collection grows, it can become challenging to remember the specific needs
        of each individual plant – from watering schedules to light preferences and
        unique care notes.
      </p>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        This application provides a centralized, easy-to-use digital inventory for
        all your houseplants. You can add new plants, store their essential details,
        and quickly access care instructions, ensuring every plant in your collection
        thrives.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Built with modern web technologies including React for the frontend and
        a simple JSON server for data storage, this app demonstrates key concepts
        of single-page application development, component-based architecture,
        client-side routing, and API integration.
      </p>
    
    </div>
  );
}

export default About;