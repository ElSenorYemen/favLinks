import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            favLinks: []
        }

        /* TODO - Create state object for storing favLinks */
    }

    removeCharacter = index => {

        this.setState(state => {
            const favLinks = state.favLinks.filter((item,j) => index !==j);
            return {
                favLinks
            } 
         })

        /*this.setState(({favLinks}) => ({ 

            favLinks: favLinks.filter((_,i) => i !== index)

        })); /* 
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    }

    handleSubmit = favLink => {
       /* this.setState((state) => ({
            favLinks: state.favLinks.concat(favLink)
        })); */
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
            let newArray = this.state.favLinks
            this.setState({favLinks: this.state.favLinks.concat(favLink)})
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                <Table linkData={this.state.favLinks} removeLink = {this.removeCharacter}/>
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;