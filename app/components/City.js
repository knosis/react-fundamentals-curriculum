import React from 'react'
import { Link } from 'react-router'

let City = React.createClass({
  render() {
    return (
        <ul role="nav">
          <li>input</li>
          <li><Link to='/forecast'>
            <button type='button' className='btn btn-lg btn-success'>Get Started
            </button>
            </Link>
          </li>
        </ul>
    )
  }
});

export default City

