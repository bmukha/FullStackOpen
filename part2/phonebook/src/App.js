import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsDB from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personsDB.getAll().then((response) => setPersons(response.data));
  }, []);

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      // const newPerson = {
      //   name: newName,
      //   number: newNumber,
      //   id: persons.length + 1,
      // };
      // axios
      //   .post('http://10.0.0.110:3001/persons', newPerson)
      //   .then((response) => {
      //     setPersons([...persons, response.data]);
      //   });
    }
    setNewName('');
    setNewNumber('');
  };

  const handleFilter = (event) => setFilter(event.target.value);

  const personsToRender = filter
    ? persons.filter((person) => person.name.toLowerCase().includes(filter))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleAddButtonClick={handleAddButtonClick}
      />
      <h3>Numbers</h3>
      <Persons personsToRender={personsToRender} />
    </div>
  );
};

export default App;
