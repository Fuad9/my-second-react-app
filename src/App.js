import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const Person = {
    name: "david",
    age: 30,
  };

  const personStyle = {
    color: "blue",
    backgroundColor: "yellow",
  };

  const Subscriber = ["reaganFoxx", "arnold", "megan"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={personStyle}>
          Howdy! I am {Person.name}, I am {Person.age} years old
        </p>
        <User name="Roger" age="40"></User>
        <User name={Subscriber[0]}></User>
      </header>
    </div>
  );
}

const User = (props) => {
  const userStyle = {
    color: "green",
    border: "2px solid red",
    borderRadius: "10px",
    margin: "4px",
  };
  return (
    <div style={userStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
    </div>
  );
};

export default App;
