import React from 'react';
import './App.css';
import CityCard from './CityCard';
import CitiesWeather from './city-weather.json';


function App() {


  return (
    <div className="App">
      <h1>Weather</h1>
      {CitiesWeather.map(cityWeather => (

        <CityCard
          cityName={cityWeather.name}
          countryName={cityWeather.sys.country}
          weatherMain={cityWeather.weather[0].main}
          weatherDesc={cityWeather.weather[0].description}
          minTemp={cityWeather.main.temp_min}
          maxTemp={cityWeather.main.temp_max}
          long={cityWeather.coord.lon}
          lat={cityWeather.coord.lat}
        />
      ))}

    </div>
  );
}

export default App;
