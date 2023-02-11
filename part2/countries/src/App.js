import axios from 'axios';
import { useState, useEffect } from 'react';
import Country from './components/Country';
import CountryInList from './components/CountryInList';

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
        <CountryInList key={country.name.common} country={country} />
      ));
    }

    if (countriesToRender.length === 1) {
      const [country] = countriesToRender;
      return <Country country={country} />;
    }
  };

  return (
    <>
      <h1>Countries</h1>
      <form>
        <label htmlFor=''>find countries: </label>
        <input type='text' value={query} onChange={handleChange} />
      </form>
      {renderCountries()}
    </>
  );
};

export default App;
