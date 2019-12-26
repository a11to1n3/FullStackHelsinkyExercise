import React from "react";

const Persons = ({persons}) => {

  const Person = ({ name, number }) => {
    return (
      <div>
        {name} {number}
        <br />
      </div>
    );
  };

  const rows = () =>
    persons.map(person => (
      <Person key={person.name} name={person.name} number={person.number} />
    ));

  return <div>{rows()}</div>;
};

export default Persons;
