import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState([]);

  useEffect(() => {
    let apiKey = "0a521eaf234a3a56f45252fac3c737ad";
    let { lon, lat } = props.coordinates;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl)
      .then(response => {
        let dailyData = processForecastData(response.data.list);
        setForecast(dailyData);
      })
      .catch(error => {
        console.error("Error fetching forecast data. Please reload the page.", error);
      });
  }, [props.coordinates]);

  function processForecastData(forecastList) {
    let groupedData = [];
    let currentDate = null;
    let dailyData = { date: null, maxTemp: -Infinity, minTemp: Infinity, weather: [] };

    forecastList.forEach(item => {
      let date = new Date(item.dt * 1000);
      let day = date.getDate();

      if (currentDate === day) {
       
        dailyData.maxTemp = Math.max(dailyData.maxTemp, item.main.temp_max);
        dailyData.minTemp = Math.min(dailyData.minTemp, item.main.temp_min);
      } else {
       
        if (currentDate !== null) {
          groupedData.push(dailyData);
        }

        currentDate = day;
        dailyData = {
          date: date.toLocaleDateString(),
          maxTemp: item.main.temp_max,
          minTemp: item.main.temp_min,
          weather: item.weather,
        };
      }
    });

    if (dailyData.date) {
      groupedData.push(dailyData);
    }

    return groupedData.slice(0, 5);
  }

  if (forecast.length === 0) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map((dailyData, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyData} />
          </div>
        ))}
      </div>
    </div>
  );
}
