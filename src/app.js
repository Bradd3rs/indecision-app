const info = {
    title: 'Indecision App',
    subtitle: 'Subtitle',
    options: 'Hello'
};

const template = (
    <div>
        <h1>{info.title ? info.title : null}</h1>
        {info.subtitle && <p>{info.subtitle}</p>}
        <p>{info.options.length > 0 ? 'Here are your options' : 'no options'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('add one');
};
const minusOne = () => {
    console.log('minus one');
};
const reset = () => {
    console.log('reset');
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
)
console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);