import React, { Component } from 'react';
// import {Link, Route, Switch} from 'react-router-dom'
import './App.css';
// import FocusTimer from './FocusTimer';
import Countdown from './Countdown'
import Notes from './Notes';
import Tasks from './Tasks';
import Welcome from './Welcome'

export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Countdown/>
        {/* <FocusTimer/> */}
        <Tasks />
        <Notes />
      </div>
    )
  }
}