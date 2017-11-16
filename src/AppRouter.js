import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App'
import {LandingPage} from './LandingPage'
import TodoList from './TodoList'

const AppRouter = () => {
  return <div>
      <Router history = { hashHistory }>
        <Route path = "/" component ={App}>
        <IndexRoute component={LandingPage}/>
        <Router path = "/todos" component = {TodoList}/>
        </Route>
      </Router>
    </div>

}

export default AppRouter
