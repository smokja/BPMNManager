import React, { Component } from "react";
import Main from './Main';
import Task from './Task';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default class Router extends Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route path={"/task"} component={Task} ></Route>
                <Route path={"/"} component={ Main } ></Route>
            </Switch>
        </BrowserRouter>;
    }
}