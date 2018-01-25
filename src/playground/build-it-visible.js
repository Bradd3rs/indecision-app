class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Visibility Toggle',
            showText: false
        }

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                showText: !prevState.showText
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggle}>{this.state.showText  ? 'Hide info' : 'Show Info'}</button>
                <p>{this.state.showText ? 'This is the info you need!' : null}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// const app = {
//     title: 'Title',
//     showText: false
// };

// const toggle = () => {

//     app.showText = !app.showText;
//     render()
// };

// const render = () => {

//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggle}>{app.showText ? 'Hide info' : 'Show Info'}</button>
//             <p>{app.showText ? 'This is the info you need!' : null}</p>
//         </div>
//     );

//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template, appRoot);
// };

// render()