import React, { Component } from 'react';
import {Link} from 'react-router'
import './App.css';

export const LandingPage = () =>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
    <Link to="/todos"><span>Klick meee</span></Link>
  </p>
