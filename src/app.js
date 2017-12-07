
class Mohsin extends React.Component{
    render(){
        
    }
}
// App main component
class RandomDecision extends React.Component{
    render(){
        const title = "MEY MEY";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["option a","option c","option b"]
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options} length={options.length} />
            <AddOption />
        </div>
        )};
}



// HEADER
class Header extends React.Component{
    render(){
       return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>
       );
    }
}
 

// ACTION 
class Action extends React.Component{
    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

// LIST OF OPTIONS
class Options extends React.Component{
    handleRemoveAll(){
        alert("removed");
    }
    render(){
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            {this.props.options.map((option) => <Option key={option}  optionText={option}/>)}
            </div>
        );
    }
}

// Option 
class Option extends React.Component{
    render(){
        return(
            <div>
            {this.props.optionText}
            </div>
        );
    }
}
``

// ADDING OPTIONS TO SELECT FROM
class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option){
            alert(option);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button onClick='handleAddOption'>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<RandomDecision />, document.getElementById('app'));