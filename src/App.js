import axios from "axios";
import React, { useState } from "react";
function App() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=146dfe8931b293b83b1f72db06ef1d0c`;

  // const searchLocation = (e) => {
  //   if (e.key === "Enter") {
  //     axios.get(URL).then((res) => {
  //       setData(res.data);
  //       console.log(res.data);
  //     });
  //     setLocation("");
  //   }
  // };

  const getLocation = (e) => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      });
      setLocation("")
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="ENter a city"
          onKeyDown={getLocation}
        />
      </div>
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
