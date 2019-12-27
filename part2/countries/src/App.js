import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <Filter countries={countries} />
    </div>
  );
};

export default App;
