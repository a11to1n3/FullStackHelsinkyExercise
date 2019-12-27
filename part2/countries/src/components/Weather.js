import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const YOUR_ACCESS_KEY = "";
  const [temperature, setTemperature] = useState("");
  const [icon, setIcon] = useState('');
  const [wind, setWind] = useState('');

  const params = {
    access_key: YOUR_ACCESS_KEY,
    query: { country }
  };

  const hookWeather = () => {
    axios
      .get("http://api.weatherstack.com/current", { params })
      .then(response => {
        console.log(response.data);
        setTemperature(response.data.current.temperature);
        setIcon(response.data.current.weather_icons[0]);
        setWind(response.data.current.wind_speed + " kph direction " + response.data.current.wind_dir);
  })};

  useEffect(hookWeather, []);

  return (
    <div>
      <p><b>temperature: </b>{temperature} Celcius</p>
      <img src = {icon} />
      <p><b>wind: </b>{wind}</p>
    </div>
  );
};

export default Weather;
