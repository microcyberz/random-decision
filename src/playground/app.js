// App main component
class RandomDecision extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    // remove all
    handleDeleteOptions(){
        this.setState(()=> ({options: []}));          
    }

    // remove single
    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return "Enter Valid Value to Add";
        }else if(this.state.options.indexOf(option) >-1){
            return "This option already exists";
        }
        this.setState((prevState)=> ({options: prevState.options.concat(option)}));
    }

    render(){
        const subtitle = "Put your life in the hands of a computer";
        return (
        <div>
            <Header subtitle={subtitle} />
            <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}    
            />
            <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}                
                handleDeleteOption={this.handleDeleteOption}                
            />
            <AddOption 
                handleAddOption={this.handleAddOption}
            />
        </div>
        )};
}



// HEADER
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

// Default props
Header.defaultProps = {
    title: 'Random Decision'
}

// ACTION 
const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}

// LIST OF OPTIONS
const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {props.options.map((option) => (
            <Option 
            key={option}  
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
            />
        ))}
        </div>
    );
}

// Option 
const Option = (props) => {
    return(
        <div>
        {props.optionText}
        <button
        onClick={(e) => {
            props.handleDeleteOption(props.optionText)
        }}
        >
        remove
        </button>
        </div>
    );
}

// ADDING OPTIONS TO SELECT FROM
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }    
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=> ({error}));

        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<RandomDecision />, document.getElementById('app'));