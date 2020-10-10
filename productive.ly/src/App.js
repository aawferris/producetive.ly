import React, { Component } from "react";
import "./Style Library/App.css";

import BackGroundGet from "./Component Library/BackGroundGet";
import Countdown from "./Component Library/Countdown";
// import FocusTimer from "./Component Library/FocusTimer";
import Notes from "./Component Library/Notes";
import Tasks from "./Component Library/Tasks";
import WelcomePost from "./Component Library/WelcomePost";
import WelcomeGet from "./Component Library/WelcomeGet";

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <BackGroundGet />
        <WelcomeGet />
        <WelcomePost />
        <Countdown />
        {/* <FocusTimer /> */}
        <Tasks />
        <Notes />
      </div>
    );
  }
}
