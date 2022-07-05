import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './home'
import Admin from './admin'
import Stats from './stats'

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Admin}/>
                    <Route path='/home/' component={Home}/>
                    <Route path='/stats' component={Stats}/>
                </Switch>
                
            </div>
        )
    }
}
