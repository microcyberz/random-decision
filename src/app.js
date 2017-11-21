console.log("App.js is running");

var app = {
    title: "Random Decision",
    subtutle: "Put your life in computer's hand"
}

// JSX - Javascript XML
var template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subtutle}</p>
    <ol>
        <li>Item one</li>    
        <li>Item two</li>    
    </ol>
</div>
);

var user = {
    name: "Ahmad Ali",
    age: 21,
    location: "Mansehra"
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot); 