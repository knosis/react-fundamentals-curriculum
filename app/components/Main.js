import React from 'react'
import { Route, Link } from 'react-router'

let Main = React.createClass({
  render() {
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
      </div>
    );
  }
});

export default Main
