import Person from './Person';
const Persons = ({ personsToRender }) => (
  <>
    {personsToRender.map((person) => (
      <Person key={person.id} person={person} />
    ))}
  </>
);

export default Persons;
