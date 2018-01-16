'use strict';

var info = {
    title: 'Indecision App',
    subtitle: 'Subtitle',
    options: 'Hello'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        info.title ? info.title : null
    ),
    info.subtitle && React.createElement(
        'p',
        null,
        info.subtitle
    ),
    React.createElement(
        'p',
        null,
        info.options.length > 0 ? 'Here are your options' : 'no options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('add one');
};
var minusOne = function minusOne() {
    console.log('minus one');
};
var reset = function reset() {
    console.log('reset');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);
console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);