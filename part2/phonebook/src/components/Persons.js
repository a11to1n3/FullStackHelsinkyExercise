import React, { useState } from "react";
import axios from "axios";

const Persons = ({ per, setPer }) => {
  const deleteContact = people => {
    if (window.confirm(`Delete ${people.person.id}?`)) {
      setPer(
        per.filter(person => {
          if (person.name !== people.person.name) {
            return person;
          }
        })
      );
      axios.delete(`http://localhost:3001/persons/${people.person.id}`);
    }
  };

  const Person = ({ person }) => {
    return (
      <div>
        {person.name} {person.number}
        <button
          onClick={() => {
            deleteContact({ person });
          }}
        >
          delete
        </button>
        <br />
      </div>
    );
  };

  const rows = () => {
    return per.map(person => <Person key={person.name} person={person} />);
  };

  return <div>{rows()}</div>;
};

export default Persons;
