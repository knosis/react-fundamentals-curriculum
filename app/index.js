var React = require('react');
var ReactDOM = require('react-dom');
var render = ReactDOM.render
var Router = require('react-router');
var Route = Router.Route;
var hashHistory = Router.hashHistory;
var Main = require('../app/components/Main');
var routes = require('../app/components/routes');



render(
  (
  <Router routes={routes} history={hashHistory}/>, document.getElementById('app')
  )
)