import React, { useState } from "react";
import ReactDOM from "react-dom";

const randomHandler = () => {
  return parseInt(Math.random() * 6);
};

const voteHandler = ({ vote, selected }) => {
  const voteCopy = [...vote];
  voteCopy[selected] += 1;
  return voteCopy;
};

const App = props => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(6).fill(0));
  
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {props.anecdotes[selected]} <br />
      <p>has {vote[selected]} votes</p>
      <button onClick={() => setVote(voteHandler({ vote, selected }))}>
        vote
      </button>
      <button onClick={() => setSelected(randomHandler())}>
        next anecdotes
      </button>
      <h1>Anecdotes with most votes</h1>
      {props.anecdotes[vote.indexOf(Math.max(...vote))]} <br />
      <br />
      <p>has {Math.max(...vote)} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
