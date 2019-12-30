import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  const hook = () => {
    axios.get("http://localhost:3001/persons").then(response => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons per={persons} setPer = {setPersons} />
    </div>
  );
};

export default App;
