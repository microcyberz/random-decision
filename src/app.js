// import "./utils";
import {square, add} from "./utils";
import isSenior, {isAdult, canDrink} from "./person";
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log("pp.js is Running...");

console.log("\n====== UTILS ======");
console.log(square(8));
console.log(add(5,6));

console.log("====== PERSON ======");
console.log(isAdult(21));
console.log(canDrink(21));
console.log(isSenior(65));

console.log("====== VALIDATOR, React, ReactDOM (npm) ======");
console.log(validator.isEmail('asd@asd.com'))
const template = <p>JSX template rendered</p>
ReactDOM.render(template,document.getElementById('app'));
