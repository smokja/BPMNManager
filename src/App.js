import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
            
        this.state = {
            tasks: []    
        };
        
        // check the api and redo this
        fetch('localhost:8080/engine-rest/task')
            .then(res => res.json())
            .then(json => this.setState({tasks: json}));
    }
    
    render() {
        return <div>
            <h1>Task list</h1>
        </div>
    }
}