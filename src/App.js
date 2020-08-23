import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const names = ["johnny", "phelps", "kyle", "cook"];

  const products = [
    { name: "shoe", price: "$100" },
    { name: "backpack", price: "$80" },
    { name: "sweter", price: "$70" },
  ];

  const style = {
    color: "yellow",
  };

  // Api Call
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul style={{ color: "red" }}>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <ul style={style}>
          {products.map((product) => (
            <li key={product.name}>
              {product.name} {product.price}
            </li>
          ))}
        </ul>
        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products>
        {users.map((element) => (
          <Users
            name={element.name}
            key={element.id}
            email={element.email}
          ></Users>
        ))}
        <RandomUsers></RandomUsers>
      </header>
    </div>
  );
}

const Products = (props) => {
  const productStyle = {
    backgroundColor: "lightpink",
    color: "black",
    width: "300px",
    // height: "200px",
    margin: "10px",
    padding: "5px",
    borderRadius: "10px",
    border: "2px solid red",
  };

  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h4>Price: {price}</h4>
      <Counter></Counter>
    </div>
  );
};

// State Declaration
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>Quantity: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
};

//Api Call from jsonplaceholder.com
const Users = (props) => {
  return (
    <div>
      <h2>Users name here: {props.name}</h2>
      <h2>Email here: {props.email}</h2>
    </div>
  );
};

// Api call from randomusers.com
const RandomUsers = () => {
  const style = {
    backgroundColor: "green",
    color: "yellow",
    margin: "10px",
    padding: "5px",
    border: "2px solid red",
    borderRadius: "10px",
    width: "200px",
    height: "200px",
  };
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setItems(data.results));
  }, []);

  return (
    <>
      {items.map((item) => (
        <div style={style} key={item.name.first}>
          <h3>Name: {item.name.first}</h3>
          <h3>
            Image: <img src="{item.picture.thumbnail}" alt="" />
          </h3>
          <h3>Age: {item.dob.age}</h3>
        </div>
      ))}
    </>
  );
};

export default App;
