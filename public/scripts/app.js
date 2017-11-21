"use strict";

console.log("App.js is running");

var app = {
    title: "Random Decision",
    subtutle: "Put your life in computer's hand",
    options: ['one', 'two']

    // JSX - Javascript XML
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtutle && React.createElement(
        "p",
        null,
        app.subtutle
    ),
    React.createElement(
        "p",
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var user = {
    name: "Ahmad",
    age: 22,
    location: 'Mansehra'
};

function getLocation(location) {
    return location ? React.createElement(
        "p",
        null,
        location
    ) : undefined;
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age > 18 && React.createElement(
        "p",
        null,
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
