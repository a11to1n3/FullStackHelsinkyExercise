import React, { useState } from "react";

const PersonForm = ({persons, setPersons}) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const addContact = event => {
    event.preventDefault();
    const newContact = { name: newName, number: newNumber };
    persons.find(person => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
      } else {
        setPersons(persons.concat(newContact));
        setNewName("");
      }
    });
  };

  return (
    <form onSubmit={addContact}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
