import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast () {
    return <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecas-day">Thu</div>
                <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecas-temperature-max">19°</span>
                    <span className="WeatherForecase-temperature-max">10°</span>
                 </div>
            </div>
        </div>
    </div>
}