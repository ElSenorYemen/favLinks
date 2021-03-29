import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            Name: "",
            URL: ""
        
        };
        /*
            TODO - set initial state for link name and URL 

        */
        
    }


    handleNameChange = event => {

        console.log("input updated!!")
        console.log(event.target)

        this.setState({
            Name: event.target.value,
        });
    }

    handleURLChange = event => {

        console.log("input updated!!")
        console.log(event.target)

        this.setState({
            URL: event.target.value,
        });
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();

        this.props.handleSubmit(this.state);

        this.setState({
            Name: "",
            URL: ""
        });
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                <label>Name:</label>
                <input type="text" onChange= {this.handleNameChange} value={this.state.Name} ></input>

                <label >URL:</label>
                <input type="text" onChange={this.handelURLChange} value={this.state.URL}></input>

                <button onClick= {this.onFormSubmit}>Submit</button>

                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
            </form>
        )
    
    }
}

export default Form;
