import React from "react";
import { Route } from "react-router-dom";
import "./Style Library/AppGrid.css";

import About from "./Component_Library/About";
import HomePage from "./Component_Library/HomePage";

function App() {
  return (
    <div>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
    </div>
  );
}

export default App;
