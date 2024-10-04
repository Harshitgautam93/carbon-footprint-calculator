// src/App.js

import React, { useState } from 'react';
import './App.css'; // We'll add basic styling here
import Preloader from './Preloader'; // Import Preloader component

function App() {
  // State for the inputs (Transportation, Electricity, etc.)
  const [transportation, setTransportation] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [waste, setWaste] = useState(0);
  
  // State to control preloader visibility
  const [loading, setLoading] = useState(true);

  // Function to calculate the total carbon footprint
  const calculateCO2 = () => {
    const transportationCO2 = transportation * 0.21; // Transportation CO2
    const electricityCO2 = electricity * 0.527;     // Electricity CO2
    const wasteCO2 = waste * 0.2;                   // Waste CO2
    return transportationCO2 + electricityCO2 + wasteCO2;
  };

  // Function to hide preloader
  const handleLoadComplete = () => {
    setLoading(false); // Hide preloader
  };

  return (
    <div className="App">
      {loading && <Preloader onLoadComplete={handleLoadComplete} />}
      
      {/* Background Video Section */}
      <section className={`background-video-section ${loading ? 'hidden' : ''}`}>
        <video autoPlay muted loop id="background-video">
          <source src="background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Content overlay on the video */}
        <div className="content">
          <h1>Carbon Footprint Calculator</h1>
          
          {/* Transportation Input */}
          <div className="input-section">
            <h3>Transportation</h3>
            <label>Distance traveled by car (km per week):</label>
            <input
              type="number"
              value={transportation}
              onChange={(e) => setTransportation(e.target.value)}
            />
          </div>
          
          {/* Electricity Input */}
          <div className="input-section">
            <h3>Electricity Usage</h3>
            <label>Electricity used per month (kWh):</label>
            <input
              type="number"
              value={electricity}
              onChange={(e) => setElectricity(e.target.value)}
            />
          </div>

          {/* Waste Input */}
          <div className="input-section">
            <h3>Waste Production</h3>
            <label>Waste produced per week (kg):</label>
            <input
              type="number"
              value={waste}
              onChange={(e) => setWaste(e.target.value)}
            />
          </div>

          {/* Button to calculate footprint */}
          <div>
            <button onClick={() => alert(`Your carbon footprint is ${calculateCO2().toFixed(2)} kg CO2 per year`)}>
              Calculate Footprint
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
