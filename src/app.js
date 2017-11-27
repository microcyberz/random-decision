
// HEADER
class Header extends React.Component{
    render(){
       return (
        <div>
            <h1>Random Decision</h1>
            <h2>Put your life in the hands of a computer</h2>
        </div>
       );
    }
}


// ACTION 
class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

// LIST OF OPTIONS
class Options extends React.Component{
    render(){
        return (
            <ol>
                <li>Option 1</li>
                <li>Option 2</li>
            </ol>
        );
    }
}

// ADDING OPTIONS TO SELECT FROM
class AddOption extends React.Component{
    render(){
        return (
            <form>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));