import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeatherData = async () => {
    try {
      const username = process.env.REACT_APP_METEOMATICS_USERNAME;
      const apiKey = process.env.REACT_APP_METEOMATICS_API_KEY;
      const auth = btoa(`${username}:${apiKey}`);

      const response = await axios.get('https://api.meteomatics.com/2024-10-01T19:25:00.000-04:00--2024-10-05T19:25:00.000-04:00:PT1H/t_5cm:C/43.8554425,-79.6392832_43.5796082,-79.1132193:0.1,0.1/json?model=m', {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });
      const data = response.data;
      setWeatherData(data);
  
      console.log('Weather Data:', data);
  
      data.data.forEach((entry, index) => {
        console.log(`Entry ${index + 1}:`);
        entry.coordinates.forEach((coordinate, idx) => {
          console.log(`  Coordinate ${idx + 1}: Lat: ${coordinate.lat}, Lon: ${coordinate.lon}`);
          coordinate.dates.forEach((dateEntry, dateIdx) => {
            console.log(`    Date: ${dateEntry.date}`);
            console.log(`    Temperature (2m): ${dateEntry.temperature_2m}°C`);
            console.log(`    Max Temperature (24h): ${dateEntry.max_temperature_24h}°C`);
            console.log(`    Min Temperature (24h): ${dateEntry.min_temperature_24h}°C`);
            console.log(`    Pressure: ${dateEntry.pressure} hPa`);
            console.log(`    Precipitation (1h): ${dateEntry.precipitation_1h} mm`);
            console.log(`    Precipitation (24h): ${dateEntry.precipitation_24h} mm`);
            console.log(`    Wind Speed (10m): ${dateEntry.wind_speed_10m} m/s`);
            console.log(`    Wind Direction (10m): ${dateEntry.wind_direction_10m}°`);
            console.log(`    Wind Gusts (1h): ${dateEntry.wind_gusts_1h} m/s`);
            console.log(`    Wind Gusts (24h): ${dateEntry.wind_gusts_24h} m/s`);
            console.log(`    Weather Symbol (1h): ${dateEntry.weather_symbol_1h}`);
            console.log(`    Weather Symbol (24h): ${dateEntry.weather_symbol_24h}`);
            console.log(`    UV Index: ${dateEntry.uv_index}`);
            console.log(`    Sunrise: ${dateEntry.sunrise}`);
            console.log(`    Sunset: ${dateEntry.sunset}`);
          });
        });
      });
    } catch (error) {
      setError('Error fetching weather data');
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {weatherData && <pre>{JSON.stringify(weatherData, null, 2)}</pre>}
    </div>
  );
};

export default WeatherDisplay;