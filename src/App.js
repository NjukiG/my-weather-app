import React, { useState } from "react";
function App() {

  const URL = "https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=146dfe8931b293b83b1f72db06ef1d0c"
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <h3>Nairobi</h3>
          </div>
          <div className="temp">
            <h1>65°C</h1>
          </div>
          <div className="description">
            <p>Cloudy/ Rainy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">20kmh</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
