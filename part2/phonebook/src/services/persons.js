import axios from 'axios';

const url = 'http://localhost';
const port = '3001';

const getAll = () => axios.get(`${url}:${port}/api/persons`);

const addPerson = (newPerson) =>
  axios.post(`${url}:${port}/api/persons`, newPerson);

const deletePerson = (id) => axios.delete(`${url}:${port}/api/persons/${id}`);

const updatePersonsNumber = (id, person) =>
  axios.put(`${url}:${port}/api/persons/${id}`, person);

const personService = { getAll, addPerson, deletePerson, updatePersonsNumber };

export default personService;
