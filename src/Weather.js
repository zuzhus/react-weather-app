import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState ({ready:false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse (response) {
        //console.log(response.data);

        setWeatherData({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            });
            
        

    }

function search() {
    let apiKey = "67a08e61017984c2bbf49beb981b5d89";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search(city);
    }
    
function handleCityChange(event){
    setCity(event.target.value);
    
}

if (weatherData.ready) {
     return ( 
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..." 
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
            
           <WeatherInfo data={weatherData}/>
            <WeatherForecast/>
            </div>
    );
} else {
    search();
       return "Loading...";
}
}