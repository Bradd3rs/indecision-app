const app = {
    title: 'Title',
    showText: false
};

const toggle = () => {

    app.showText = !app.showText;
    render()
};

const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggle}>{app.showText ? 'Hide info' : 'Show Info'}</button>
            <p>{app.showText ? 'This is the info you need!' : null}</p>
        </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render()