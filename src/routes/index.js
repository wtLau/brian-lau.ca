import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Error404 from '../containers/Error404'
import About from '../containers/About'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={About}/>
        <Route component={Error404} />
    </Switch>
)

export default Routes
