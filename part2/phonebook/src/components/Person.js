const Person = ({ person, handleDeleteButtonClick }) => (
  <div key={person.id}>
    <span>
      {person.name} {person.number}
    </span>
    <button onClick={handleDeleteButtonClick} data-key={person.id}>
      delete
    </button>
  </div>
);

export default Person;
