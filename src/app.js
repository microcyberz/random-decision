console.log("App.js is running");

const app = {
    title: "Random Decision",
    subtitle: "Put your life in computer's hand",
    options: []
};

const onFormSubmit = (e) =>{
    e.preventDefault(); //stop sending data in link and reloading whole page
    const option = e.target.elements.option.value; // the input value of form
    if(option){
        app.options.push(option); 
        e.target.elements.option.value = '';
        render();
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options": "No Options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);    
}

render();