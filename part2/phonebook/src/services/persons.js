import axios from 'axios';

const url = 'http://localhost';
const port = '3001';

const getAll = () => axios.get(`${url}:${port}/persons`);

const add = (newPerson) => axios.post(`${url}:${port}/persons`, newPerson);

const persons = { getAll, add };

export default persons;
