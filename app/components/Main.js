import React from 'react'
import Home from './Home'
import City from './City'
import { Route, Link } from 'react-router'

const styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
}

let Main = React.createClass({
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
        <h2>Rain or Shine</h2>
          <City/>
        </div>
        <Home/>
      </div>
    );
  }
});

export default Main
