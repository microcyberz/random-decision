"use strict";

console.log("App.js is running");

var app = {
    title: "Random Decision",
    subtutle: "Put your life in computer's hand",
    options: ['one', 'two']
};

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var subtractOne = function subtractOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
