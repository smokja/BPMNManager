import React, { Component } from 'react';

import { DataGrid } from 'devextreme-react';
import { Column, SearchPanel, FilterPanel, HeaderFilter, FilterRow  } from 'devextreme-react/ui/data-grid';

export default class Main extends Component {
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
        return <DataGrid columnResizingMode="nextColumn" allowColumnResizing={true} dataSource={this.state.tasks}>
                <Column dataField="name"/>
                <Column dataField="assignee"/>
                <Column dataField="due"/>
                <Column dataField="description"/>
                <SearchPanel visible={true}/>
                <FilterPanel visible={true}/>
                <HeaderFilter visible={true}/>
                <FilterRow visible={true} />
        </DataGrid>;
    }
}