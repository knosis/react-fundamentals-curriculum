import React from 'react'
import ReactDOM from 'react-dom'
import Router, { Route, hashHistory, render } from 'react-router'
import Main from './Main'
import Forecast from './Forecast'
import City from './City'

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
