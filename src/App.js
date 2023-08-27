import React from 'react';
import Weather from "./Weather";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="New York"/>
   <footer>
   This project was coded by Zuzana Hušeková and {" "}  
    <a href="https://github.com/zuzhus/react-weather-app" target="_blank" rel="noreferrer"
    > open-sourced on GitHub </a></footer></div>
  </div>);
  
}


