import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import Main from './Main'
import Forecast from './Forecast'
import City from './City'
import Home from './Home'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/forecast" component={Forecast}>
        <Route path="/cities/:city" component={City}/>
      </Route>
    </Route>
  </Router>
)

export default routes
