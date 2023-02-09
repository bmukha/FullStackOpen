import axios from 'axios';

const url = 'http://localhost';
const port = '3001';

const getAll = () => axios.get(`${url}:${port}/persons`);

// const handleAddButtonClick = (event) => {
//   event.preventDefault();
//   if (persons.some((person) => person.name === newName)) {
//     alert(`${newName} is already added to phonebook`);
//   } else {
//     const newPerson = {
//       name: newName,
//       number: newNumber,
//       id: persons.length + 1,
//     };
//     axios.post('http://10.0.0.110:3001/persons', newPerson).then((response) => {
//       setPersons([...persons, response.data]);
//     });
//   }
//   setNewName('');
//   setNewNumber('');
// };

const persons = { getAll };

export default persons;
