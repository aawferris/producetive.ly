import React, { Component } from "react";
import "./Style Library/App.css";

import Countdown from "./Component Library/Countdown";
// import FocusTimer from "./Component Library/FocusTimer";
// import Notes from "./Component Library/Notes";
import Tasks from "./Component Library/Tasks";
import WelcomePost from "./Component Library/WelcomePost";
import BackGround from "./Component Library/BackGround";
import WelcomeGet from "./Component Library/WelcomeGet";

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <WelcomePost />
        <WelcomeGet />
        <BackGround />
        <Countdown />
        {/* <FocusTimer /> */}
        <Tasks />
        {/* <Notes /> */}
      </div>
    );
  }
}
