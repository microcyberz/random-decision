console.log('Running....')


const appRoot = document.getElementById('app');
let isVisible = false;

// hiding and showing details
const onToggle = () =>{ 
    isVisible = !isVisible;
    render();
}

// Rendering 
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>
                {isVisible ? 'Hide Details' : 'Show Details'}
            </button>
            {isVisible && <p>Details are here</p>}
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render();

