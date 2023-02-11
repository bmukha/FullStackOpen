import Person from './Person';
const Persons = ({ personsToRender, handleDeleteButtonClick }) => (
  <>
    {personsToRender.map((person) => (
      <Person
        key={person.id}
        person={person}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />
    ))}
  </>
);

export default Persons;
