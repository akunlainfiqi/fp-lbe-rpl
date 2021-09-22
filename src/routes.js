import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';

import Home from './pages/home'
import Todo from './pages/todo'

import Header from './components/header'

const Routes=()=>{
    return(
        <Router>
        <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/todo" component={Todo}/>

                <Redirect from="*" to="/"/>
            </Switch>
        </Router>
    )
}


export default Routes;