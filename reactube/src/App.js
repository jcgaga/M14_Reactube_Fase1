import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import axios from "axios";

function App() {
  /** Fetch */
  fetch("https://api.github.com/users/hacktivist123")
    .then((response) => response.json())
    .then((data) => console.log(data));

  /** Axios */
  axios
    .get("https://api.github.com/users/hacktivist123", {
      responseType: "json",
    })
    .then(function (res) {
      if (res.status === 200) {
        console.log(res.data);
      }
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });

  return (
    <div className="App">
      <header className="App-header">
        <Button>Button</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
