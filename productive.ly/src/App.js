import React, { Component } from "react";
import "./App.css";

import Countdown from "./Component Library/Countdown";
import FocusTimer from "./Component Library/FocusTimer";
import Notes from "./Component Library/Notes";
import Tasks from "./Tasks";
import Welcome from "./Component Library/Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Countdown />
        <FocusTimer />
        <Tasks />
        <Notes />
      </div>
    );
  }
}
