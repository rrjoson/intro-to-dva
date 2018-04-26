import React from 'react';

const WeatherDisplay = (props) => {
  const { weatherData } = props;

  if (weatherData === null) return null;

  return (
    <div>
      <h1>{weatherData.weather[0].main} in {weatherData.name}</h1>
      <p>Current: {weatherData.main.temp}°</p>
      <p>High: {weatherData.main.temp_max}°</p>
      <p>Low: {weatherData.main.temp_min}°</p>
      <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
    </div>
  );
};

export default WeatherDisplay;
