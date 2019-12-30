import React, { useState } from "react";
import personServices from "../PersonServices";

const PersonForm = ({ persons, setPersons }) => {
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
    const newContact = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };
    let nameList = "";
    let id = "";
    nameList= persons.find(person => {
      if (person.name === newName) {
        return newName;
      }
    });
    id = persons.find(person => {
      if (person.name === newName) {
        return person;
      }
    }).id;
    console.log(id)
    if (window.confirm(`${nameList} is already added to phonebook, replace the old number with a new one?`)) {
      personServices
        .update(id,newContact)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id
            ? person
            : returnedPerson));
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      personServices
        .create(newContact)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
        })
        .catch(error => {
          console.log(error);
        });
    }
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
