import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Error404 from '../containers/Error404'
import Form from '../containers/Form'

const Routes = () => (
  <Switch>
    <Route exact path='/' />
    <Route exact path='/form' component={Form} />
    <Route component={Error404} />
  </Switch>
)

export default Routes
