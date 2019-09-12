import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './component/products'
import Details from './component/details'

export default (
    <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/details/:id' component={Details} />
    </Switch>
)