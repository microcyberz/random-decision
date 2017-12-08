class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);       
        this.state= {
            visibility : false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
        
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>Details are here</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));4






 





// const appRoot = document.getElementById('app');
// let isVisible = false;

// // hiding and showing details
// const onToggle = () =>{ 
//     isVisible = !isVisible;
//     render();
// }

// // Rendering 
// const render = () => {
    // const template = (
    //     <div>
    //         <h1>Visibility Toggle</h1>
    //         <button onClick={onToggle}>
    //             {isVisible ? 'Hide Details' : 'Show Details'}
    //         </button>
    //         {isVisible && <p>Details are here</p>}
    //     </div>
    // );
//     ReactDOM.render(template,appRoot);
// };

// render();

