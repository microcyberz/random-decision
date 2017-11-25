"use strict";

console.log("App.js is running");

var app = {
    title: "Random Decision",
    subtitle: "Put your life in computer's hand",
    options: []
};

// When item is inserted
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //stop sending data in link and reloading whole page
    var option = e.target.elements.option.value; // the input value of form
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

// Making the list empty
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

// Picking Random Option
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    console.log(option);
};
var appRoot = document.getElementById('app');

// Rendering JSX on the page
var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No Options"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What Should I Do?"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (item) {
                return React.createElement(
                    "li",
                    { key: item },
                    item
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Options"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
