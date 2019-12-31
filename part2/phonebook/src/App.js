import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [addedNoti, setAddedNoti] = useState("");
  const [deletedNoti, setDeletedNoti] = useState("");
  const [missingNoti, setMissingNoti] = useState("");

  const DeleteNotification = ({ message }) => {
    const successfullDeleteStyle = {
      color: "red",
      backgroundColor: "lightgrey",
      fontSize: 20,
      padding: 10,
      borderStyle: "solid",
      borderRadius: 5,
      marginBottom: 10,
      visibility: "visible"
    };
    if (!message) {
      return null;
    } else {
      return <div style={successfullDeleteStyle}>{message}</div>;
    }
  };

  const MissingNotification = ({ message }) => {
    const successfullDeleteStyle = {
      color: "red",
      backgroundColor: "lightgrey",
      fontSize: 20,
      padding: 10,
      borderStyle: "solid",
      borderRadius: 5,
      marginBottom: 10,
      visibility: "visible"
    };
    if (!message) {
      return null;
    } else {
      return <div style={successfullDeleteStyle}>{message}</div>;
    }
  };

  const AddNotification = ({ message }) => {
    const successfullAddStyle = {
      color: "green",
      backgroundColor: "lightgrey",
      fontSize: 20,
      padding: 10,
      borderStyle: "solid",
      borderRadius: 5,
      marginBottom: 10,
      visibility: "visible"
    };


    if (!message) {
      return null;
    } else {
      return <div style={successfullAddStyle}>{message}</div>;
    }
  };

  const hook = () => {
    axios.get("http://localhost:3001/persons").then(response => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <AddNotification message={addedNoti} />
      <DeleteNotification message={deletedNoti} />
      <MissingNotification message={missingNoti} />
      <Filter persons={persons} />
      <h3>Add a new</h3>
      <PersonForm
        setAdded={setAddedNoti}
        persons={persons}
        setPersons={setPersons}
      />
      <h3>Numbers</h3>
      <Persons
        setMissing={setMissingNoti}
        setDeleted={setDeletedNoti}
        per={persons}
        setPer={setPersons}
      />
    </div>
  );
};

export default App;
