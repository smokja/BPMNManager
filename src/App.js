import React, { Component } from 'react';


export default class App extends Component {
    constructor(props) {
        super(props);
            
        this.state = {
            tasks: []    
        };
        
        // check the api and redo this
        fetch('camunda/api/tasks')
            .then(x => this.setState({tasks: x}));
    }
    
    render() {
        return <div>
            
            <h1>Task list</h1>
            
            
            
        </div>
    }
}