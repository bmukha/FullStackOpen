import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [infoMessage, setInfoMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((response) => setPersons(response.data));
  }, []);

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      const replaceNUmberOrNot = window.confirm(
        `${newName} is already added to phonebook, replace the old number with new one?`
      );
      if (replaceNUmberOrNot) {
        personService
          .updatePersonsNumber(existingPerson.id, {
            ...existingPerson,
            number: newNumber,
          })
          .then((response) => {
            setPersons([
              ...persons.filter((person) => person.id !== existingPerson.id),
              response.data,
            ]);
            setInfoMessage(`Phone number for ${response.data.name} changed`);
            setTimeout(() => {
              setInfoMessage(null);
            }, 5000);
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      personService.addPerson(newPerson).then((response) => {
        setPersons([...persons, response.data]);
        setInfoMessage(`Added ${response.data.name}`);
        setTimeout(() => {
          setInfoMessage(null);
        }, 5000);
      });
    }
    setNewName('');
    setNewNumber('');
  };

  const handleDeleteButtonClick = (event) => {
    const key = +event.target.dataset.key;
    const person = persons.find((person) => person.id === key);
    const deleteOrNot = window.confirm(`Delete ${person.name}?`);
    if (!deleteOrNot) {
      return;
    }
    personService.deletePerson(key);
    setPersons(persons.filter((person) => person.id !== key));
  };

  const handleFilter = (event) => setFilter(event.target.value);

  const personsToRender = filter
    ? persons.filter((person) => person.name.toLowerCase().includes(filter))
    : persons;

  return (
    <div>
      <Notification message={infoMessage} type='info' />
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
      <Persons
        personsToRender={personsToRender}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />
    </div>
  );
};
export default App;
