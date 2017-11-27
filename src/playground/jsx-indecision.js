console.log("App.js is running");

const app = {
    title: "Random Decision",
    subtitle: "Put your life in computer's hand",
    options: []
};


// When item is inserted
const onFormSubmit = (e) =>{
    e.preventDefault(); //stop sending data in link and reloading whole page
    const option = e.target.elements.option.value; // the input value of form
    if(option){
        app.options.push(option); 
        e.target.elements.option.value = '';
        render();
    }
}

// Making the list empty
const onRemoveAll = () => {
    app.options = [];
    render();
}

// Picking Random Option
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
};
const appRoot = document.getElementById('app');

// Rendering JSX on the page
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options": "No Options"}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button disabled={app.options.length === 0} onClick={onRemoveAll}>Remove All</button>
            
            <ol>
                {
                    app.options.map((item) => <li key={item}>{item}</li>)
                }
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