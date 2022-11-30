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
            <h1>65° celcius</h1>
          </div>
          <div className="description">
            <p>Cloudy with a chance of meatballs</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65° celcius</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>20kmh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
