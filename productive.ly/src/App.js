import React, { Component } from "react";
import "./Style Library/App.css";

import Advice from "./Component_Library/Advice";
// import BackGroundGet from "./Component_Library/BackGroundGet";
import BackGround from "./Component_Library/BackGround";
import BreakButton from "./Component_Library/BreakButton";
import Countdown from "./Component_Library/Countdown";
import NotesGet from "./Component_Library/NotesGet";
import NotesPost from "./Component_Library/NotesPost";
import Tasks from "./Component_Library/Tasks";
import WelcomePost from "./Component_Library/WelcomePost";
import WelcomeGet from "./Component_Library/WelcomeGet";

function App() {
  return (
    <div className="main-container" style={backgroundStyle}>
      <BackGround />
      <WelcomeGet />
      <WelcomePost />
      <Countdown />
      <Tasks />
      <NotesGet />
      <NotesPost />
      <BreakButton />
      <Advice />
    </div>
  );
}

export default App;
