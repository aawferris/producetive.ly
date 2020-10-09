import React, { Component } from "react";
import "./Style Library/App.css";

import Countdown from "./Component Library/Countdown";
// import FocusTimer from "./Component Library/FocusTimer";
import Notes from "./Component Library/Notes";
import Tasks from "./Component Library/Tasks";
import Welcome from "./Component Library/Welcome";
import BackGround from "./Component Library/BackGround";

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Welcome />
        <BackGround />
        <Countdown />
        {/* <FocusTimer /> */}
        <Tasks />
        <Notes />
      </div>
    );
  }
}
