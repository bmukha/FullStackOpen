import axios from 'axios';

const url = 'api/persons';

const getAll = () => axios.get(url);

const addPerson = (newPerson) => axios.post(url, newPerson);

const deletePerson = (id) => axios.delete(`${url}/${id}`);

const updatePersonsNumber = (id, person) => axios.put(`${url}/${id}`, person);

const personService = { getAll, addPerson, deletePerson, updatePersonsNumber };

export default personService;
