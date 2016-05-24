var React = require('react');
var HelloWorld = require('./HelloWorld');
var ReactRouter = require('react-router').Router;
var Link = require('react-router').Link;

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Rain or Shine</h1>
        <ul role="nav">
          <li>input</li>
          <li><Link to='/forecast'>
            <button type='button' className='btn btn-lg btn-success'>Get Started
            </button>
              </Link>
          </li>
        </ul>
        <HelloWorld />
      </div>
    )
  }
});

module.exports = Main;

