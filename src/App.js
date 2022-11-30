import axios from "axios";
import React, { useState } from "react";
function App() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=146dfe8931b293b83b1f72db06ef1d0c`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(URL).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  // const searchLocation = (e) => {
  //   if (e.key === "Enter") {
  //     fetch(URL)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //       setLocation("");
  //   }

  // };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a city"
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h3>{data.name}</h3>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </div>
        </div>

        {data.name != undefined &&  <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
            
            <p>Feels Like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed}km/h</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>}

       
      </div>
    </div>
  );
}

export default App;
