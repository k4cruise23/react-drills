import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import Signup from './signup'
import Details from './details'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/details' component={Details} />
    </Switch>
)