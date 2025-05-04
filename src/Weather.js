import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setweatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  useEffect(() => {
    search();
        // eslint-disable-next-line
  }, []);

    function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name
  });
  }

function search() {
  const apiKey = "0a521eaf234a3a56f45252fac3c737ad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
function handleCityChange(event) {
    setCity(event.target.value);
}

  if (weatherData.ready) {
  return (
      <div className="Weather">
        <form className="weathersearch" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City for Temperatures..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100 custom-search-button" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
       
      </div>
    );
  } else {
    return "Loading Weather Data...";
  }
}
  