import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, fn }) => {
  return <button onClick={fn}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  if ((text === "positive")) {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given.</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={good + neutral + bad} />
            <Statistic text="average" value={good + neutral * 0 - bad} />
            <Statistic
              text="positive"
              value={good === 0 ? 0 : (good / (good + neutral + bad)) * 100}
            />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlingGood = () => {
    setGood(good + 1);
  };

  const handlingNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handlingBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text="good" fn={handlingGood} />
        <Button text="neutral" fn={handlingNeutral} />
        <Button text="bad" fn={handlingBad} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
