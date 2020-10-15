import React from "react";
import { Route } from "react-router-dom";
import "./Style Library/AppGrid.css";

import About from "./Component_Library/About";
import HomePage from "./Component_Library/HomePage";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar id="nav-bar" />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/About">
        <About />
      </Route>
    </div>
  );
}

export default App;
