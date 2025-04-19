import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
  
        <h1>San Diego</h1>
        <ul>
          <li>Wednesday 07:00 PM</li>
          <li>Mostly Cloudy</li>
        </ul>
  
        <div className="row mt-3">
          <div className="col-6">
            <div className="temperature-wrapper">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
              className="weather-icon"
            />
            <div className="float-left">
            <span className="temperature">64</span>
            <span className="unit">°F</span>
            </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="weather-details">
              <li>Precipitation: 0%</li>
              <li>Humidity: 61%</li>
              <li>Wind: 9 mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  