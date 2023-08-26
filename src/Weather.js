import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState ({});
    function handleResponse (response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
    }

if (ready) {
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
            <input 
            type="submit" 
            value="Search" 
            className="btn btn-primary w-100"
            />
            </div>
            </div>
            </form>
           
            <h1>{city}</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>{description}</li>
                </ul>
                
          <div className="row mt-3">
            <div className="col-8">
                <div className="clearfix">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                    alt="Mostly cloudy"
                    className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">{Math.round(temperature)}</span>
                    <span className="unit">°C</span>
                </div>
                </div>
                </div> 
         <div className="col-4">
                <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 72%</li>
                    <li>Wind: {wind} km/h</li>
                </ul>
            </div>
            </div>
            </div>
    );
} else {
    let apiKey = "67a08e61017984c2bbf49beb981b5d89";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}