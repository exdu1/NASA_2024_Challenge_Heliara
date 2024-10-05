import React from 'react';


const WeatherDisplay = () => {

    const weatherInfo = {
      temperature: '',
      feelsLike: '',
      humidity: '',
      windSpeed: '',
      visibility: '',
      uvIndex: '',
      pressure: '',
      precipitation: '',
      description: ''
    };
  
    return (
      <div className="weather-display">
        <h2>Current Weather</h2>
        <img src="" alt="Weather Icon" className="weather-icon" />
        <div className="weather-info-grid">
          <div className="weather-info-row">
            <span>Temperature:</span>
            <span>{weatherInfo.temperature}</span>
          </div>
          <div className="weather-info-row">
            <span>Feels Like:</span>
            <span>{weatherInfo.feelsLike}</span>
          </div>
          <div className="weather-info-row">
            <span>Humidity:</span>
            <span>{weatherInfo.humidity}</span>
          </div>
          <div className="weather-info-row">
            <span>Wind Speed:</span>
            <span>{weatherInfo.windSpeed}</span>
          </div>
          <div className="weather-info-row">
            <span>Visibility:</span>
            <span>{weatherInfo.visibility}</span>
          </div>
          <div className="weather-info-row">
            <span>UV Index:</span>
            <span>{weatherInfo.uvIndex}</span>
          </div>
          <div className="weather-info-row">
            <span>Pressure:</span>
            <span>{weatherInfo.pressure}</span>
          </div>
          <div className="weather-info-row">
            <span>Precipitation:</span>
            <span>{weatherInfo.precipitation}</span>
          </div>
          <div className="weather-info-row">
            <span>Description:</span>
            <span>{weatherInfo.description}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherDisplay;