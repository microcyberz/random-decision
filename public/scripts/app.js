"use strict";

console.log("App.js is running");

var app = {
    title: "Random Decision",
    subtutle: "Put your life in computer's hand",
    options: ['one', 'two']
};

var count = 0;

var addOne = function addOne() {
    console.log("addOne");
};

var subtractOne = function subtractOne() {
    console.log("subtractOne");
};

var reset = function reset() {
    console.log("reset");
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: subtractOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "Reset"
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
