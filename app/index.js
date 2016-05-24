import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, render } from 'react-router'
import Main from '../app/components/Main'
import routes from '../app/components/routes'


ReactDOM.render(routes, document.getElementById('app'))