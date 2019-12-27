import React, { useState, useEffect } from "react";
import Languages from "./Languages";
import Weather from "./Weather";

const Filter = ({ countries }) => {
  const [newFilter, setNewFilter] = useState("");
  const [isString, setString] = useState(true);
  const [showCountry, setShowCountry] = useState("");

  const handleShowClick = ({ country }) => {
    setShowCountry(
      <div key={country.name}>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <br />
        <h2>languages</h2>
        <ul>
          <Languages languages={country.languages} />
        </ul>
        <img width="200" src={country.flag} />
        <h2>Weather in {country.capital}</h2>
        <Weather country={country.capital} />
      </div>
    );
  };

  const handleFilterChange = event => {
    const filName = countries.filter(country => {
      if (
        country.name.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return country;
      }
    });
    if (filName.length > 10) {
      setString(true);
      setNewFilter("Too many matches, specify another filter");
    } else if (filName.length > 0) {
      setString(false);
      setNewFilter(filName);
    } else {
      setString(true);
      setNewFilter("No matches");
    }
  };

  const rowFilter = () => {
    console.log(isString);
    console.log(newFilter);
    if (isString) {
      return <div>{newFilter}</div>;
    } else {
      if (newFilter.length > 1) {
        return newFilter.map(country => {
          return (
            <div key={country.name}>
              {country.name}{" "}
              <button onClick={() => handleShowClick({ country })}>Show</button>
              <br />
            </div>
          );
        });
      } else {
        if (showCountry) {
          setShowCountry("");
        }
        return newFilter.map(country => (
          <div key={country.name}>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <br />
            <h2>languages</h2>
            <ul>
              <Languages languages={country.languages} />
            </ul>
            <img width="200" src={country.flag} />
            <h2>Weather in {country.capital}</h2>
            <Weather country={country.capital} />
          </div>
        ));
      }
    }
  };

  const row = () => {
    return showCountry;
  };

  return (
    <div>
      <form>
        <div>
          filter show with <input onChange={handleFilterChange} />
        </div>
      </form>
      <div>{rowFilter()}</div>
      <div>{row()}</div>
    </div>
  );
};

export default Filter;
