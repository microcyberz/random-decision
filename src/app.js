console.log("App.js is running");

var app = {
    title: "Random Decision",
    subtutle: "Put your life in computer's hand",
    options: ['one', 'two']
}

// JSX - Javascript XML
var template = (
<div>
    <h1>{app.title}</h1>
    {app.subtutle && <p>{app.subtutle}</p>}
    <p>{app.options && app.options.length > 0 ?'Here are your options':'No options'}</p>
    <ol>
        <li>Item one</li>    
        <li>Item two</li>    
    </ol>
</div>
);

var user = {
    name: "Ahmad",
    age: 22,
    location: 'Mansehra'
}

function getLocation(location){
    return (location)?<p>{location}</p>:undefined;
}

var templateTwo = (
    <div>
        <h1>{user.name?user.name:'Anonymous'}</h1>
        {(user.age && user.age > 18) && <p>{user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot); 