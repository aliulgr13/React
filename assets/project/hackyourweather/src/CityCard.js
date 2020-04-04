import React from 'react';

function CityCard(props) {

    //const { cityName, countryName, weatherMain, weatherDesc, maxTemp, minTemp, long, lat } = props;

    return (
        <div className="card">
            <h1>{props.cityName}, {props.countryName}</h1>
            <h2>{props.weatherMain}</h2>
            <h3>{props.weatherDesc}</h3>
            <h3>min temp: {props.minTemp} °C</h3>
            <h3>max temp:  {props.maxTemp} °C</h3>
            <h3>location: {props.long}, {props.lat} </h3>
        </div>

    );
}

export default CityCard