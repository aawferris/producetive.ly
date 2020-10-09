import React, { Component } from 'react';
// import {Link, Route, Switch} from 'react-router-dom'
import './App.css';
import FocusTimer from './FocusTimer';
import Notes from './Notes';
import Tasks from './Tasks';
import Welcome from './Welcome'

export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <FocusTimer/>
        <Tasks />
        <Notes />
      </div>
    )
  }
}