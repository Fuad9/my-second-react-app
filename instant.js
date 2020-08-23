import React, { useState } from "react";
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

  const Subscribers = ["ReaganFoxx", "Arnold", "Megan"];

  const Products = [
    { name: "Adobe Photoshop", price: "&60" },
    { name: "Illustrator", price: "$50" },
    { name: "Acrobat Reader", price: "$40" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <p style={personStyle}>
          Howdy! I am {Person.name}, I am {Person.age} years old
        </p>
        <User name="Roger" age="40"></User>
        <h2>Subscribers</h2>
        <ul>
          {Subscribers.map((subscriber) => (
            <li>{subscriber}</li>
          ))}
        </ul>
        <ul>
          {Products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {Products.map((pd) => (
          <Product product={pd}></Product>
        ))}
        <Product product={Products[0]}></Product>
        <Product product={Products[1]}></Product>
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

const Product = (props) => {
  const productStyle = {
    color: "black",
    backgroundColor: "lightgray",
    border: "1px solid red",
    borderRadius: "10px",
    height: "200px",
    width: "200px",
    // float: "left",
    fontSize: "0.8rem",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h1>Name: {name}</h1>
      <h2>Price: {price}</h2>
      <button type="submit">Submit</button>
    </div>
  );
};

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default App;
