import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
function handleResponse(response) {
    console.log(response.data);
}
console.log(props);

    let apiKey = "67a08e61017984c2bbf49beb981b5d89";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
            <div className="col">
               <div className="WeatherForecastDay">Thu</div>
               <WeatherIcon code="01d" size={36}/>
               <div className="WeatherForecastTemperatures"> 
               <span className="WeatherForecastTemperatureMax">19° </span>
               <span className="WeatherForecastTemperatureMin">18°</span>
               </div>
            </div>
            </div>
        </div>
    )
}



