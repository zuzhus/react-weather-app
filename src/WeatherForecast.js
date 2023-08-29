import React, { useState , useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);
function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
}

useEffect(() => {
    setLoaded(false);
}, [props.coordinates]);

    
if (loaded) {

    return (
    <div className="WeatherForecast mt-5" >
        <div className="row">
            {forecast.map(function(dailyForecast,index) {
            if (index < 6) {
                return (
                    <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast}/>
                    </div>
                );
                }
                else return null;
            })}
        
        </div>
    </div>
    );
    }else{
    let apiKey = "17ad6e67aa629189f73b053634668b20";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return null;
}

   
}



