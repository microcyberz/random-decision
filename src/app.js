console.log("App.js is running");

const app = {
    title: "Random Decision",
    subtutle: "Put your life in computer's hand",
    options: ['one', 'two']
}

let count = 0;

const addOne = () => {
    console.log("addOne");
}

const subtractOne = () => {
    console.log("subtractOne");
}

const reset = () => {
    console.log("reset");
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={subtractOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot); 