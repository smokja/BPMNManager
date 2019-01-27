import React, { Component } from 'react';
import { Button } from 'devextreme-react';
import { Column, Editing, DataGrid } from 'devextreme-react/data-grid';

export default class Task extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          variables: [],
          rawInput: {}
        };
        this.startVariables = this.startVariables.bind(this);
        this.startProcess = this.startProcess.bind(this);
    }
    render() {
        return <div>
            <Button text="Startvariablen" onClick={this.startVariables} />
            <Button text="Start Absenzprozess" onClick={this.startProcess}></Button>
            
            <DataGrid dataSource={this.state.variables}>
                <Editing allowUpdating={true} mode="cell"></Editing>
                <Column dataField="variable"></Column>
                <Column dataField="type"></Column>
                <Column dataField="value"></Column>
            </DataGrid>
         
        </div>;
    }
    
    async startVariables() {
        let response = await fetch('http://localhost:1000/camunda/engine-rest/process-definition/key/Process_1/form-variables');
        let json = await response.json();
        let vars = [];
        let keys = Object.keys(json);
        let sendBody = { variables: {}};
        for (let prop in keys) {
            let property = json[keys[prop]];
            sendBody.variables[keys[prop]] = { value: property.value, type: property.type};
            vars.push({"variable": keys[prop], "type": property.type, "value": property.value});
        }
        
        this.setState({ variables: vars, rawInput: json });
    }
    
    startProcess() {
        let json = this.state.rawInput;
        let keys = Object.keys(json);
        let sendBody = { variables: {}};
        for (let prop in keys) {
            let key = keys[prop];
            let actualyValues = this.state.variables.filter(x => x.variable === key)[0];
            sendBody.variables[key] = { value: actualyValues.value, type: actualyValues.type};
        }
        
        
        fetch('http://localhost:1000/camunda/engine-rest/process-definition/key/Process_1/start', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendBody)
        });    
    }
}