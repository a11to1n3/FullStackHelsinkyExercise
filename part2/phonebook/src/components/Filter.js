import React, { useState } from "react";


const Filter = ({persons}) => {
  const [newFilter, setNewFilter] = useState("");
  const [isString, setString] = useState(true);

  const handleFilterChange = event => {
    const filName = persons.filter(person => {
      if (
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return person;
      }
    });
    if (filName.length > 0) {
      setString(false);
      setNewFilter(filName);
    } else {
      setString(true);
      setNewFilter("Nothing to show");
    }
  };

  const rowFilter = () => {
    console.log(isString);
    console.log(newFilter);
    if (isString) {
      return <div>{newFilter}</div>;
    } else {
      return newFilter.map(person => (
        <div key={person.name}>
          {person.name} {person.number}
          <br />
        </div>
      ));
    }
  };

  return (
    <div>
      <form>
        <div>
          filter show with <input onChange={handleFilterChange} />
        </div>
      </form>
      <div>{rowFilter()}</div>
    </div>
  );
};

export default Filter;
