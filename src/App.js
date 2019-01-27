import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
            
        this.state = {
            tasks: []    
        };
        
        // check the api and redo this
        fetch('http://localhost:1000/camunda/engine-rest/task')
        .then(res => res.json())
        .then(json => this.setState({tasks: json}))
        .catch();
    }
    
    render() {
        return <div>
            <h1>Task list</h1>
            {
                this.state.tasks.map(x => <p>{x.name}</p>)
            }
        </div>
    }
}