import { useEffect, useState } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setWeather({
          temperature: response.data.main.temp,
          wind: response.data.wind.speed,
          iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
      });
  }, [country.name.common]);

  return (
    <>
      <h2>{country.name.common}</h2>
      <p>{`Capital: ${country.capital[0]}`}</p>
      <p>{`Area: ${country.area}`}</p>
      <h4>Languages:</h4>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`flag of ${country.name}`}
        width='200px'
      />
      {weather ? (
        <>
          <h3>Weather in {country.capital[0]}</h3>
          <p>temperature: {weather.temperature} Celsius</p>
          <img
            src={weather.iconURL}
            alt={`weather in ${country.capital[0]}`}
            width='100px'
          />
          <p>wind: {weather.wind} m/s</p>
        </>
      ) : null}
    </>
  );
};
export default Country;
