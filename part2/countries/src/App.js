import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState(null);
  const [countriesToRender, setCountriesToRender] = useState(null);

  const handleChange = ({ target }) => {
    setQuery(target.value);
    if (target.value) {
      setCountriesToRender(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(target.value.toLowerCase())
        )
      );
    } else {
      setCountriesToRender(null);
    }
  };

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setCountries(response.data);
    });
  }, []);

  const renderCountries = () => {
    if (!countriesToRender) {
      return;
    }

    if (countriesToRender.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }

    if (countriesToRender.length > 1 && countriesToRender.length <= 10) {
      return countriesToRender.map((country) => (
        <p key={country.name.common}>{country.name.common}</p>
      ));
    }

    if (countriesToRender.length === 1) {
      const [country] = countriesToRender;
      return (
        <>
          <h2>{country.name.common}</h2>
          <p>{`Capital: ${country.capital[0]}`}</p>
          <p>{`Area: ${country.area}`}</p>
          <h3>Languages:</h3>
          <ul>
            {Object.values(country.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={`flag of ${country.name}`} />
        </>
      );
    }
  };

  return (
    <>
      <h1>Countries</h1>
      <form>
        <label htmlFor=''>find countries: </label>
        <input type='text' value={query} onChange={handleChange} />
        {renderCountries()}
      </form>
    </>
  );
};

export default App;
