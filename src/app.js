console.log("App.js is running");

const app = {
    title: "Random Decision",
    subtutle: "Put your life in computer's hand",
    options: ['one', 'two']
}

let count = 0;

const addOne = () => {
    count++;
    renderCounterApp(); 
}

const subtractOne = () => {
    count--;
    renderCounterApp(); 
}

const reset = () => {
    count = 0;
    renderCounterApp(); 
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subtractOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot); 
};

renderCounterApp();