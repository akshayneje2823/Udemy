import React from "react";
import ReactDOM from "react-dom";

const fName = "Akshay ";
const lName = "Neje";

const num = 99;

ReactDOM.render(
  <div>
    <h1>My Name Is {fName + lName}</h1>
    <p>Favourate number is {num}</p>
  </div>,
  document.getElementById("root")
);
