import axios from 'axios';

const url = 'http://10.0.0.110';
const port = '3001';

const getAll = () => axios.get(`${url}:${port}/persons`);

const addPerson = (newPerson) =>
  axios.post(`${url}:${port}/persons`, newPerson);

const deletePerson = (id) => axios.delete(`${url}:${port}/persons/${id}`);

const personService = { getAll, addPerson, deletePerson };

export default personService;
