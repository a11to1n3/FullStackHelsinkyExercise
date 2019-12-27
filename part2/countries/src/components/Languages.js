import React from "react";

const Languages = ({ languages }) => {
  const Language = ({ language }) => {
    return <li>{language}</li>;
  };

  return languages.map(language => {
    return <Language key={language.iso639_1} language={language.name} />;
  });
};

export default Languages;
