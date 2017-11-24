"use strict";

console.log("App.js is running");

var app = {
    title: "Random Decision",
    subtitle: "Put your life in computer's hand",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //stop sending data in link and reloading whole page
    var option = e.target.elements.option.value; // the input value of form
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');

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
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                "Item 1"
            ),
            React.createElement(
                "li",
                null,
                "Item 2"
            )
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
