'use strict';

console.log('Running....');

var appRoot = document.getElementById('app');
var isVisible = false;

// hiding and showing details
var onToggle = function onToggle() {
    isVisible = !isVisible;
    render();
};

// Rendering 
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggle },
            isVisible ? 'Hide Details' : 'Show Details'
        ),
        isVisible && React.createElement(
            'p',
            null,
            'Details are here'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
