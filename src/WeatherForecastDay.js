import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.maxTemp);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.minTemp);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.date);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
        <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
