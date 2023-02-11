import { useState } from 'react';
import Country from './Country';

const CountryInList = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowButtonClick = () => setShowDetails(!showDetails);

  return (
    <div>
      <div key={country.name.common}>
        <span>{country.name.common}</span>
        <button onClick={handleShowButtonClick}>
          {showDetails ? 'hide' : 'show'}
        </button>
        {showDetails ? <Country country={country} /> : null}
      </div>
    </div>
  );
};
export default CountryInList;
