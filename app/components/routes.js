var React = require('react');
var render = require('react-dom').render;
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = Router.hashHistory;
var Main = require('./Main');
var Forecast = require('./Forecast');
var City = require('./City');

module.exports = function (props) {
  return (
  <Route path="/" component={Main}>
    <Route path="/forecast" component={Forecast}>
      <Route path="/cities/:city" component={City}/>
    </Route>
  </Route>
  )
}