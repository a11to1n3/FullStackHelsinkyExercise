import React, { useState } from "react";
import axios from "axios";

const Persons = ({ setMissing, setDeleted, per, setPer }) => {
  const deleteContact = people => {
    if (window.confirm(`Delete ${people.person.name}?`)) {
      setPer(
        per.filter(person => {
          if (person.name !== people.person.name) {
            return person;
          }
        })
      );
      setDeleted(`Deleted ${people.person.name}`);
      setTimeout(() => {
        setDeleted(null);
      }, 5000);
      axios
        .delete(`http://localhost:3001/persons/${people.person.id}`)
        .catch(error => {
          if (error.response.request.status === 404) {
            console.log("I am here");
            setDeleted(null);
            setMissing(
              `Information of user ${people.person.name} was already removed`
            );
            setTimeout(() => setMissing(null), 5000);
          }
        });
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
