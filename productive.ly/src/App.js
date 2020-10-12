import React, { Component } from "react";
import "./Style Library/App.css";

import BackGroundGet from "./Component_Library/BackGroundGet";
import BreakButton from "./Component_Library/BreakButton";
import Countdown from "./Component_Library/Countdown";
import Notes from "./Component_Library/Notes";
import Tasks from "./Component_Library/Tasks";
import WelcomePost from "./Component_Library/WelcomePost";
import WelcomeGet from "./Component_Library/WelcomeGet";

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <BackGroundGet />
        <WelcomeGet />
        <WelcomePost />
        <Countdown />
        <Tasks />
        <Notes />
        <BreakButton />
      </div>
    );
  }
}
